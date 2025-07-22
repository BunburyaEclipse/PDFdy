/*!
 * PDFdy.js - v0.0.1
 * Copyright (c) 2025 Sir Bastidas
 * 
 * Contribuidores principales:
 * 		- Completar esto más tarde
 * 
 * Licencia: LGPLv3
 * https://www.gnu.org/licenses/lgpl-3.0.txt
 *  
 /*




/*	Esta libreria tiene tres clases principales, cada una con diferente funcionalidad y objetivo
	Soy bastante consiente, que puede sentirse demasiado modular y separado, pero el objetivo es hacerlo lo más
	escalable y sostenible posible.
*/

/* 
	Consta de 3 clases principales

	Clase PDFdy_Main: Es la clase principal que contiene la logica del sistema.

	Clase PDFdy:clase accesible del sistema,es  una interfaz que tiene implementado el patron builder,
		Funciona  como  clase facilitadora la cual usa  herramientas
		para ingresar y organizar informacion y esta pasa por la clase  PDFdy_Main.

	Clase Adapter: Clase no instanciable,funciona como una colección de diferentes adaptadores,
	 tiene como finalidad devolver  datos de una forma organizada en el formato que se presenta en la clase (array con objetos dentro).

*/



// Esta clase esta inconclusa, es la principal la cual manejara toda la logica
class PDFdy_Main {
	constructor(adapter, template, theme, data){
		this.adapter = adapter;
		this.template = template;
		this.theme = theme;
		this.data = data;
	}
}




// Esta clase, es solo un adaptador, no tiene como objetivo ser instanciada, solo adaptar la información en un formato
//  formato de arrays con objetos dentro.
class Adapter {
	constructor(){
		throw new Error("This Class not are avaliable to be instanced"); // Esto solo impide instanciar esta clase
	}

	// Este metodo toma argumentos del
	// [arg1]: String
	// [arg2]: Datos (abstractos)
	static transform(adapterType, adapterData){

		// Este condicional evalua el adaptador a usar, en base al segundo argumento
		switch (adapterType) {
			case 'api':
				// this.adapter_api
				break;
			case 'excel':
				// this.adapter_excel
				break;
			case 'array':
				// this.adapter_array
				break;
			default:
				throw new Error("This adapter called '" + adapterType + "' not exist");
				break;
		}}
}



// La clase PDFdy, no es el sistema principal , es solo una interfaz que abstrae y facilita el uso de la clase PDFdy_Main.
class PDFdy {
	constructor(){
		this.adapter = 'api'; // adaptador que se usara para pasar los datos.
		this.template = 'path/'; //  path del archivo, se usara como plantilla.
		this.style = "path/";	//  path del archivo de estilos, contiene el css del template. ( obligatorio )
		this.theme = "path/";	//  path del archivo de estilos, contiene los temas ( intercambiable ).
		this.data = [
			{
				"id": 1,
				"title": "not data data",
				"description": "not have a description, because not exist data",
				"price": 4.04,
				"categories": ["Home", "Kitchen"]
			}] // Array con objetos, contienen los datos e información que se enviaran a los archivos
	}


	// A Continuación, los metodos estos actuan como interfaz para poder pasar la información (los builder)

	// [arg1]: String (opcion)
	setAdapter(adapter){
		this.adapter = adapter.toLowerCase(); // lo unico que  hace es convertir lo que se envio a minusculas con el metodo toLowerCase().
		return this;
	}


	// [arg1]: String (path)
	setTemplate(template){
		this.template = template;
		return this;
	};


	// [arg1]: String (path)
	setTheme(theme){
		this.theme = theme;
		return this;
	};


	// [arg1]: String (origen de datos)
	setData(data){
		this.data = Adapter.transform(this.adapter, data); //  atributo, usa el metodo estatico en la clase Adapter llamado transforma y  pasa el nombre del adapter para se elegir el adaptador;pasa el origen de los datos que se transformaran.
		return this;
	};


	// Este metodo crea la  instancia de PDFdy_Main de la clase principal, pasandole los datos que se establesen aqui
	build(){
		return 0;
	}

}



const Catalogo = new PDFdy().setAdapter('excEL').setTheme()

console.log(Catalogo)