//import { motion } from "@motionone/dom";



const conjuntoDeFerramentas = [
  { titulo: "html5", tipo: "linguagens" },
  { titulo: "css3", tipo: "linguagens" },
  { titulo: "javascript", tipo: "linguagens" },
  { titulo: "typescript", tipo: "linguagens" },
  { titulo: "java", tipo: "linguagens" },
  { titulo: "python", tipo: "linguagens" },

  { titulo: "nextjs", tipo: "framework" },
  { titulo: "spring", tipo: "framework" },

  { titulo: "react", tipo: "biblioteca" },

  { titulo: "mongodb", tipo: "bancodedados" },
  { titulo: "mysql", tipo: "bancodedados" },
  { titulo: "postgresql", tipo: "bancodedados" },

  { titulo: "vscode", tipo: "ferramentas" },
  { titulo: "intellij", tipo: "ferramentas" },
  { titulo: "git", tipo: "ferramentas" },
  { titulo: "github", tipo: "ferramentas" },
  { titulo: "vercel", tipo: "ferramentas" },
  { titulo: "docker", tipo: "ferramentas" },

  { titulo: "postman", tipo: "apis" },
  { titulo: "oauth", tipo: "apis" },
  { titulo: "rest", tipo: "apis" },
];

function renderizarCartoes(filtro = "") {
  const cartoes = document.getElementById("cartoes-grid");
  cartoes.innerHTML = "";

  const cartoesFiltrados = filtro ? conjuntoDeFerramentas.filter((cartao) => cartao.tipo === filtro): conjuntoDeFerramentas;

  cartoesFiltrados.forEach((cartao) => {
    const card = document.createElement("div");
    card.className = "cartao";
    card.innerHTML = `
		<div id="cartao">
			<a href="https://www.${cartao.titulo}.com/" target="_blank" rel="noopener noreferrer">
			<div class="cartao-content">
				<p class="cartao-title">${cartao.titulo.charAt(0).toLocaleUpperCase() + cartao.titulo.substring(1)}</p>
				<div class="icon-container">
					<i class="devicon-${cartao.titulo}-plain colored"></i>
					<span class="tooltip">${cartao.titulo}</span>
				</div>
			</div>
			</a>
		</div>
		`;
    cartoes.appendChild(card);
  });
}
function filtrarCartoes(tipo) {
  renderizarCartoes(tipo);
}

window.onload = () => renderizarCartoes("linguagens");



document.addEventListener("DOMContentLoaded", function () {
  var apiUrl = "https://api.github.com/users/John1Souza/repos?page=1&per_page=70"; // Substitua 'seu_usuario' pelo seu nome de usuário do GitHub
  let projects_collection = [
    "projeto_login_riot",
    "propertiesecommerce",
    "projeto-web-site",
    "landing-page",
    "html-css-website-v1",
    "Super-Formul-rio",
  ];
 
  fetch(apiUrl, {
	  headers: {'Authorization': 'token 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'}
  	})
    .then((response) => response.json())
    .then((data) => { 
    	var pagesRepos = data.filter((repo) => { 
		return repo.has_pages && projects_collection.includes(repo.name);
	}); // Filtra apenas os repositórios com GitHub Pages ativado
      pagesRepos.forEach((repo) => {
        var repoContainer = document.getElementById("repos-container");
        var repoElement = document.createElement("div");
        repoElement.classList.add("repo");
        repoElement.innerHTML = `
				<div class="zoom">
					<img class="projects-photo" src="./images/${repo.name}.webp" alt="projects photo"/>
				</div>
				<div class="gradient-overlay"></div>
				<h3>${repo.name}</h3>
				<p><strong>Descrição:</strong> ${repo.description}</p>
				<p><strong>Linguagem:</strong> ${repo.language}</p>
				<p ><strong>Projeto:</strong> <a href="https://github.com/John1Souza/${repo.name}" target="_blank">${repo.name}</a></p>
				<p ><strong>DEPLOY:</strong> <a href="https://John1Souza.github.io/${repo.name}/" target="_blank">${repo.name}</a></p>
			`;
        repoContainer.appendChild(repoElement);
      });
    })
    .catch((error) => {
      console.error("Erro ao carregar repositórios do GitHub: ", error);
    });

    
    const form = document.getElementById("sugest_form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyZyrPjTCk-p6bcAIM_qLj-RzidvqTiUEsIpGxBIyDjmi6FOoEa8IXQW0Pebb_EkSxdtA/exec", {
        redirect: "follow",
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erro na resposta: ${response.status}`);
      }

      // const result = await response.json();
      // alert(result.message || "Dados enviados com sucesso!");

      form.reset();
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  });

    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("mouseover", () => {
        console.log("Hovered over:", card.querySelector(".card-title").innerText);
      });
    })
});

