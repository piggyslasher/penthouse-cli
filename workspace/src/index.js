/* eslint-disable no-console, spaced-comment */
/*
  Keep your logic out of this file. Just use it to start running your app
  This file is ignored in test coverage reports
*/

// @flow
import {
  defaultOptions,
  getOptions,
} from 'penthouse/config'

import penthouse from 'penthouse'

import App from './penthouse-cli'

import program from 'commander'

/*::
const toObject = keys => keys.reduce((object, key) => {
  object[key] = undefined;

  return object;
}, {});

type Pick<Origin: Object, Keys: $ReadOnlyArray<$Keys<Origin>>> = $ObjMapi<
  $Call<typeof toObject, Keys>,
  <Key>(k: Key) => $ElementType<Origin, Key>
>;
*/

/**
 * Creates an object composed of the picked object properties.
 * @param obj The source object
 * @param paths The property paths to pick
 */
const pick = (obj, paths = Object.keys(defaultOptions))/*: Pick */ =>
  ({ ...paths.reduce((mem, key) => ({ ...mem, [key]: obj[key] }), {}) })


const app = new App()
// app.clear()
app.sayHello()
app.getVersion().then(console.log)

const progWithOptions = program.version('0.1.2').usage('[options] <file ...>')

Object.keys(defaultOptions).reduce((prevVal /* : any */, curVal) => {
  const {
    command,
    desc,
  } = defaultOptions[curVal]
  return prevVal.option(command, desc)
}, progWithOptions)

progWithOptions.parse(process.argv).action((v, a) => console.log('asd', v, a))

penthouse(progWithOptions).then(console.log)

// program
//   .version('0.1.0')
//   .usage('[options] <file ...>')
//   .option('-i, --integer <n>', 'An integer argument', parseInt)
//   .option('-f, --float <n>', 'A float argument', parseFloat)
//   .option('-r, --range <a>..<b>', 'A range', range)
//   .option('-l, --list <items>', 'A list', list)
//   .option('-o, --optional [value]', 'An optional value')
//   .option('-c, --collect [value]', 'A repeatable value', collect, [])
//   .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)
//   .parse(process.argv)

Object.keys(finalOptions).map(k => console.log(k, typeof (finalOptions[k])))

// console.log(' float: %j', program.float)
// console.log(' optional: %j', program.optional)
program.range = program.range || []
// console.log(' range: %j..%j', program.range[0], program.range[1])
// console.log(' list: %j', program.list)
// console.log(' collect: %j', program.collect)
// console.log(' verbosity: %j', program.verbose)
// console.log(' args: %j', program.args)
