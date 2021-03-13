const { crearArchivo } = require('./scripts/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

// const base = 7;
// const [ ,, arg3 = 'base=5' ] = process.argv;
// const [, base] = arg3.split('=');
// console.log(process.argv);

console.clear();


crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(colors.brightRed(nombreArchivo), colors.brightGreen.underline('creado.')))
    .catch( err => console.log(err));
