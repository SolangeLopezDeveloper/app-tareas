const fs = require('fs');


const moduloTareas = {
    tareasJSON: 'tareas.json',
    leerArchivo: function () {
    
           return JSON.parse(fs.readFileSync(this.tareasJSON, 'utf-8'));

    },
    
    escribirJSON : function(tareasArray){
        fs.writeFileSync((this.tareasJSON),JSON.stringify(tareasArray,null,3), 'utf-8')
        return 'Tareas Actualizadas!'
    },

    guardarTarea : function (tarea){
        let tareasArray = this.leerArchivo();
         let nuevaTarea = {
            titulo : titulo.trim(),
            estado : "pendiente"
        }

        tareasArray.push(nuevaTarea);
        this.escribirJSON(tareasArray)
        return "Tarea guardada con éxito!!!"
    },
detalleTareas : function(titulo){

    const tareas = this.leerArchivo();
        let tarea = tareas.find(tarea => {
            return tarea.titulo === titulo
})
return tarea ? tarea : "No hay tareas con el titulo :" + titulo;
},

    filtrarPorEstado : function (estado){
         if(!estado){
            return "Debes escribir un estado para la búsqueda!"};

            const tareas = this.leerArchivo();
        const estadoFiltrado = tareas.filter(tarea => {
                return tarea.estado.toLowerCase().includes(estado.toLowerCase())
            });
            return estadoFiltrado.length ? estadoFiltrado : "No existe el estado " + estado
        },

        editarTarea : function(titulo, estado){
            let tareas = this.leerArchivo();

            if(!titulo){
                return "Se requiere el titulo de la tarea que deseas editar!"
            }
let tareaEditada = {};
            let tareasEditadas = tareas.map(tarea => {
                if (tarea.titulo === titulo){

                      tareaEditada = {
                          titulo: tarea.titulo,
                          estado: estado ? estado : tarea.estado
}
 return tareaEditada
                
                } return tarea 
            })
            this.escribirJSON(tareasEditadas)
            return tareasEditadas
        },

        */eliminarTarea : function(titulo){
            if(!titulo){
                return "Se requiere el titulo de la tarea a eliminar!"
            }
            let tareas = this.leerArchivo();
            const tareasExistentes = tareas.filter(tarea=> tarea.titulo !== titulo);
            this.escribirJSON(tareasExistentes);
            return tareasExistentes;
        }/*
    }


    



module.exports = moduloTareas;

