document.addEventListener("DOMContentLoaded", function() {
    // Variáveis com letra minúscula e nomes completos
    const botaoAtualizacoesfuncoesinfoservidores = document.getElementById('btn-atualizacoes-funcoes-info-servidores');
    const painelAtualizacoesfuncoesinfoservidores = document.getElementById('painel-atualizacoes-funcoes-info-servidores');
    const botaoNotificacoesfuncoesinfoservidores = document.getElementById('btn-notificacoes-funcoes-info-servidores');
    const painelNotificacoesfuncoesinfoservidores = document.getElementById('painel-notificacoes-funcoes-info-servidores');

    // Lógica para Atualizações
    if (botaoAtualizacoesfuncoesinfoservidores && painelAtualizacoesfuncoesinfoservidores) {
        botaoAtualizacoesfuncoesinfoservidores.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            if (painelNotificacoesfuncoesinfoservidores) {
                painelNotificacoesfuncoesinfoservidores.classList.remove('mostrar-notificacoes-funcoes-info-servidores');
            }
            painelAtualizacoesfuncoesinfoservidores.classList.toggle('mostrar-atualizacoes-funcoes-info-servidores');
        });
    }

    // Lógica para Notificações
    if (botaoNotificacoesfuncoesinfoservidores && painelNotificacoesfuncoesinfoservidores) {
        botaoNotificacoesfuncoesinfoservidores.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            if (painelAtualizacoesfuncoesinfoservidores) {
                painelAtualizacoesfuncoesinfoservidores.classList.remove('mostrar-atualizacoes-funcoes-info-servidores');
            }
            painelNotificacoesfuncoesinfoservidores.classList.toggle('mostrar-notificacoes-funcoes-info-servidores');
        });
    }

    // Fechar ao clicar fora
    document.addEventListener('click', function(e) {
        if (painelAtualizacoesfuncoesinfoservidores && painelAtualizacoesfuncoesinfoservidores.classList.contains('mostrar-atualizacoes-funcoes-info-servidores')) {
            if (!painelAtualizacoesfuncoesinfoservidores.contains(e.target) && !botaoAtualizacoesfuncoesinfoservidores.contains(e.target)) {
                painelAtualizacoesfuncoesinfoservidores.classList.remove('mostrar-atualizacoes-funcoes-info-servidores');
            }
        }

        if (painelNotificacoesfuncoesinfoservidores && painelNotificacoesfuncoesinfoservidores.classList.contains('mostrar-notificacoes-funcoes-info-servidores')) {
            if (!painelNotificacoesfuncoesinfoservidores.contains(e.target) && !botaoNotificacoesfuncoesinfoservidores.contains(e.target)) {
                painelNotificacoesfuncoesinfoservidores.classList.remove('mostrar-notificacoes-funcoes-info-servidores');
            }
        }
    });

    // Impede que o clique dentro do painel o feche
    const impedirFechoNoPainel = (painel) => {
        if (painel) {
            painel.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    };
    impedirFechoNoPainel(painelAtualizacoesfuncoesinfoservidores);
    impedirFechoNoPainel(painelNotificacoesfuncoesinfoservidores);
});

function mudarIdioma(sigla, flagCode) {
    const textoAtual = document.getElementById('sigla-atual-funcoes-info-servidores');
    const imagemAtual = document.getElementById('img-atual-funcoes-info-servidores');

    if (textoAtual && imagemAtual) {
        textoAtual.innerText = sigla;
        imagemAtual.src = `https://flagcdn.com/w40/${flagCode}.png`;
        console.log("Idioma trocado para: " + sigla);
    } else {
        console.error("IDs não encontrados!");
    }
}

// ADICIONA ESTA LINHA:
window.mudarIdioma = mudarIdioma;