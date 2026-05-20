/**
 * Lógica de Transición de Interfaz
 * Core System Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const dashboard = document.getElementById('dashboard-view');
    const bar = document.getElementById('dynamic-bar');
    const counter = document.getElementById('counter');
    const msg = document.getElementById('load-msg');

    let progress = 0;

    const runEngine = () => {
        // Velocidad de carga variable
        progress += Math.floor(Math.random() * 6) + 1;

        if (progress > 100) progress = 100;

        bar.style.width = `${progress}%`;
        counter.innerText = `${progress}%`;

        // Actualizar mensajes según nivel
        if (progress > 40) msg.innerText = "Sincronizando datos...";
        if (progress > 80) msg.innerText = "Verificando seguridad...";

        if (progress < 100) {
            setTimeout(runEngine, 100);
        } else {
            launchApp();
        }
    };

    const launchApp = () => {
        setTimeout(() => {
            // Desvanecer carga
            splash.style.opacity = '0';
            
            // Mostrar Dashboard
            setTimeout(() => {
                splash.style.display = 'none';
                dashboard.classList.add('show-view');
                document.body.style.overflow = 'auto';
            }, 600);
        }, 500);
    };

    runEngine();
});