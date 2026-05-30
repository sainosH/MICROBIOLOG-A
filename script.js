document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MENÚ DESPLEGABLE (RESPONSIVE)
    const menuBtn = document.getElementById("menu-btn");
    const navbar = document.getElementById("navbar");

    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", () => {
            navbar.classList.toggle("active");
            // Cambia el icono de barras a una 'X' si el menú está activo
            const icon = menuBtn.querySelector("i");
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-times");
        });
    }

    // 2. ACORDEONES (SECCIÓN TRATAMIENTO)
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    
    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            
            // Cerrar otros acordeones abiertos (opcional, estilo exclusivo)
            document.querySelectorAll(".accordion-item").forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("open");
                }
            });

            // Alternar el estado del acordeón actual
            item.classList.toggle("open");
        });
    });

    // 3. GENERADOR INTERACTIVO DE DATOS ("¿SABÍAS QUÉ?")
    const factBox = document.getElementById("fact-box");
    const nextFactBtn = document.getElementById("next-fact-btn");

    const facts = [
        "La periodontitis puede avanzar sin dolor, lo que retrasa su detección temprana.",
        "Las encías sanas no sangran. El sangrado es la primera señal de alerta de inflamación o disbiosis.",
        "El tabaquismo es el principal factor de riesgo modificable, alterando gravemente la microvasculatura gingival.",
        "La diabetes aumenta la gravedad de la enfermedad, existiendo una estrecha relación bidireccional.",
        "El estrés favorece la progresión periodontal mediante la liberación de cortisol y la inmunosupresión.",
        "Las bacterias y sus toxinas pueden ingresar libremente al torrente sanguíneo a través de los capilares ulcerados.",
        "El biofilm es mucho más resistente a los agentes antimicrobianos y defensas que las bacterias libres.",
        "La genética influye notablemente en la susceptibilidad del huésped ante la agresión microbiana.",
        "El embarazo puede aumentar la inflamación gingival debido a los drásticos cambios hormonales.",
        "La pérdida dental NO es una consecuencia normal del envejecimiento, sino de patologías acumuladas.",
        "El tratamiento temprano mejora drásticamente el pronóstico global y la conservación de las piezas dentales.",
        "La prevención mediante higiene y visitas periódicas es sustancialmente más económica que el tratamiento restaurativo."
    ];

    if (nextFactBtn && factBox) {
        nextFactBtn.addEventListener("click", () => {
            // Obtener un dato aleatorio diferente al actual
            let currentFact = factBox.innerText;
            let newFact = currentFact;
            
            while (newFact === currentFact) {
                const randomIndex = Math.floor(Math.random() * facts.length);
                newFact = facts[randomIndex];
            }

            // Efecto visual rápido de transición
            factBox.style.opacity = 0;
            setTimeout(() => {
                factBox.innerText = newFact;
                factBox.style.opacity = 1;
            }, 200);
        });
    }
});