// Função para redirecionar para outras páginas
function redirecionarPara(pagina) {
    window.location.href = pagina + '.html';
}

// Atualizar estatísticas (exemplo)
document.addEventListener('DOMContentLoaded', () => {
    // Aqui você pode adicionar código para atualizar as estatísticas
    // com base em dados do localStorage ou API, por exemplo
    document.getElementById('total-questoes').textContent = '120';
    document.getElementById('tempo-medio').textContent = '5min';
});