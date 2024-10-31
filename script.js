const message = document.querySelector('.diwali-message');
setInterval(() => {
   message.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
}, 500);

const fireworkContainer = document.querySelector('.firework-container');

function createFirework() {
   const colors = ['#ff5733', '#ffc300', '#ff33f6', '#33ff8f', '#339bff', '#ff007f', '#33f6ff'];
   const fireworkCount = 12;

   for (let i = 0; i < fireworkCount; i++) {
      const firework = document.createElement('div');
      const size = Math.random() * 20 + 10; 
      firework.style.width = `${size}px`;
      firework.style.height = `${size}px`;
      firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
      firework.style.left = `${Math.random() * 100}vw`;
      firework.style.top = `${Math.random() * 100}vh`;

     
      firework.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
      firework.classList.add('firework');
      fireworkContainer.appendChild(firework);

      setTimeout(() => {
         firework.remove();
      }, 1500);
   }
}

setInterval(createFirework, 500);
