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

	Clase PDFdy:clase accesible del sistema,es  una interfaz con implementación del patron builder,
		Funciona solo como la clase encargada de facilitar el uso de la herramienta, y realmente simplemente sirve
		para ingresar de mejor más organizarla, y pasarla a la verdadera clase principal que es PDFdy_Main.

	Clase Adapter: Es una clase no instanciable, simplemente funciona como una colección de diferentes
		adaptadores, con el fin de devolver los datos de una forma organizada y en el formato que necesita la clase principal (array con objetos dentro).

*/



// Esta clase aun no esta terminada, pero es la principal que manejara toda la logica
class PDFdy_Main {
	constructor(adapter, template, theme, data){
		this.adapter = adapter;
		this.template = template;
		this.theme = theme;
		this.data = data;
	}
}




// Esta clase, es solo un adaptador, no tiene como objetivo ser instanciada, solo adaptar la información de un formato
// a un formato de arrays con objetos dentro.
class Adapter {
	constructor(){
		throw new Error("This Class not are avaliable to be instanced"); // Esto solo impide instanciar esta clase
	}

	// Este metodo lo que hace es que toma los argumentos del
	// [arg1]: String una opción
	// [arg2]: Datos (abstractos)
	static transform(adapterType, adapterData){

		// Este condicional evalua cual adaptador se debe usar, en base al segundo argubento de este metodo
		switch (adapterType) {
			case 'api':
				// this.adapter_api(adapterData)
				break;
			case 'excel':
				// this.adapter_excel(adapterData)
				break;
			case 'array':
				// this.adapter_array(adapterData)
				break;
			default:
				throw new Error("This adapter called '" + adapterType + "' not exist");
				break;
		}}
}



// La clase PDFdy, no es el sistema principal real, es solo una interfaz que abstrae y facilita el uso de la clase real.
class PDFdy {
	constructor(){
		this.adapter = 'api'; // String con el nombre del adaptador que se usara para pasar los datos.
		this.template = 'path/'; // String con el path del archivo que se usara como plantilla.
		this.style = "path/";	// String con el path del archivo de estilos que contiene el css del template. ( obligatorio )
		this.theme = "path/";	// String con el path del archivo de estilos que contiene los temas ( intercambiable ).
		this.data = [
			{
				"id": 1,
				"title": "not data data",
				"description": "not have a description, because not exist data",
				"price": 4.04,
				"categories": ["Home", "Kitchen"]
			}] // Array con objetos que contienen los datos e información que se enviaran a los archivos
	}


	// A Continuación siguen los metodos que hacen como interfaz para poder pasar la información (los builder)

	// [arg1]: String (opcion)
	setAdapter(adapter){
		this.adapter = adapter.toLowerCase(); // aqui lo unico que se hace es convertir lo que se envie a minusculas con el metodo toLowerCase().
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
		this.data = Adapter.transform(this.adapter, data); // Este atributo usa el metodo estatico e la clase Adapter llamado transform, y le pasa el nombre del adapter en base a cual se elegira el adaptador; y le pasa el origen de los datos que se transformaran.
		return this;
	};


	// Este metodo es el que crea la verdadera instancia de la clase principal, pasandole los datos que se establecieron aqui.
	build(){
		return 0;
	}

}



const Catalogo = new PDFdy().setAdapter('excEL').setTheme()

console.log(Catalogo)