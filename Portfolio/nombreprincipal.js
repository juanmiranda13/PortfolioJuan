// Elemento de la maquina de escribir
var typeWriterElement = document.getElementById('typewriter');

// TextArray
var textArray = ["Hola! Soy Juan Ignacio","Web and Email Developer","Bienvenidos!!"]


// Funcion para generar efecto de retroceso 
function delWriter(text, i, cb) {
	if (i >= 0 ) {
		typeWriterElement.innerHTML = text.substring(0, i--);
		// Generar numero aleatorio para el golpe de retroceso
 		var rndBack = 10 + Math.random() * 100;
		setTimeout(function() {
			delWriter(text, i, cb);
		},rndBack); 
	} else if (typeof cb == 'function') {
		setTimeout(cb,1000);
	}
};

// Funcion para generar efecto de pulsacion de teclas
function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++);
		// Generar un numero aleatorio para escritura en el teclado
		var rndTyping = 250 - Math.random() * 100;
		setTimeout( function () { 
			typeWriter(text, i++, cb)
		},rndTyping);
	} else if (i === text.length+1) {
		setTimeout( function () {
			delWriter(text, i, cb)
		},1000);
	}
};

// Funcion principal del escritor
function StartWriter(i) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},1000);
	} else if(i < textArray[i].length+1) {
		typeWriter(textArray[i], 0, function () {
			StartWriter(i+1);
		});
	}  
};

// Esperar y prender la maquina de escribir
setTimeout( function () {
	StartWriter(0);
},1000);
	