
// Al clickear el boton comprobar que el largo del valor no sea 0.
document.querySelector("#apretar").onclick = function (){
  if(document.querySelector("#tareaNueva input").value.length == 0){
    alert("Por favor escribi algo");
  }
  else { /* Al div de tareas, crearle un dia llamado
         tarea que contendra una actividad especifica,
 que sera recolectada por el input del div tareaNueva
 Luego agregaremos un boton que sera el de borrar. */

    document.querySelector("#tareas").innerHTML +=`
    <div class="tarea">
    <span id="nombreTarea">
    ${document.querySelector("#tareaNueva input").value}
    </span>
    <button class="borrar">
      <i class="fas fa-trash"></i>
    </button>
    </div>
  `;

  /*  FUTURA FUNCION CONTADORA DE TAREAS HECHAS */

  /*    tareaHecha = document.querySelector("#tareaNueva input").value;
      tareasHechas = [];
      tareasHechas.push(tareaHecha);
      console.log(tareasHechas);

      */

document.querySelector("#tareaNueva input").value = "";

var tareasActuales = document.querySelectorAll(".borrar");
for(var i=0; i<tareasActuales.length; i++){
    tareasActuales[i].onclick = function(){
        this.parentNode.remove();
    }
}

var tareas = document.querySelectorAll(".tarea");
for(var i=0; i<tareas.length; i++){
    tareas[i].onclick = function(){
        this.classList.toggle('completed');

    }
}

    }
}
