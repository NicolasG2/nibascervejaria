// 1. Lógica da Tela de Abertura (Splash Screen)
document.addEventListener('DOMContentLoaded', () => {
    // Verifica se já passou o splash nessa sessão
    if (!sessionStorage.getItem('splashShown')) {
        const splash = document.getElementById('splash-screen');
        const audio = document.getElementById('audio-splash');
        
        if(splash) {
            if(audio) audio.play();
            setTimeout(() => {
                splash.classList.add('hidden');
                setTimeout(() => {
                    splash.style.display = 'none';
                }, 1000);
            }, 3000); // Tempo em milissegundos (3 segundos)
            sessionStorage.setItem('splashShown', 'true');
        }
    } else {
        const splash = document.getElementById('splash-screen');
        if (splash) splash.style.display = 'none';
    }
});

// 2. Lógica do Modo Mudo (Global)
let isMuted = localStorage.getItem('muted') === 'true' ? true : false;

function toggleMute() {
    isMuted = !isMuted;
    localStorage.setItem('muted', isMuted);
    const btn = document.getElementById('mute-toggle');
    if (isMuted) {
        btn.innerHTML = '🔇';
        btn.style.borderColor = '#ff4444';
    } else {
        btn.innerHTML = '🔊';
        btn.style.borderColor = 'var(--primary-color)';
    }
}

// Carregar estado do botão mudo ao iniciar
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mute-toggle');
    if (isMuted) {
        btn.innerHTML = '🔇';
        btn.style.borderColor = '#ff4444';
    }
});

// Função para tocar sons nas seções
function playSound(soundId) {
    if (isMuted) return;
    const audioMap = {
        'guitar': 'guitar.mp3',
        'bass': 'bass.mp3',
        'drum': 'drum.mp3',
        'pour': 'pour.mp3',
        'applause': 'applause.mp3'
    };
    
    if (audioMap[soundId]) {
        // Toca o som sem bloquear a página
        const audio = new Audio(`../assets/audio/${audioMap[soundId]}`); // Caminho corrigido para pages/
        audio.volume = 0.4;
        audio.currentTime = 0;
        audio.play().catch(e => console.log("Áudio bloqueado pelo navegador."));
    }
}