// function aumentarLike(){
// let newLike = document.querySelector("#perfil-1")
// let contador = newLike.innerHTML
// console.log(contador)
// contador ++
// console.log(contador)
// newLike.innerHTML = contador
// }
//Pasa numero 1 crear un arreglo en ese arreglo ir guardando
//un contador por cada me gusta.
//let arrayLikes = [0,0,0]
function aumentarLikes(element){
    if(element===document.querySelector("#btn-perfil-1")){
        let newLike = document.getElementById("perfil-1")
        let contador = newLike.innerHTML
        contador ++
        //arrayLikes[0]= contador
        newLike.innerHTML = contador

    } else if(element===document.querySelector("#btn-perfil-2")){
        let newLike = document.getElementById("perfil-2")
        let contador = newLike.innerHTML
        contador ++
       //arrayLikes[1]= contador
        newLike.innerHTML = contador

    }else{
        let newLike = document.getElementById("perfil-3")
        let contador = newLike.innerHTML
        contador ++
        //arrayLikes[2]= contador
        newLike.innerHTML = contador
    }
}