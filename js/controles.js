
	window.onload = function() {
		anim = new animacion("playa");
		anim.animar();
		this.fondo_1;
		this.speed = 0;
	}

	animacion = function (id_fondo) {
		fondo_1 = document.getElementById(id_fondo);
	};

	animacion.prototype.parar = function() {
		fondo_1.style.animationPlayState = "paused";
		fondo_1.style.MozAnimationPlayState = "paused";
		fondo_1.style.WebkitAnimationPlayState = "paused";
	}

	animacion.prototype.cambiarVelocidad = function(velocidad) {
		speed = 0;
		speed = velocidad + "s";

		fondo_1.style.animationDuration = speed;
		fondo_1.style.MozAnimationDuration = speed;
		fondo_1.style.WebkitAnimationDuration = speed;

	}

	animacion.prototype.animar = function() {

		fondo_1.style.animationPlayState = "running";
		fondo_1.style.MozAnimationPlayState = "running";
		fondo_1.style.WebkitAnimationPlayState = "running";
	}