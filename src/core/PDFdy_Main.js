import Handlebars from "handlebars";

// Esta clase esta inconclusa, es la principal la cual manejara toda la logica
class PDFdy_Main {
	constructor(template, style, theme, data){
		this.template = Handlebars.compile(template)(data);
		this.style = style;
		this.theme = theme;
		console.log(data);
	}

}

export default PDFdy_Main;
