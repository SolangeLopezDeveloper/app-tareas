const process = require('process');
const moduloTareas = require('./funcionesDeTareas');


const accion = process.argv[2];

switch (accion) {
    case "listar":
        const tareasArray = moduloTareas.leerArchivo();
        console.log("-------------Listado de tareas -------------------"); 
        tareasArray.forEach((tarea, index) => {
        console.log(`${tareasArray[index].titulo} : ${tareasArray[index].estado}`)
        });
        break;

        case "detalle" : 
        titulo = process.argv[3];
        console.log(moduloTareas.detalleTareas(titulo));
        break;


    case "crear" :
    {
            titulo = process.argv[3],
            estado = "pendiente"
    }
        console.log(moduloTareas.guardarTarea(titulo, estado));    
        break;   
        

    case "filtrar" :
        estado = process.argv[3];
console.log(moduloTareas.filtrarPorEstado(estado));
        break;

        case "editar":
            titulo = process.argv[3];
            estado = process.argv[4];

            console.log(moduloTareas.editarTarea(titulo,estado));
            break;

            */case "eliminar":
                titulo = process.argv[3];
                console.log(moduloTareas.eliminarTarea(titulo));
                break;/*

    case undefined:
        console.log();
        console.log("Atención - Tienes que pasar una acción.")
        console.log("Las acciones disponibles son: ");
        console.log("-listar");
        console.log("-editar");
        console.log("-crear");
        console.log("-eliminar");
        console.log("-filtrar");
        break;

    default:
        console.log("No entiendo qué quieres hacer.");
        console.log("Las acciones disponibles son: ");
        console.log("-listar");
        console.log("-editar");
        console.log("-crear");
        console.log("-eliminar");
        console.log("-filtrar");

}  
