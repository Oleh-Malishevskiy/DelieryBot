// Перевірка на доступність Telegram WebApp API
if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;

    document.getElementById("sendOrder").addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const comment = document.getElementById("comment").value;

        if (name && phone && address) {
            const orderData = {
                name,
                phone,
                address,
                comment
            };
            console.log("Sending data:", orderData);  // Лог для перевірки
            tg.sendData(JSON.stringify(orderData)); // Надсилаємо дані в бот
        } else {
            alert("Будь ласка, заповніть усі обов'язкові поля!");
        }
    });

    tg.expand(); // Розширюємо вікно на весь екран
} else {
    console.error("Telegram WebApp API is not available");
}
