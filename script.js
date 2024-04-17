const dataFinal = new Date('2023-12-31 23:59:59').getTime();


const contador = document.getElementById('contador');
const interval = setInterval(() => {
    const agora = new Date().getTime();
    const diferenca = dataFinal - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    contador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (diferenca <= 0) {
        clearInterval(interval);
        contador.innerHTML = "Contagem encerrada!";
    }
}, 1000);
