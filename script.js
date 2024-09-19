
// Função para buscar dados da API e atualizar a página
async function fetchUserData() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=100'); // Buscando dados de 100 usuários
        const data = await response.json();
        const users = data.results;

        // Atualizar o total de usuários
        document.getElementById('total-users').textContent = `Total de Usuários: ${users.length}`;

        // Processar dados para gráficos
        const genderData = users.reduce((acc, user) => {
            acc[user.gender] = (acc[user.gender] || 0) + 1;
            return acc;
        }, {});

        // Renderizar gráficos
        renderGenderChart(genderData);
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}

// Função para renderizar gráfico de distribuição por gênero
function renderGenderChart(genderData) {
    const ctx = document.getElementById('genderChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(genderData),
            datasets: [{
                label: 'Distribuição por Gênero',
                data: Object.values(genderData),
                backgroundColor: ['#36a2eb', '#ff6384'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Distribuição de Gênero dos Usuários'
                }
            }
        }
    });
}

// Chamar a função ao carregar a página
fetchUserData();
