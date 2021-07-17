const { program } = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const generatePassword = require('./utils/generatePassword');

program.version('1.0.0').description('Simple password generator');

program
  .option('-l, --length <len>', 'length of password', '8')
  .option('-s, --save', 'save password to a file')
  .option('-nn, --no-numbers', 'exclude numbers from password')
  .option('-ns, --no-symbols', 'exclude symbols from password')
  .parse();

const options = program.opts();
const { length, numbers, symbols, save } = options;

const geneartedPassword = generatePassword(length, numbers, symbols);

clipboardy.writeSync(geneartedPassword);
console.log(chalk.blue('Generated Password: ') + chalk.bold(geneartedPassword));
console.log(chalk.green('Copied to your clipboard!'));
