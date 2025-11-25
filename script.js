function abrirZoom(elemento) {
    const zoom = document.getElementById('zoom');
    const zoomContenido = document.getElementById('zoom-contenido');
    
    // Obtener la imagen del cuadro
    const imagenOriginal = elemento.querySelector('.imagen-cuadro');
    
    // Verificar si la imagen existe y tiene un src válido
    if (imagenOriginal && imagenOriginal.src) {
        // Crear una nueva imagen para el zoom
        const imagenZoom = new Image();
        imagenZoom.src = imagenOriginal.src;
        imagenZoom.alt = imagenOriginal.alt || 'Imagen ampliada';
        imagenZoom.style.width = '100%';
        imagenZoom.style.height = '100%';
        imagenZoom.style.objectFit = 'contain';
        
        // Limpiar y agregar la imagen al zoom
        zoomContenido.innerHTML = '';
        zoomContenido.appendChild(imagenZoom);
        
        // Aplicar el mismo color de fondo del cuadro original
        const clases = elemento.classList;
        zoomContenido.className = 'zoom-contenido';
        for (let clase of clases) {
            if (clase !== 'cajita') {
                zoomContenido.classList.add(clase);
            }
        }
        
        zoom.style.display = 'block';
    } else {
        console.error('No se pudo encontrar la imagen en el cuadro');
        // Mostrar un mensaje de error o contenido alternativo
        zoomContenido.innerHTML = '<h2>Contenido no disponible</h2><p>No se pudo cargar el contenido de este cuadro.</p>';
        zoom.style.display = 'block';
    }
}

function cerrarZoom() {
    document.getElementById('zoom').style.display = 'none';
}