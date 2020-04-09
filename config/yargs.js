const descripcion = {
    demand: true,alias: 'd', desc:"tarea"
    };
const status = {default: true,alias: 's', desc:"estado de la tarea"};
   
const argv = require('yargs')
.command('listar','lista')
//.command('crear','crea',opts)
.command('crear','crea',{
    descripcion: descripcion
}
)
.command('actualizar','actualiza',{
    descripcion: descripcion,
    status: status
}
)
.command('borrar','borra',{
    descripcion: descripcion
}
)
.help()
.argv;


module.exports=
{
    argv
};