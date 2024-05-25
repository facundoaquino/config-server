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
        // Crear el contenedor del iframe
        var iframeContainer = document.createElement('div');
        iframeContainer.style.position = 'fixed';
        iframeContainer.style.bottom = '60px'; // Ajustar para que el botón no se superponga
        iframeContainer.style.right = '20px';
        iframeContainer.style.width = '300px';
        iframeContainer.style.height = '200px';
        iframeContainer.style.backgroundColor = '#FFF';
        iframeContainer.style.border = '1px solid #CCC';
        iframeContainer.style.borderRadius = '5px';
        iframeContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        iframeContainer.style.zIndex = '1000';

        // Crear el iframe
        var iframe = document.createElement('iframe');
        iframe.src = 'https://www.example.com'; // Cambia esto a la URL deseada
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.style.borderRadius = '5px';

        // Añadir el iframe al contenedor
        iframeContainer.appendChild(iframe);

        // Añadir el contenedor al cuerpo del documento
        document.body.appendChild(iframeContainer);

        // Evitar crear múltiples iframes si ya existe uno
        button.onclick = null;
    };

    // Añadir el botón al cuerpo del documento
    document.body.appendChild(button);
})();
