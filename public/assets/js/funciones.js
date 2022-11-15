const calcularsubtotal = ()=>{
    const cantidad = document.querySelector('#cantidad')
    const precio =document.querySelector('#precio')
    let subtotal = document.querySelector('#subtotal')
    subtotal.value = cantidad.value * precio.value
}

const precio = document.querySelector('#precio')
//precio.addEventListener('keypress',calcularsubtotal)    
cantidad.addEventListener('keypress',calcularsubtotal)
cantidad.addEventListener('keyup',calcularsubtotal)  
cantidad.addEventListener('keydown',calcularsubtotal)    


const registrarPedido =() =>{
    const cantidad = document.querySelector('#cantidad')
    const precio =document.querySelector('#precio')
    if(cantidad.value.length == 0 || precio.value.length == 0){
        document.getElementById('respuesta').innerHTML = 'La cantidad o el precio no pueden estan vacios'
}else{
    document.getElementById('respuesta').innerHTML = 'Registro exitoso'
}
}

const btnRegistrar = document.querySelector('#btnRegistrar')
btnRegistrar.addEventListener('click', registrarPedido)
