let menu = document.querySelector('.menu');
let navbar = document.querySelector('#nav');

menu.onclick = () => {
    menu.classList.toggle('clicked');
    navbar.classList.toggle('show')
}

document.querySelector('section button').onclick = () =>
{
document.querySelector('section').classList.toggle('moon')
}

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Відображення одного слайда
    spaceBetween: 1000, // Відступ між слайдами
    loop: true, // Зациклене прокручування
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Дозволяє натискати на індикатори
    },
});


document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const details = document.querySelectorAll(".day-details");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Видаляємо активний клас у всіх вкладок
            tabs.forEach((t) => t.classList.remove("active"));

            // Ховаємо всі деталі
            details.forEach((detail) => (detail.style.display = "none"));

            // Додаємо активний клас для натиснутої вкладки
            tab.classList.add("active");

            // Відображаємо відповідний блок деталей
            const dayId = tab.getAttribute("data-day");
            const activeDetail = document.getElementById(dayId);
            activeDetail.style.display = "block";
        });
    });

    // Відображаємо перший день за замовчуванням
    tabs[0].click();
});

