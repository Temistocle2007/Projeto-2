document.getElementById('home').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('content').innerHTML = `
        <h2>Bem-vindo à minha página!</h2>
        <p>Esta é uma página de exemplo criada com HTML, CSS e JavaScript.</p>
    `;
});

document.getElementById('about').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('content').innerHTML = `
        <h2>Sobre mim</h2>
        <p>Eu sou uma pessoa interessante.</p>
    `;
});

document.getElementById('contact').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('content').innerHTML = `
        <h2>Contato</h2>
        <p>Você pode me contatar em example@example.com</p>
    `;
});