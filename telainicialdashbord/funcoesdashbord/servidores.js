document.addEventListener("DOMContentLoaded", function() {
    // Variáveis com letra minúscula e nomes completos
    const botaoAtualizacoesfuncoesservidores = document.getElementById('btn-atualizacoes-funcoes-servidores');
    const painelAtualizacoesfuncoesservidores = document.getElementById('painel-atualizacoes-funcoes-servidores');
    const botaoNotificacoesfuncoesservidores = document.getElementById('btn-notificacoes-funcoes-servidores');
    const painelNotificacoesfuncoesservidores = document.getElementById('painel-notificacoes-funcoes-servidores');

    // Lógica para Atualizações
    if (botaoAtualizacoesfuncoesservidores && painelAtualizacoesfuncoesservidores) {
        botaoAtualizacoesfuncoesservidores.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            if (painelNotificacoesfuncoesservidores) {
                painelNotificacoesfuncoesservidores.classList.remove('mostrar-notificacoes-funcoes-servidores');
            }
            painelAtualizacoesfuncoesservidores.classList.toggle('mostrar-atualizacoes-funcoes-servidores');
        });
    }

    // Lógica para Notificações
    if (botaoNotificacoesfuncoesservidores && painelNotificacoesfuncoesservidores) {
        botaoNotificacoesfuncoesservidores.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            
            if (painelAtualizacoesfuncoesservidores) {
                painelAtualizacoesfuncoesservidores.classList.remove('mostrar-atualizacoes-funcoes-servidores');
            }
            painelNotificacoesfuncoesservidores.classList.toggle('mostrar-notificacoes-funcoes-servidores');
        });
    }

    // Fechar ao clicar fora
    document.addEventListener('click', function(e) {
        if (painelAtualizacoesfuncoesservidores && painelAtualizacoesfuncoesservidores.classList.contains('mostrar-atualizacoes-funcoes-servidores')) {
            if (!painelAtualizacoesfuncoesservidores.contains(e.target) && !botaoAtualizacoesfuncoesservidores.contains(e.target)) {
                painelAtualizacoesfuncoesservidores.classList.remove('mostrar-atualizacoes-funcoes-servidores');
            }
        }

        if (painelNotificacoesfuncoesservidores && painelNotificacoesfuncoesservidores.classList.contains('mostrar-notificacoes-funcoes-servidores')) {
            if (!painelNotificacoesfuncoesservidores.contains(e.target) && !botaoNotificacoesfuncoesservidores.contains(e.target)) {
                painelNotificacoesfuncoesservidores.classList.remove('mostrar-notificacoes-funcoes-servidores');
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
    impedirFechoNoPainel(painelAtualizacoesfuncoesservidores);
    impedirFechoNoPainel(painelNotificacoesfuncoesservidores);
});

function mudarIdioma(sigla, flagCode) {
    const textoAtual = document.getElementById('sigla-atual-funcoes-servidores');
    const imagemAtual = document.getElementById('img-atual-funcoes-servidores');

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