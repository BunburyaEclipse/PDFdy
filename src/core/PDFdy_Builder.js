import loadfile from './utils/loader';
import Adapter from './Adapter.js';
import PDFdy_Main from './PDFdy_Main.js';


// La clase PDFdy, no es el sistema principal , es solo una interfaz que abstrae y facilita el uso de la clase PDFdy_Main.
class PDFdy {
	constructor(){
		this.adapter = 'array'; // adaptador que se usara para pasar los datos.
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
	async setTemplate(template){
		this.template = await loadfile(template);
		return this;
	};

	// [arg1]: String (path)
	async setStyle(style){
		this.style = await loadfile(style);
		return this;
	};

	// [arg1]: String (path)
	async setTheme(theme){
		this.theme = await loadfile(theme);
		return this;
	};


	// [arg1]: String (origen de datos)
	setData(data){
		this.data = Adapter.transform(this.adapter, data); //  atributo, usa el metodo estatico en la clase Adapter llamado transforma y  pasa el nombre del adapter para se elegir el adaptador;pasa el origen de los datos que se transformaran.
		return this;
	};


	// Este metodo crea la  instancia de PDFdy_Main de la clase principal, pasandole los datos que se establesen aqui
	build(){
		return new PDFdy_Main();
	}

}


export default PDFdy;
