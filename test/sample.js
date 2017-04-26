var program = require('commander')
var prompt = require('prompt')
var colors = require('colors')

program
  .version('0.0.2')
  .option('-a, --above', 'The discription')
  .option('-c, --clean', 'Another option')

program
  .command("test [save]")
  .description('The description to test the command with.')
  .option('-i, --info [state]', 'The info description for option -i','ma')
  .option('-f, --flag', 'This is a flag. If set then the info will get printed out.')
  .action(function (save, options) {
    save = save || 'memory'
    var info = options.info || "No info given"
    console.log(colors.red(save))
    var above = program.above || "Default"
    console.log(colors.green(above))
    var flag = options.flag || false
    if (options.flag) {
      console.log(colors.cyan(info))
    }
  })


program.on('--help', function () {
  console.log('')
  console.log(colors.green('Examples: '))
  console.log('')
  console.log('    $ sample -h')
  console.log('    $ sample test')
  console.log('    $ sample test --info "New Hampshire"')
  console.log('')
  console.log('sample is a program to show the viewer how cli programs work in node')
  console.log('')
})

program.on('error', function (err, command) {
  console.log('')
  console.log('Customer error:')
  console.log(colors.red('  Error:', err.message))
  command.outputUsage()
  command.outputCommands()
  command.outputOptions()
  console.log()
  process.exit(1)

})

program.parse(process.argv)

