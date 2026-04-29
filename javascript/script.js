document.addEventListener('DOMContentLoaded', function() {
    let currentPhotoIndex = 0; // Índice da foto que está sendo animada
    const photos = document.querySelectorAll('.foto'); // Seleciona todas as fotos
    const totalPhotos = photos.length;

    // Função para aplicar a animação de pulse
    function applyPulseEffect() {
        // Remove a animação de pulse de todas as fotos
        photos.forEach(item => {
            item.classList.remove('pulse-active');
        });
        
        // Adiciona a animação de pulse à foto atual
        photos[currentPhotoIndex].classList.add('pulse-active');
        
        // Atualiza o índice para a próxima foto
        currentPhotoIndex = (currentPhotoIndex + 1) % totalPhotos; // Vai de 0 até o total de fotos, reinicia quando chega ao final
    }

    // Chama a função de animação automaticamente a cada 3 segundos (3000ms)
    let pulseInterval = setInterval(applyPulseEffect, 3000);

    // Função que pausa a animação ao passar o mouse sobre a foto
    function pausePulseOnHover(event) {
        // Para a animação de pulse
        clearInterval(pulseInterval);
        
        // Adiciona a animação de pulse apenas na foto que está sendo interagida
        event.target.classList.add('pulse-active');
    }

    // Função que retoma a animação ao tirar o mouse da foto
    function resumePulse() {
        // Retoma a animação
        pulseInterval = setInterval(applyPulseEffect, 3000);
    }

    // Evento para pausa da animação quando o mouse entra na foto
    photos.forEach(photo => {
        photo.addEventListener('mouseenter', pausePulseOnHover);
        photo.addEventListener('mouseleave', resumePulse);
    });

    // Inicia a animação assim que a página carregar
    applyPulseEffect();
});

// Evento para abrir o popup
document.getElementById('pedidoButton').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

// Evento para fechar o popup
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

// Evento para o botão "Sim" dentro do popup
document.getElementById('simButton').addEventListener('click', function() {
    alert('Eu sabia que você diria sim! 💍 Te amo!');
    // Redireciona para outra página (substitua 'outra-pagina.html' pelo caminho desejado)
    window.location.href = 'SIM.html'; // Substitua pela URL da página de destino
    document.getElementById('popup').style.display = 'none';
});

// Evento para o botão "Não" dentro do popup
document.getElementById('naoButton').addEventListener('click', function() {
    alert('Ah, nem brinca com isso! 💔');
    window.location.href = 'nao.html';
    document.getElementById('popup').style.display = 'none';
});
