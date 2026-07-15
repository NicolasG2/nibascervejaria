// Função simplificada para carregar arquivos HTML externos
async function loadComponent(elementId, filePath) {
    try {
        // Como o menu agora usa caminhos absolutos com /, 
        // o header e o footer SEMPRE estarão na raiz.
        console.log("Tentando carregar: " + filePath); 
        const response = await fetch(filePath);
        if (response.ok) {
            const content = await response.text();
            document.getElementById(elementId).innerHTML = content;
            console.log("Sucesso! " + filePath + " carregado."); 
        } else {
            console.error('Erro: O navegador não encontrou o arquivo:', filePath);
        }
    } catch (error) {
        console.error('Falha na requisição:', error);
    }
}

// Carregar o Header e o Footer quando a página iniciar
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-container', 'header.html');
    loadComponent('footer-container', 'footer.html');
});