// Função para abrir o pop-up
function openPopup(id) {
    document.getElementById(id).classList.add('active');
    document.body.style.overflow = 'hidden'; // Impede a rolagem da página
}

// Função para fechar o pop-up
function closePopup(id) {
    document.getElementById(id).classList.remove('active');
    document.body.style.overflow = ''; // Restaura a rolagem da página
    
    // Pausa o vídeo quando o pop-up é fechado
    const iframe = document.querySelector(`#${id} iframe`);
    if (iframe) {
        const iframeSrc = iframe.src;
        iframe.src = iframeSrc; // Recarrega o iframe para parar o vídeo
    }
}

// Fecha o pop-up ao clicar fora do conteúdo
document.querySelectorAll('.popup-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closePopup(overlay.id);
        }
    });
});

// Fecha o pop-up com a tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.popup-overlay').forEach(overlay => {
            if (overlay.classList.contains('active')) {
                closePopup(overlay.id);
            }
        });
    }
});

// Inicialização quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site Veritas Occulta carregado com sucesso!');
});