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
				return adapterData;
			default:
				throw new Error("This adapter called '" + adapterType + "' not exist");
				break;
		}}
}

export default Adapter;
