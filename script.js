window.addEventListener("scroll", revealSections);

function revealSections() {
  const sections = document.querySelectorAll("section");

  for (let i = 1; i < sections.length; i++) {
    const sectionTop = sections[i].getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
      sections[i].classList.remove("hide");
    }
  }
}

window.addEventListener("scroll", revealSections);

let isEnglish = true;

const elements = {
  name: document.getElementById('nameH1'),
  description: document.getElementById('descrip'),
  projectName: document.getElementById('projectsH1'),
  project1: document.getElementById('bin2'),
  project2: document.getElementById('rng'),
  project3: document.getElementById('time'),
  proDescription: document.getElementById('desc1'),
  proDescription2: document.getElementById('desc2'),
  proDescription3: document.getElementById('desc3'),
  proDescription4: document.getElementById('desc4'),
  footer: document.getElementById('rodap')
};

function revealSections() {
  const sections = document.querySelectorAll("section");

  for (let i = 1; i < sections.length; i++) {
    const sectionTop = sections[i].getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
      sections[i].classList.remove("hide");
    }
  }
}

function toggleLanguage() {
  if (isEnglish) {
    brasil();
  } else {
    english();
  }
  
  isEnglish = !isEnglish;
}

function brasil() {
  const { name, description, projectName, project1, project2, project3, proDescription, proDescription2, proDescription3, proDescription4, footer } = elements;

  name.innerHTML = "Olá! Eu sou o <br> Tomaz";
  description.innerHTML = `Desde os 8 anos de idade estou exposto ao desenvolvimento web, de uma forma básica.
  Eu tinha vários blogs relacionados a um jogo chamado "Club Penguin", que era um jogo de navegador para crianças. Eu desenvolvi meus próprios blogs por volta dessa idade (usando HTML e CSS) e costumava escrever artigos sobre o jogo, ensinando truques e dando dicas.
  Em janeiro de 2023 percebi que era um tema que me interessava muito. Desde então tenho testado meus conhecimentos e aprendido todos os dias.
  Meu aprendizado tem sido espontâneo e rápido devido ao meu grande interesse pelo assunto e alta vontade de aprender. Fiz e estou fazendo vários cursos brasileiros e estrangeiros, e pretendo cursar Engenharia de Software na PUC-Minas no próximo semestre.`;
  projectName.innerHTML = "Projetos Pessoais";
  project1.innerHTML = "Conversor Binário para Decimal";
  project2.innerHTML = "Gerador de Números Aleatórios";
  project3.innerHTML = "Que Horas são Agora?";
  proDescription.innerHTML = "Um simples conversor de binários para decimais";
  proDescription2.innerHTML = "Você pode gerar números aleatórios inteiros, decimais, ou negativos dentro de uma faixa que você escolhe";
  proDescription3.innerHTML = "Aplicação WEB que mostra o tempo e clima de Belo Horizonte(BR) e Oslo (Noruega). Layout responsivo que muda conforme o horário e o clima";
  proDescription4.innerHTML = "Aplicação WEB que gera número aleatórios para rifas";
  footer.innerHTML = `- Obrigado pela Visita! - <br> Feito pelo Tomaz`;
}

function english() {
  const { name, description, projectName, project1, project2, project3, proDescription, proDescription2, proDescription3, proDescription4, footer } = elements;

  name.innerHTML = initialState.name;
  description.innerHTML = initialState.description;
  projectName.innerHTML = initialState.projectName;
  project1.innerHTML = initialState.project1;
  project2.innerHTML = initialState.project2;
  project3.innerHTML = initialState.project3;
  proDescription.innerHTML = initialState.proDescription;
  proDescription2.innerHTML = initialState.proDescription2;
  proDescription3.innerHTML = initialState.proDescription3;
  proDescription4.innerHTML = initialState.proDescription4;
  footer.innerHTML = initialState.footer;
}

const initialState = {
  name: elements.name.innerHTML,
  description: elements.description.innerHTML,
  projectName: elements.projectName.innerHTML,
  project1: elements.project1.innerHTML,
  project2: elements.project2.innerHTML,
  project3: elements.project3.innerHTML,
  proDescription: elements.proDescription.innerHTML,
  proDescription2: elements.proDescription2.innerHTML,
  proDescription3: elements.proDescription3.innerHTML,
  proDescription4: elements.proDescription4.innerHTML,
  footer: elements.footer.innerHTML
};

const checkbox = document.getElementById('languageCheckbox');
checkbox.addEventListener('click', toggleLanguage);
