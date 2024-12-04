document.getElementById('booking-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Зупиняємо стандартну відправку форми

    // Збираємо дані з форми
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries()); // Конвертуємо дані у об'єкт

    try {
        // Надсилаємо дані на сервер
        const response = await fetch('http://127.0.0.1:5000/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',  // Вказуємо, що відправляємо JSON
            },
            body: JSON.stringify(data), // Конвертуємо дані у JSON
        });

        if (response.ok) {
            const result = await response.json();
            alert(result.message); // Відображаємо повідомлення
        } else {
            const error = await response.json();
            alert(`Помилка: ${error.message || 'Щось пішло не так'}`);
        }
    } catch (err) {
        console.error('Помилка:', err);
        alert('Не вдалося підключитися до сервера.');
    }
});
