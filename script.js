// Mensagem no console ao carregar
window.onload = () => {
  console.log("Bem-vinda ao meu portfólio! 🚀");
};

// Alterna o tema
function mudarTema() {
  document.body.classList.toggle('dark');
}

// Mostra lista de projetos
function mostrarProjetos() {
  const lista = document.getElementById('lista-projetos');
  const projetos = ["Site com HTML", "Jogo com JS", "API com Node.js"];
  lista.innerHTML = '';

  projetos.forEach((projeto) => {
    const li = document.createElement('li');
    li.textContent = `✔️ ${projeto}`;
    lista.appendChild(li);
  });
}


// Exibe ícones de ferramentas
function mostrarFerramentas() {
  const ferramentas = [
    { nome: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { nome: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { nome: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { nome: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { nome: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { nome: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
  ];

  const div = document.getElementById('lista-ferramentas');
  div.innerHTML = '';

  ferramentas.forEach(ferramenta => {
    const img = document.createElement('img');
    img.src = ferramenta.img;
    img.alt = ferramenta.nome;
    img.title = ferramenta.nome;
    img.style.width = "50px";
    img.style.margin = "10px";
    div.appendChild(img);
  });
}
