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
