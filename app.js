//const argv = require('yargs').argv; //requiere directo el paquete
const argv = require('./config/yargs').argv; 
const colors = require('colors');

const porHacer = require('./src/por-hacer'); 
//console.log(argv);

let comando = argv._[0];


switch (comando)
{
    case "crear":
        let listado = porHacer.crear(argv.descripcion);
        console.log(listado);
        
       // console.log('crear');
    break;
    case "listar":
        console.log('listar');
        let listadoTareas = porHacer.getListado();
        console.log(listadoTareas);
        for (const tarea of listadoTareas) {
            console.log("**********".green);
            console.log(tarea.descripcion);
            console.log('Estado',tarea.status);
            console.log("**********".green);
        }
        
    break;
    case "actualizar":
        console.log('actualizar');
        let actualizar = porHacer.actualizar(argv.descripcion, argv.status);
        console.log(actualizar);

    case "borrar":
        console.log('borrar');
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);        
    break;
    default:
        console.log('no existe');
    
}
//console.log(tarea);