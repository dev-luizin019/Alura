import chalk from 'chalk';

const log = console.log;

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color


log(chalk.blue('Hello') + ' World' + chalk.red('!'));

log(error('Error!'));
log(warning('Warning!'));
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));