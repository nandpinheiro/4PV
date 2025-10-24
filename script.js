// Smooth scrolling para os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Configuração da data de início do namoro
// Altere estes valores para a data correta do início do seu namoro
const NAMORO_INICIO = {
    dia: 16,    // Dia do mês
    mes: 6,     // Mês (1-12, onde 1=janeiro, 7=julho)
    ano: 2025   // Ano
};

// Contador dinâmico real
function updateCounter() {
    // Data de início do namoro
    const startDate = new Date(NAMORO_INICIO.ano, NAMORO_INICIO.mes - 1, NAMORO_INICIO.dia);
    const now = new Date();
    const diff = now - startDate;

    // Se a data ainda não chegou, mostra contagem regressiva
    if (diff < 0) {
        const diffAbs = Math.abs(diff);
        const days = Math.floor(diffAbs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffAbs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffAbs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffAbs % (1000 * 60)) / 1000);

        // Atualiza o texto para mostrar que é contagem regressiva
        document.querySelector('#contador h2').textContent = '';
        document.getElementById('contador-mensagem').textContent = '💕';
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
        
        // Muda as labels para contagem regressiva
        document.querySelector('#contador .grid > div:nth-child(1) .poppins').textContent = days === 1 ? 'Dia' : 'Dias';
        document.querySelector('#contador .grid > div:nth-child(2) .poppins').textContent = hours === 1 ? 'Hora' : 'Horas';
        document.querySelector('#contador .grid > div:nth-child(3) .poppins').textContent = minutes === 1 ? 'Minuto' : 'Minutos';
        document.querySelector('#contador .grid > div:nth-child(4) .poppins').textContent = seconds === 1 ? 'Segundo' : 'Segundos';
        return;
    }

    // Quando chegou a data, muda o título
    document.querySelector('#contador h2').textContent = '16 de junho de 2025';
    document.getElementById('contador-mensagem').textContent = 'Desde que nos conhecemos pela primeira vez';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    
    // Restaura as labels normais
    document.querySelector('#contador .grid > div:nth-child(1) .poppins').textContent = 'Dias';
    document.querySelector('#contador .grid > div:nth-child(2) .poppins').textContent = 'Horas';
    document.querySelector('#contador .grid > div:nth-child(3) .poppins').textContent = 'Minutos';
    document.querySelector('#contador .grid > div:nth-child(4) .poppins').textContent = 'Segundos';
}

// Atualizar contador a cada segundo
updateCounter();
setInterval(updateCounter, 1000);

// Efeito de fade-in ao rolar a página
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observar todas as seções
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Variável global para controlar o áudio atual
let currentAudio = null;
let currentButton = null;

// Funcionalidade dos botões de música
function playMusic(audioSrc, button) {
    const playIcon = button.querySelector('span');
    
    // Se já há um áudio tocando, para ele
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentButton) {
            const currentPlayIcon = currentButton.querySelector('span');
            currentPlayIcon.textContent = '▶️';
            currentButton.classList.remove('bg-green-500', 'hover:bg-green-600');
            currentButton.classList.add('music-button');
        }
    }
    
    // Se clicou no mesmo botão, apenas para a música
    if (currentButton === button && currentAudio) {
        currentAudio = null;
        currentButton = null;
        playIcon.textContent = '▶️';
        button.classList.remove('bg-green-500', 'hover:bg-green-600');
        button.classList.add('music-button');
        return;
    }
    
    // Cria novo áudio e toca
    currentAudio = new Audio(audioSrc);
    currentButton = button;
    
    currentAudio.addEventListener('ended', function() {
        playIcon.textContent = '▶️';
        button.classList.remove('bg-green-500', 'hover:bg-green-600');
        button.classList.add('music-button');
        currentAudio = null;
        currentButton = null;
    });
    
    currentAudio.addEventListener('error', function() {
        alert('Erro ao carregar a música. Verifique se o arquivo existe.');
        playIcon.textContent = '▶️';
        button.classList.remove('bg-green-500', 'hover:bg-green-600');
        button.classList.add('music-button');
        currentAudio = null;
        currentButton = null;
    });
    
    currentAudio.play().then(() => {
        playIcon.textContent = '⏸️';
        button.classList.add('bg-green-500', 'hover:bg-green-600');
        button.classList.remove('music-button');
    }).catch(error => {
        console.error('Erro ao reproduzir música:', error);
        alert('Erro ao reproduzir a música. Verifique se o arquivo existe.');
        currentAudio = null;
        currentButton = null;
    });
}

// Floating hearts animation
function createFloatingHeart() {
    const heartsContainer = document.getElementById('floating-hearts');
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = ['💕', '💖', '💝', '💗', '💓', '🌸', '✨'][Math.floor(Math.random() * 7)];
    
    // Random position
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    heartsContainer.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 8000);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 3000);

// Create initial hearts
for (let i = 0; i < 3; i++) {
    setTimeout(createFloatingHeart, i * 1000);
}

// Create floating particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    
    // Add to body
    document.body.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 10000);
}

// Create particles periodically
setInterval(createParticle, 2000);

// Create initial particles
for (let i = 0; i < 5; i++) {
    setTimeout(createParticle, i * 500);
}

// Set letter date
const today = new Date();
const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    weekday: 'long'
};
document.getElementById('letter-date').textContent = today.toLocaleDateString('pt-BR', options);

// Image loading effects
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '0';
        this.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            this.style.transition = 'all 0.5s ease';
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        }, 100);
    });
    
    // Add loading class initially
    img.style.opacity = '0';
    img.style.transform = 'scale(0.95)';
});

// Smooth reveal for sections
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 100);
        }, index * 200);
    });
};

// Call reveal after page load
window.addEventListener('load', revealSections);
