const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const chalk = require('chalk');

const argv = yargs(hideBin(process.argv)).parse();

if (argv.city) {
    switch (argv.city.toLowerCase()) {
        case "philadelphia":
        case "philly":
        case "phl":
            console.log(chalk.blue("Philadelphia"));
            console.log(chalk.red("80F"));
            console.log(chalk.hex("#FF8800")("Sunny"));
            break;
        case "nyc":
        case "new york":
        case "big apple":
            console.log(chalk.blue("New York City"));
            console.log(chalk.yellow("76F"));
            console.log(chalk.gray("Mostly Cloudy"));
            break;
        case "san fran":
        case "san francisco":
        case "sf":
            console.log(chalk.blue("San Francisco"));
            console.log(chalk.yellow("64F"));
            console.log(chalk.hex("#FF8800")("Sunny"));
            break;
    }
}