const emojiContainer = document.getElementById('emojiContainer');

function createEmoji() {
    const emojiList = ['😀', '😂', '🥳', '😍', '😎', '🤩'];
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.animationDuration = `${2 + Math.random() * 4}s`; 

    emojiContainer.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, 4000);
}


function startEmojiRain() {
    setInterval(createEmoji, 300);
}


setTimeout(() => {
    clearInterval(startEmojiRain);
}, 20000); 

startEmojiRain();




document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createFirework() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3 + 2;
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2, false);
        ctx.fillStyle = color;
        ctx.fill();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        createFirework();
        requestAnimationFrame(animate);
    }

    animate();

    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 20000); 
});
