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

import PDFdy from './core/PDFdy_Builder.js';
import PDFdy_Main from './core/PDFdy_Main.js';
import Adapter from './core/Adapter.js';
import loadfile from './core/utils/loader.js';

export { PDFdy, PDFdy_Main, Adapter, loadfile };
