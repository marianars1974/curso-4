const fs = require('fs');
//const colors = require('colors');


let listado = [];
const guardarDB = ()=>
{
    let data = JSON.stringify(listado);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error("no se pudo grabar");
        console.log('The file has been saved!');
      });
}
const cargarDB = () =>
{
    try {
        listado = require('../db/data.json');    
    } catch (error) {
        listado = [];
    }
    

  //  console.log(listado);


}
const getListado = () =>
{

    cargarDB();
    return listado;

}

const actualizar = (descripcion, status=true) =>
{
    cargarDB();
    console.log(listado);
    let index = listado.findIndex(tarea=>
        {
            return tarea.descripcion === descripcion
        })
    console.log("indiece",index);
    if(index>=0)    
    {
        listado[index].status = status;
        guardarDB();
        return true;

    }
    else
    {
        return false;
    }
}    


const borrar = (descripcion) =>
{
    cargarDB();
    console.log(listado);
    let index = listado.findIndex(tarea=>
        {
            return tarea.descripcion === descripcion
        })
  
      
    console.log("indiece",index);
    if(index>=0)    
    {
        console.log(listado[index]);
        listado.splice(index,1);
        guardarDB();
        return true;

    }
    else
    {
        return false;
    }
}    

const crear = (descripcion) =>
{
    cargarDB();
    let tarea = {
        descripcion: descripcion, //asigno desc tarea al bojeto
        status: false
    };
    listado.push(tarea); // se lo agrego al array.
    console.log(listado);
    guardarDB();
    return tarea;
}

module.exports ={
    crear,
    getListado,
    actualizar,
    borrar
}
