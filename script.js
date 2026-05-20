document.addEventListener('DOMContentLoaded', () => {
    const bar = document.getElementById('progress-fill');
    const label = document.getElementById('percentage-label');
    const title = document.getElementById('main-title');
    const subText = document.getElementById('sub-text');

    let progress = 0;

    const updateProgress = () => {
        // Incremento variable para que no sea lineal y se vea más natural
        const increment = Math.floor(Math.random() * 5) + 1;
        progress += increment;

        if (progress > 100) progress = 100;

        // Aplicamos el progreso visualmente
        bar.style.width = `${progress}%`;
        label.innerText = `Progreso del sistema: ${progress}%`;

        // Cambiamos los mensajes según el porcentaje
        if (progress > 25 && progress < 50) {
            title.innerHTML = 'Cargando <span class="highlight">Módulos</span>';
            subText.innerText = "Conectando con la base de datos y servicios externos...";
        } else if (progress > 50 && progress < 80) {
            title.innerHTML = 'Optimizando <span class="highlight">Interfaz</span>';
            subText.innerText = "Renderizando componentes visuales y estilos...";
        } else if (progress >= 90) {
            title.innerHTML = '¡Casi <span class="highlight">Listo!</span>';
            subText.innerText = "Finalizando los últimos detalles del despliegue.";
        }

        if (progress < 100) {
            // Velocidad aleatoria entre actualizaciones
            setTimeout(updateProgress, Math.random() * 400 + 100);
        } else {
            label.innerText = "Carga completada al 100%";
        }
    };

    // Iniciamos la simulación después de un pequeño retraso
    setTimeout(updateProgress, 1000);
});