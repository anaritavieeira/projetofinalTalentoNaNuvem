    const h2 = document.getElementById("titulo-digitado");
        const texto = h2.textContent;
        h2.textContent = ""; // Limpa o texto inicial
        let i = 0;

    function digitar() {
        if (i < texto.length) {
        h2.textContent += texto.charAt(i);
        i++;
        setTimeout(digitar, 100);
        }
    }

    window.onload = function() {
    digitar();
    };

/**
 * Função executada quando o conteúdo do DOM (a estrutura da página) é totalmente carregado.
 * Ela garante que nosso código JavaScript só rode depois que todos os elementos HTML estiverem prontos.
 */


document.addEventListener('DOMContentLoaded', () => {

    // Array de objetos que contém as informações de cada projeto do portfólio.
    const projects = [
        {
            title: 'Fábrica de Ideias',
            description: 'Aplicação web voltada para projeto de empreendedorismo local que reutiliza resíduos têxteis para criar produtos e brinquedos sustentáveis.',
            image: 'img/em-brevebranco.jpg',
            tags: ['HTML', 'CSS', 'JavaScript', 'React Router'],
            dataAiHint: 'online store'
        },
        {
            title: 'Bikos',
            description: 'Plataforma de conexão entre prestadores de serviço e oportunidades de trabalho, com foco em inclusão social e geração de renda.',
            image: 'img/em-brevebranco.jpg',
            tags: ['Protótipo', 'Figma', 'UX'],
            dataAiHint: 'project'
        },
        {
            title: 'SOS Pet',
            description: 'Solução para facilitar o acesso a informações do mundo Pet, como hospitais veterinários próximos e seus serviços.',
            image: 'img/em-brevebranco.jpg',
            tags: ['Protótipo', 'Figma', 'UX'],
            dataAiHint: 'mobile project'
        },
        {
            title: 'Swag Labs',
            description: 'Projeto voltado à análise funcional e elaboração de casos de teste para um site utilizado em práticas de testes automatizados.',
            image: 'img/em-brevebranco.jpg',
            tags: ['BDD', 'Selenium', 'Behave', 'Python', 'QA'],
            dataAiHint: 'test project'
        }
    ];

    // Seleciona o contêiner no HTML onde os cards dos projetos serão inseridos.
    const projectsGrid = document.querySelector('.projects-grid');
    // Seleciona todos os botões de filtro.
    const filterButtons = document.querySelectorAll('.filter-btn');

    /**
     * Função para exibir os projetos na tela.
     * Ela cria o HTML para cada projeto e o insere no grid.
     * @param {Array} projectsToDisplay - Um array de projetos a serem exibidos.
     */
    function displayProjects(projectsToDisplay) {
        // Limpa o grid de projetos antes de adicionar novos itens.
        projectsGrid.innerHTML = '';

        // Itera sobre cada projeto no array fornecido.
        projectsToDisplay.forEach(project => {
            // Cria um elemento 'div' para o card do projeto.
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            // Gera o HTML interno do card com os dados do projeto.
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}" data-ai-hint="${project.dataAiHint}">
                <div class="project-card-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            `;
            // Adiciona o card criado ao grid de projetos.
            projectsGrid.appendChild(projectCard);
        });
    }

    /**
     * Função para filtrar os projetos com base na tag selecionada.
     * @param {string} filter - A tag pela qual filtrar ('all', 'HTML', 'CSS', 'JavaScript').
     */
    function filterProjects(filter) {
        let filteredProjects;

        // Se o filtro for 'all', exibe todos os projetos.
        if (filter === 'all') {
            filteredProjects = projects;
        } else {
            // Caso contrário, filtra o array de projetos para incluir apenas aqueles que contêm a tag.
            filteredProjects = projects.filter(project => project.tags.includes(filter));
        }

        // Seleciona todos os cards de projeto que já estão na página.
        const allCards = document.querySelectorAll('.project-card');
        // Esconde todos os cards primeiro para criar o efeito de filtro.
        allCards.forEach(card => card.classList.remove('show'));
        
        // Exibe os projetos filtrados.
        displayProjects(filteredProjects);
        
        // Adiciona um pequeno atraso para que os novos cards apareçam com uma transição suave.
        setTimeout(() => {
            const newCards = document.querySelectorAll('.project-card');
            newCards.forEach(card => card.classList.add('show'));
        }, 10);
    }

    // Adiciona um "ouvinte de evento" a cada botão de filtro.
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões.
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe 'active' apenas ao botão que foi clicado.
            button.classList.add('active');

            // Obtém o valor do filtro a partir do atributo 'data-filter' do botão.
            const filter = button.dataset.filter;
            // Chama a função para filtrar os projetos.
            filterProjects(filter);
        });
    });

    // Exibição inicial: exibe todos os projetos quando a página é carregada pela primeira vez.
    filterProjects('all');

});
