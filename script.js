// 1. Menú de navegación móvil responsivo
const menuBtn = document.getElementById('menu-btn');
const idNavbar = document.getElementById('navbar');

menuBtn.addEventListener('click', () => {
    idNavbar.classList.toggle('active');
});

// 2. Control de los Acordeones (Diagnóstico/Tratamiento)
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        
        button.classList.toggle('active');
        
        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            accordionContent.style.padding = "20px";
            button.querySelector('.fa-chevron-down').style.transform = "rotate(180deg)";
        } else {
            accordionContent.style.maxHeight = 0;
            accordionContent.style.padding = "0 20px";
            button.querySelector('.fa-chevron-down').style.transform = "rotate(0deg)";
        }
    });
});

// 3. Generador de Datos Curiosos ("¿Sabías qué...?")
const datosCuriosos = [
    "P. gingivalis puede alterar agresivamente la respuesta inmune del huésped.",
    "Esta bacteria es capaz de invadir y sobrevivir perfectamente dentro de las células humanas.",
    "No todas las personas que tienen placa bacteriana llegan a desarrollar periodontitis.",
    "La enfermedad periodontal es multifactorial: intervienen genes, hábitos y microbios.",
    "El biofilm subgingival es hasta 1000 veces más resistente a antibióticos que las bacterias libres.",
    "La halitosis (mal aliento) persistente puede ser un signo muy temprano de daño óseo.",
    "¡Las encías sanas jamás sangran! El sangrado indica inflamación activa.",
    "El estrés crónico reduce tus defensas e influye directamente en la progresión de la enfermedad.",
    "La periodontitis suele avanzar de forma silenciosa y completamente sin dolor.",
    "La genética individual influye drásticamente en la susceptibilidad de perder soporte óseo.",
    "El embarazo provoca cambios hormonales que aumentan el riesgo de inflamación gingival.",
    "Un correcto control de la diabetes mejora de forma bidireccional la salud periodontal.",
    "El tabaquismo destruye microvasos y reduce drásticamente la respuesta a cualquier tratamiento.",
    "Las bacterias periodontales pueden migrar fácilmente al torrente sanguíneo mediante el cepillado o masticación.",
    "La pérdida de dientes NO es una consecuencia normal del envejecimiento celular.",
    "Un cepillado demasiado agresivo o incorrecto también es capaz de dañar físicamente tus encías.",
    "Hoy en día existen terapias regenerativas óseas modernas asistidas por microcirugía.",
    "La prevención oportuna reduce drásticamente costos económicos y complicaciones sistémicas.",
    "Las visitas preventivas de mantenimiento con el dentista deben programarse mínimo cada 6 meses.",
    "Mantener una óptima salud bucal impacta positivamente en todo tu bienestar general."
];

const factBox = document.getElementById('fact-box');
const nextFactBtn = document.getElementById('next-fact-btn');

nextFactBtn.addEventListener('click', () => {
    // Escoger un dato aleatorio de la lista
    const randomIndex = Math.floor(Math.random() * datosCuriosos.length);
    
    // Animación simple de desvanecimiento
    factBox.style.opacity = 0;
    setTimeout(() => {
        factBox.textContent = datosCuriosos[randomIndex];
        factBox.style.opacity = 1;
    }, 200);
});