let currentLangBtn = null; // Храним кнопку, выбранную кликом

// Запускаем при загрузке страницы
window.onload = function() {
    // Выбираем кнопку "ru" (она вторая, поэтому индекс [1])
    const defaultBtn = document.querySelectorAll('.lang-btn')[1]; 
    currentLangBtn = defaultBtn;
    
    // Небольшая задержка (100мс), чтобы браузер успел отрисовать размеры кнопок
    setTimeout(() => {
        moveSlider(currentLangBtn);
    }, 100);
};

// Функция для КЛИКА (запоминает выбор)
function selectLang(clickedButton) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    clickedButton.classList.add('active');
    currentLangBtn = clickedButton; // Запоминаем новый выбор
    moveSlider(clickedButton);
}

// Функция для НАВЕДЕНИЯ (двигает плашку)
function hoverLang(hoveredButton) {
    moveSlider(hoveredButton);
}

// Функция для УХОДА МЫШКИ (возвращает плашку на выбранный язык)
function returnToActive() {
    if (currentLangBtn) {
        moveSlider(currentLangBtn);
    }
}

// Главная функция движения (математика)
function moveSlider(targetButton) {
    const slider = document.getElementById('lang-slider');
    if (!slider) return; // Защита, если элемент не найден

    const buttonLeft = targetButton.offsetLeft; 
    const buttonWidth = targetButton.offsetWidth; 

    slider.style.width = buttonWidth + 'px'; 
    slider.style.transform = `translateX(${buttonLeft - 4}px)`; // Вычитаем 4px (padding контейнера)
}