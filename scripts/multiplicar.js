const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';
        let consola = '';
    
        for (let i = 1 ; i<=hasta ; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${colors.blue('x')} ${i} = ${base * i}\n`;
        }

        if ( listar ) {
            console.log('========================='.green)
            console.log('      Tabla del:', colors.red(base))
            console.log('========================='.green)
            console.log(consola);
        }
        fs.writeFileSync(`./output/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`
    } catch (error) {
        throw (error);
    }
}

module.exports = {
    crearArchivo
}

