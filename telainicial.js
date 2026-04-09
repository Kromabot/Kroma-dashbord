document.addEventListener("DOMContentLoaded", function() {
    // --- LÓGICA DAS ATUALIZAÇÕES ---
    const btnatualizacoes = document.getElementById('btn-atualizacoes');
    const painelatualizacoes = document.getElementById('painel-atualizacoes');

    if (btnatualizacoes && painelatualizacoes) {
        btnatualizacoes.onclick = function() {
            // Remove a outra para não ficarem abertas ao mesmo tempo (opcional)
            document.getElementById('painel-notificacoes').classList.remove('mostrar-notificacoes');
            painelatualizacoes.classList.toggle('mostrar-atualizacoes');
        };
    }

    // --- LÓGICA DAS NOTIFICAÇÕES ---
    const btnnotificacoes = document.getElementById('btn-notificacoes');
    const painelnotificacoes = document.getElementById('painel-notificacoes');

    if (btnnotificacoes && painelnotificacoes) {
        btnnotificacoes.onclick = function() {
            // Remove a outra para não ficarem abertas ao mesmo tempo (opcional)
            document.getElementById('painel-atualizacoes').classList.remove('mostrar-atualizacoes');
            painelnotificacoes.classList.toggle('mostrar-notificacoes');
        };
    }
});