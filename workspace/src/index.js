/* eslint-disable no-console */
/*
  Keep your logic out of this file. Just use it to start running your app
  This file is ignored in test coverage reports
*/

// @flow
import { defaultOptions, getOptions } from 'penthouse/config'

import App from './penthouse-cli'
import program from 'commander'

const app = new App()
app.clear()
app.sayHello()
app.getVersion().then(console.log)

const progWithOptions = program.version('0.1.2').usage('[options] <file ...>')

const options = getOptions()

Object.keys(options).reduce(
  (prevVal /* : any */, curVal) => {
    const { command, desc } = defaultOptions[curVal]
    console.log(curVal)
    return prevVal.option(command, desc, () => {}, options[curVal])
  }
  , progWithOptions
)

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

console.log(' int: %j', program.width, program.height)
// console.log(' float: %j', program.float)
// console.log(' optional: %j', program.optional)
program.range = program.range || []
// console.log(' range: %j..%j', program.range[0], program.range[1])
// console.log(' list: %j', program.list)
// console.log(' collect: %j', program.collect)
// console.log(' verbosity: %j', program.verbose)
// console.log(' args: %j', program.args)
