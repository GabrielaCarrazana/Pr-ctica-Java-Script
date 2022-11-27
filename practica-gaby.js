import readline from "readline";
//UTILIDADES

function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
//datos
const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
},
{
    age: 23,
    examScores: [2,3,4],
    gender: 'female',
    name: 'silvia'
},
{
    age: 25,
    examScores: [5,6,7],
    gender: 'female',
    name: 'Amalia'
}]



// configuramos la utilidad de node para que los datos se pidan y se muestren por consola.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function validate_opcion(sel){
    let error
    const integer = parseInt(sel);
    if(Number.isNaN(integer)){
        debugger;
        return false
    }
    else if(sel >18 || sel<=0){
        return false
    }
    else{
        return true
    }
}
//MOSTRAR LISTADO
function MostrarListado(listado){

        console.table(listado)
        


}
//MOSTRAR LISTADO de nombres
function MostrarListadoNombres(listado){
    let orden =1;
    listado.forEach(element => {
        console.log(`${orden} ${element.name}`);
        orden++;
        
    });

}
//MOSTRAR CANTIDAD DE ALUMNOS EN CLASE
function MostrarCantidad(listado){
    return listado.length
    
    
}

//4 Eliminar el ultimo alumno de la clase
function EliminaUltimo(listado){
    listado.pop()
    return listado
}
//5 ELIMINAR ALEATORIAMENTE UN ELEMENTO
function Eliminar_aleatoriamente(listado){
    ///OBTENGO UN VALOR ALEATORIO ENTRE 0 Y LENGTH DE LISTADO-1
    const indice = calculateRandomNumber(0,listado.length-1)
listado.splice(indice,1);
return listado;
}

//6 Mostar Chicas
function MostrarChicas(listado){
const resultado = listado.filter(item => item.gender ==='female');
return (resultado);
}

//Mostrar numero de chicas y chicos de la clase
function MostrarEstadisticasSexo(listado){

    let chicas =0;
    let chicos =0;
    chicas = (listado.filter(item=>item.gender==='female')).length
    chicos = (listado.filter(item=>item.gender==='male')).length
    console.log(`En la clase hay ${chicas} chicas y ${chicos} chicos`)
}
//8 Mostrar True o false si todos los alumnos de la clase son chicas
function TodosChicas(listado){
    let all_chicas = true
    let index = 0
    listado.forEach(element => {
        if (element.gender==='female'){
            all_chicas = all_chicas && true
        }
        else{ all_chicas = false}

        
    })
    return(all_chicas)}

//9 Entre 20 y 25
function Between2025(listado){
    const resultado = listado.filter(item => item.age >= 20 && item.age<= 25)
    return resultado;
}
//10 Añadir alumno nuevo
function AddAlumno(listado){
    let alumno={ 
        age: 0,
        examScores: [],
        gender: '',
        name: ''}
alumno.gender = availableGenders[calculateRandomNumber(0,availableGenders.length-1)]
if (alumno.gender==='female'){
    alumno.name =availableFemaleNames[calculateRandomNumber(0,availableFemaleNames.length-1)];}
else{
    alumno.name = availableMaleNames[calculateRandomNumber(0,availableMaleNames.length-1)];
}
alumno.age = calculateRandomNumber(20,50);
listado.push(alumno)
return listado
}
//listado de edades
function Listado_Edades(listado){
    let e = []
    listado.forEach(item=>{
        e.push(item.age)
        
    })
return e
}
//11 Mas Joven
function masjoven(listado){
    let edades = Listado_Edades(listado)
    debugger
    const joven = Math.min(...edades)
    const alumno =listado.find(item=>item.age===joven)
    return alumno;    

}
//calcular media
function Media(listado){
    let sum = listado.reduce((previous, current) => current += previous);
    let avg = (sum / listado.length);
    return (avg.toFixed(2))

}

//12 Edad Media de todos
function EdadMedia(listado){
    let edades= Listado_Edades(listado);
    let avg = Math.floor(Media(edades))
    return (avg)

}
//13 Edad media chicas
function EdadMediaChicas(listado){
    const resultado = listado.filter(item => item.gender ==='female');
    const media_chicas = EdadMedia(resultado);
    return media_chicas;
}

//14 añadir notas
function AddNota(listado){
    listado.forEach(item=>{
        item.examScores.push(calculateRandomNumber(0,10))
    })
    return listado
}

//15 ordenar alfabeticamente
function sortByName(listado){
    listado.sort((a, b)=> {
        if (a.name > b.name) {
        return 1;
        }
        if (a.name < b.name) {
        return -1;
        }
        // a must be equal to b
        return 0;
    });
return listado
}
//16 mejor de la clase
function BestOfClass(listado){
    let nota_alta = 0
    let mejor_alumno = {}
    debugger
    listado.forEach(item=>{
        debugger
        if (item.examScores.length===0){

        }
        else{
            const notas = item.examScores
            let sum_alumno = notas.reduce((previous, current) => current += previous);
            debugger
            if (sum_alumno >= nota_alta){
            nota_alta =sum_alumno;
            mejor_alumno = {...item};
            }

        }
        
        
        
    })

return mejor_alumno
    

}
//18 a;adir puntos extras
function Bonus(listado){
    debugger
    listado.forEach(element => {
        debugger

        if (element.examScores.length===0){
            element.examScores.push(10)
        }
        else {
            for (let i =0 ; i <element.examScores.length;i++){
                debugger
                if (element.examScores[i]<10){
                    element.examScores[i]++


                }
            }

        }
    
    
    });
    return listado;
}







