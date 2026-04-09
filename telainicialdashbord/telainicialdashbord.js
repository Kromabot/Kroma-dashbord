document.addEventListener("DOMContentLoaded", function() {
    // Variáveis com letra minúscula e nomes completos
    const botaoAtualizacoes = document.getElementById('btn-atualizacoes');
    const painelAtualizacoes = document.getElementById('painel-atualizacoes');
    const botaoNotificacoes = document.getElementById('btn-notificacoes');
    const painelNotificacoes = document.getElementById('painel-notificacoes');

    // Lógica para Atualizações
    if (botaoAtualizacoes && painelAtualizacoes) {
        botaoAtualizacoes.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            if (painelNotificacoes) {
                painelNotificacoes.classList.remove('mostrar-notificacoes');
            }
            painelAtualizacoes.classList.toggle('mostrar-atualizacoes');
        });
    }

    // Lógica para Notificações
    if (botaoNotificacoes && painelNotificacoes) {
        botaoNotificacoes.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            if (painelAtualizacoes) {
                painelAtualizacoes.classList.remove('mostrar-atualizacoes');
            }
            painelNotificacoes.classList.toggle('mostrar-notificacoes');
        });
    }

    // Fechar ao clicar fora
    document.addEventListener('click', function(e) {
        if (painelAtualizacoes && painelAtualizacoes.classList.contains('mostrar-atualizacoes')) {
            if (!painelAtualizacoes.contains(e.target) && !botaoAtualizacoes.contains(e.target)) {
                painelAtualizacoes.classList.remove('mostrar-atualizacoes');
            }
        }

        if (painelNotificacoes && painelNotificacoes.classList.contains('mostrar-notificacoes')) {
            if (!painelNotificacoes.contains(e.target) && !botaoNotificacoes.contains(e.target)) {
                painelNotificacoes.classList.remove('mostrar-notificacoes');
            }
        }
    });

    // Impede que o clique dentro do painel o feche
    const impedirFechoNoPainel = (painel) => {
        if (painel) {
            painel.addEventListener('click', (e) => e.stopPropagation());
        }
    };

    impedirFechoNoPainel(painelAtualizacoes);
    impedirFechoNoPainel(painelNotificacoes);
});