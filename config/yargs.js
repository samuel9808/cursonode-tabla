const { describe } = require('yargs');

const argv = require('yargs')
                .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        default: "5",
                        describe: 'Es la base a multiplicar.'
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        default: false,
                        describe: 'Muestra la salida en consola.'
                    },
                    'h': {
                        alias: 'hasta',
                        type: 'number',
                        default: "10",
                        describe: 'Límite de multipicaciones.'
                    }
                })
                .check( (argv, options ) =>{
                    if( isNaN( argv.b )){
                        throw 'Base tiene que ser un número.'
                    }
                    if( isNaN( argv.h )){
                        throw 'Limite de multiplicación tiene que ser un número.'
                    }
                    return true;
                })
                .argv;

module.exports = argv;