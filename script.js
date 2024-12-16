document.addEventListener('DOMContentLoaded', function () {
    // Verifica se o formulário de login existe
    var loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            window.location.href = "product.html"; // Redireciona para a página de produtos
        });
    } else {
        console.error('Formulário de login não encontrado!');
    }

    // Script para o formulário de redefinir senha
    var resetForm = document.getElementById('reset-form');
    if (resetForm) {
        resetForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do formulário

            // Mostrar o pop-up informando que o link foi enviado
            document.getElementById('popup').style.display = 'block'; 

            // Esperar 3 segundos e redirecionar para a página de login
            setTimeout(function() {
                window.location.href = 'login.html'; // Redireciona para a página de login após 3 segundos
            }, 3000); // Tempo em milissegundos
        });
    } else {
        console.log("Formulário de redefinir senha não encontrado!");
    }
});
