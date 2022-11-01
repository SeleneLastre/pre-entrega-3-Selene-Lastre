

const user = "cliente";
const pass_cliente = "cliente2022";


function  solicitarDatos(){

    let usuario = prompt("Por favor, ingrese su nombre de usuario:");
    let pass = prompt ("Por favor, ingrese su clave:");


    if (validarDatos (usuario,pass)){

        


    }else{


        alert("El usuario/contraseña ingresados son incorrecots,por favor intente otra vez");



    }




}



function validarDatos(usuario,pass){


    if (usuario ===  user && pass === pass_cliente ){


        return true ;

    }else {


        return false ;

    }





}



document.addEventListener('DOMContentLoaded', function() {
    solicitarDatos();

});



/**pre-entrega 2 */

class Productos {

        constructor (modelo,marca,precio){
    
            this.modelo = modelo ;
            this.marca = marca ;
            this.precio = precio;
            this.id = -1;
        }
    
  
        mostrar_descripcion(){
    
            return (this.id + " - " +this.modelo + " - " + this.marca + " - $" + this.precio) ;
    
    
    
        }
    
      
        set_id(nuevo_id){
    
    
            this.id = nuevo_id ;
        }
    
    
    }






// pre-entrega3
let carrito       = [];
let productos     = [];

let gestor;
const DateTime = luxon.DateTime
const key_actualizacion = "ultima_actualizacion";
const key_carrito = "carrito";




document.addEventListener('DOMContentLoaded', () => {

    
    carrito = JSON.parse( localStorage.getItem(key_carrito) ) || [];

    let ingreso = localStorage.getItem(key_actualizacion);

    ingreso ? console.log("Ultimo ingreso" + ingreso) : console.log("no esta registrado el ultimo ingreso");

    gestor = new GestionarProductos();
    gestor.iniciar();
})


function addCarrito( id ) {
    
    const prod = document.querySelector('#row_'+id);
    let producto = new Producto (   id,
                                    prod.querySelector('h3').textContent,
                                    prod.querySelector('.precio').textContent.substring(1,6),
                                    prod.querySelector('img').src
                                );

   
    gestor.addCart( producto );
}


function eliminar( id ) {   
    gestor.eliminarArticulo( id );
}


document.querySelector('#buscar').addEventListener('keyup', () => {

    let q = document.querySelector('#buscar').value;

    
    if( q.length >= 2 ) { 

        
        gestor.mostrarHeader(`Resultados para: ${q}`);
        gestor.buscar( q );        

    } else if ( q.length === 0 ) {
        
          
        
        gestor.mostrarHeader('Todos los productos en stock');
        gestor.cargarProductos( productos );
    } 

})




