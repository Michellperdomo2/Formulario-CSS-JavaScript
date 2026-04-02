const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    let valido = true;

    // Campos
    const nombres = document.getElementById('nombres');
    const usuario = document.getElementById('usuario');
    const correo = document.getElementById('correo');
    const apellido1 = document.getElementById('apellido1');
    const apellido2 = document.getElementById('apellido2');
    const documento = document.getElementById('documento');
    const direccion = document.getElementById('direccion');
    const celular = document.getElementById('celular');
    const password = document.getElementById('password');
    const fecha = document.getElementById('fecha');

    
    if (nombres.value.trim() === "") {
        mostrarError(nombres, "Campo obligatorio");
        valido = false;
    } else {
        mostrarCorrecto(nombres);
    }

    
    if (apellido1.value.trim() === "") {
        mostrarError(apellido1, "Campo obligatorio");
        valido = false;
    } else {
        mostrarCorrecto(apellido1);
    }

    if (apellido2.value.trim() === "") {
        mostrarError(apellido2, "Campo obligatorio");
        valido = false;
    } else {
        mostrarCorrecto(apellido2);
    }

    
    if (!/^[0-9]{5,15}$/.test(documento.value)) {
        mostrarError(documento, "Solo números (5-15 dígitos)");
        valido = false
    } else {
        mostrarCorrecto(documento);
    }

    
    if (usuario.value.length < 3) {
        mostrarError(usuario, "Mínimo 3 caracteres");
        valido = false;
    } else {
        mostrarCorrecto(usuario);
    }

    
    if (!correo.value.includes("@")) {
        mostrarError(correo, "Correo inválido");
        valido = false;
    } else {
        mostrarCorrecto(correo);
    }

    
    if (direccion.value.trim() === "") {
        mostrarError(direccion, "Dirección obligatoria");
        valido = false;
    } else {
        mostrarCorrecto(direccion);
    }

    
    if (!/^[0-9]{10}$/.test(celular.value)) {
        mostrarError(celular, "Debe tener 10 números");
        valido = false;
    } else {
        mostrarCorrecto(celular);
    }

    
    if (
        password.value.length >= 8 &&
        password.value.match(/[A-Z]/) &&
        password.value.match(/[a-z]/) &&
        password.value.match(/[0-9]/) &&
        password.value.match(/[^A-Za-z0-9]/)
    ) {
        mostrarCorrecto(password);
    } else {
        mostrarError(password, "Debe tener mayúscula, minúscula, número y símbolo");
        valido = false;
    }

    
    if (fecha.value === "") {
        mostrarError(fecha, "Selecciona una fecha");
        valido = false;
    } else {
        mostrarCorrecto(fecha);
    }

    
    if (valido) {
        alert("Formulario enviado correctamente");
    }
});

function mostrarError(input, mensaje) {
    input.classList.remove("correcto");
    input.classList.add("incorrecto");

    const small = input.parentElement.querySelector(".mensaje");
    if (small) {
        small.textContent = "Inapropiado, noooooooo";
        small.style.color = "red";
    }
}

function mostrarCorrecto(input) {
    input.classList.remove("incorrecto");
    input.classList.add("correcto");

    const small = input.parentElement.querySelector(".mensaje");
    if (small) {
        small.textContent = "Apropiado";
        small.style.color = "green";
    }
}

nombres.addEventListener("input", function() {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

    if (this.value.trim() === "") {
        mostrarError(this, "Campo obligatorio");
    } else if (!regex.test(this.value)) {
        mostrarError(this, "Solo letras");
    } else {
        mostrarCorrecto(this);
    }
});

usuario.addEventListener("input", function() {
    if (this.value.length < 3) {
        mostrarError(this, "Mínimo 3 caracteres");
    } else {
        mostrarCorrecto(this);
    }
});

correo.addEventListener("input", function() {
    if (!this.value.includes("@")) {
        mostrarError(this, "Correo inválido");
    } else {
        mostrarCorrecto(this);
    }
});

documento.addEventListener("input", function() {
    if (!/^[0-9]{5,15}$/.test(this.value)) {
        mostrarError(this, "Solo números");
    } else {
        mostrarCorrecto(this);
    }
});

celular.addEventListener("input", function() {
    this.value = this.value.replace(/[^0-9]/g, "");

    if (this.value.length !== 10) {
        mostrarError(this, "Debe tener 10 números");
    } else {
        mostrarCorrecto(this);
    }
});

password.addEventListener("input", function() {
    if (
        this.value.length >= 8 &&
        this.value.match(/[A-Z]/) &&
        this.value.match(/[a-z]/) &&
        this.value.match(/[0-9]/) &&
        this.value.match(/[^A-Za-z0-9]/)
    ) {
        mostrarCorrecto(this);
    } else {
        mostrarError(this, "Contraseña débil");
    }
});


direccion.addEventListener("input", function() {
    if (this.value.trim() === "") {
        mostrarError(this, "Dirección obligatoria");
    } else {
        mostrarCorrecto(this);
    }
});


fecha.addEventListener("change", function() {
    if (this.value === "") {
        mostrarError(this, "Selecciona una fecha");
    } else {
        mostrarCorrecto(this);
    }
});
apellido1.addEventListener("input", function() {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

    if (this.value.trim() === "") {
        mostrarError(this, "Campo obligatorio");
    } else if (!regex.test(this.value)) {
        mostrarError(this, "Solo letras");
    } else {
        mostrarCorrecto(this);
    }
});
apellido2.addEventListener("input", function() {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;

    if (this.value.trim() === "") {
        mostrarError(this, "Campo obligatorio");
    } else if (!regex.test(this.value)) {
        mostrarError(this, "Solo letras");
    } else {
        mostrarCorrecto(this);
    }
});