function Menu(){
    const promise = new Promise((resolve,rejected)=>{
        console.log("A continuación se describen una serie de  opciones :\n 1- Mostrar en formato de tabla todos los alumnos.\n 2- Mostrar por consola la cantidad de alumnos que hay en clase \n 3- Mostrar por consola todos los nombres de los alumnos.\n 4- Eliminar el último alumno de la clase.\n 5- Eliminar un alumno aleatoriamente de la clase.\n 6- Mostrar por consola todos los datos de los alumnos que son chicas.\n 7- Mostrar por consola el número de chicos y chicas que hay en la clase.\n 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.\n 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.\n 10- Añadir un alumno nuevo. \n 11- Mostrar por consola el nombre de la persona más joven de la clase.\n 12- Mostrar por consola la edad media de todos los alumnos de la clase.\n 13- Mostrar por consola la edad media de las chicas de la clase.\n 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase.\n 15- Ordenar el array de alumnos alfabéticamente según su nombre.\n 16- Mostrar por consola el alumno de la clase con las mejores notas.\n 17- Mostrar por consola la nota media más alta de la clase y el nombre del alumno al que pertenece.\n 18- Añadir un punto extra a cada nota existente de todos los alumnos.")
        rl.question("Indique con un numero entre [1-18] que desea realizar:",
        (seleccion)=>{
            rl.pause()
            if (validate_opcion(seleccion)){
                resolve(seleccion);
            }
            else{
                rejected();
            }
        });
    });
    return promise
}
async function validar_seleccion(lista){
    try {const opcion = parseInt(await Menu());
        console.log(`Has seleccionado la opcion ${opcion}`)
        Ejecutar_seleccion(opcion,lista)        
        validar_seleccion(lista)

    }catch(error){
        rl.close()
        console.log("La aplicación se ha cerrado")
        process.exit(0)
    }
}
function Ejecutar_seleccion(opcion,lista){
    switch(opcion){
        case(1):
            MostrarListado(lista)
            break;
        case(2):
            console.log(`La cantidad actual de alumnos es de: ${MostrarCantidad(lista)}`);
            break;
        case(3):
            MostrarListadoNombres(lista);
            break;
        case(4):{}
            lista = EliminaUltimo(lista);
            console.log("Ultimo alumno eliminado con éxito")
            break;
        case(5):
            lista= Eliminar_aleatoriamente(lista);
            console.log("Alumno aleatorio borrado")
            break;
        case(6):
            MostrarListadoNombres(MostrarChicas(lista)) ;
            break;
        case(7):
            MostrarEstadisticasSexo(lista)
            break;
        case(8):
            console.log("Todos los alumnos son chicas?: " + TodosChicas(lista));
            break;
        case(9):
            const jovenes =Between2025(lista);
            MostrarListadoNombres(jovenes);
            break;
        case(10):
            lista = AddAlumno(lista);
            //MostrarListado(lista)
            break;
        case(11):
            const alumno = masjoven(lista)
            console.log(`el alumno mas joven es: ${alumno.name}`)
            break;
    
        case(12):
            console.log(`la media de las edades es de: ${EdadMedia(lista)}`);
            break;
    
        case (13):
            const m_chicas = EdadMediaChicas(lista)
            console.log(`La edad media de las chicas es de ${m_chicas} años`)
            ;
            break;
        case(14):
            lista = AddNota(lista);
            MostrarListado(lista);
            break;
        case(15):
            MostrarListado(sortByName(lista));
            break;
        //opcionales
        case(16):
            const mejor = BestOfClass(lista);
            
            if (Object.entries(mejor).length==0){
                console.log("No hay mejor alumno, debido a que auun no hay notas introducidas")}
            else{console.log(`El mejor alumno de la clase es: nombre: ${mejor.name} edad: ${mejor.age} notas: ${mejor.examScores} género: ${mejor.gender}`)}
            
            break;
        case(17):
            const the_best = BestOfClass(lista);
            if (Object.entries(the_best).length==0){
                console.log("No hay mejor alumno, debido a que auun no hay notas introducidas")}
            else{const media = Media(the_best.examScores)
                console.log(`El mejor de la clase es ${the_best.name} con una media de: ${media} puntos`)}
            
            
            break;
        case(18):
            lista =Bonus(lista)
            MostrarListado(lista)
            break;
        default:
            break;
        }

}

validar_seleccion(students)


