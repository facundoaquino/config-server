(function() {
    // Crear el botón
    var button = document.createElement('button');
    button.innerText = 'Haga clic aquí';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#007BFF';
    button.style.color = '#FFF';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.zIndex = '1000';

    // Añadir el evento de clic al botón
    button.onclick = function() {
        alert('Botón flotante clickeado!');
        // Aquí puedes añadir el código que desees ejecutar cuando el botón es clickeado
    };

    // Añadir el botón al cuerpo del documento
    document.body.appendChild(button);
})();
