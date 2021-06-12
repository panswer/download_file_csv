// console.log(process);
// const { argv } = process;
// console.log(__filename);
// console.log(argv);

// let params = argv.filter(item => (
//     __filename !== item
// ));

// params.shift(0);

// console.log(params);

const path = require('path');
const fs = require('fs');

const Connect = require('./tools/connect');
const Argv = require('./tools/argv');

let arguments = Argv.getParams();

// console.log({
//     item1: process.execPath,
//     item2: process.argv,
//     // result: process.env
// });

// console.log(arguments);

const main = async() => {
    let host = arguments.host || 'https://[addresse]';

    let myWeb = new Connect(host);

    let data = await myWeb.getInfoWithParams('/air-rates-csv', {
        lang: 'en'
    });

    let pathOutput = path.resolve(__dirname, './files');

    fs.writeFileSync(`${pathOutput}/out.json`, JSON.stringify(data));
}

main();