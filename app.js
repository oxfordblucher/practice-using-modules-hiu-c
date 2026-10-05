// The package.json is a JSON-formatted file that contains the blueprint for the 
// program being written. It describes the project, provides metadata, and tracks 
// dependencies as well as scripts for task automation. It ensures a consistent 
// result for all devs collaborating. This also allows git to only need to track 
// one file rather than every single dependency module within a repo. Node modules 
// should be excluded from the version control because each individual package has 
// their own version control and also because it's simply a waste of space. The 
// 'npm install' command parses the package.json and installs dependencies as 
// directed within the file. Dependencies may have sub-dependencies as outlined 
// in their respective package.json files. So NPM becomes exponentially more important 
// as we build layer upon layer.

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
        default:
            console.log(chalk.red("Please try again with a valid city name"));
    }
}