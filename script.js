// Define a data final para a contagem regressiva
const endDate = new Date('2024-12-31T23:59:59').getTime();

// Atualiza o contador a cada segundo
const timer = setInterval(function() {
  const now = new Date().getTime();
  const timeLeft = endDate - now;

  // Calcula dias, horas, minutos e segundos restantes
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Atualiza os elementos HTML com os valores calculados
  document.getElementById('days').textContent = formatTime(days);
  document.getElementById('hours').textContent = formatTime(hours);
  document.getElementById('minutes').textContent = formatTime(minutes);
  document.getElementById('seconds').textContent = formatTime(seconds);

  // Verifica se o contador chegou a zero e para o intervalo se necessário
  if (timeLeft < 0) {
    clearInterval(timer);
    document.querySelector('.countdown').innerHTML = '<h2>Contagem regressiva encerrada!</h2>';
  }
}, 1000);

// Função para adicionar zero à esquerda, se necessário
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
