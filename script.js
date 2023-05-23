
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

var isEnglish = true; 

var initialState = {
  name: document.getElementById('nameH1').innerHTML,
  description: document.getElementById('descrip').innerHTML,
  projectName: document.getElementById('projectsH1').innerHTML,
  project1: document.getElementById('bin2').innerHTML,
  project2: document.getElementById('rng').innerHTML,
  project3: document.getElementById('time').innerHTML,
  proDescription: document.getElementById('desc1').innerHTML,
  proDescription2: document.getElementById('desc2').innerHTML,
  proDescription3: document.getElementById('desc3').innerHTML,
  footer: document.getElementById('rodap').innerHTML
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
  var name = document.getElementById('nameH1');
  var projectName = document.getElementById('projectsH1');
  var description = document.getElementById('descrip')
  var project1 = document.getElementById('bin2')
  var project2 = document.getElementById('rng')
  var project3 = document.getElementById('time')
  var proDescription = document.getElementById('desc1')
  var proDescription2 = document.getElementById('desc2')
  var proDescription3 = document.getElementById('desc3')
  var footer = document.getElementById('rodap')

  name.innerHTML = "Olá! Eu sou o <br> Tomaz"
  description.innerHTML = `Desde os 8 anos de idade estou exposto ao desenvolvimento web, de uma forma básica.
  Eu tinha vários blogs relacionados a um jogo chamado "Club Penguin", que era um jogo de navegador para crianças. Eu desenvolvi meus próprios blogs por volta dessa idade (usando HTML e CSS) e costumava escrever artigos sobre o jogo, ensinando truques e dando dicas.
  Em janeiro de 2023 percebi que era um tema que me interessava muito. Desde então tenho testado meus conhecimentos e aprendido todos os dias.
  Meu aprendizado tem sido espontâneo e rápido devido ao meu grande interesse pelo assunto e alta vontade de aprender. Fiz e estou fazendo vários cursos brasileiros e estrangeiros, e pretendo cursar Engenharia de Software na PUC-Minas no próximo semestre.`
  projectName.innerHTML = "Projetos Pessoais"
  project1.innerHTML = "Conversor Binário para Decimal"
  project2.innerHTML = "Gerador de Números Aleatórios"
  project3.innerHTML = "Que Horas são Agora?"
  proDescription.innerHTML = "Um simples conversor de binários para decimais"
  proDescription2.innerHTML = "Você pode gerar números aleatórios inteiros, decimais, ou negativos dentro de uma faixa que você escolhe"
  proDescription3.innerHTML = "Aplicação WEB que mostra o tempo e clima de Belo Horizonte(BR) e Oslo (Noruega). Layout responsivo que muda conforme o horário e o clima"
  rodap.innerHTML = `- Obrigado pela Visita! - <br>
  Feito pelo Tomaz`
}

function english() {
  var name = document.getElementById('nameH1');
  var projectName = document.getElementById('projectsH1');
  var description = document.getElementById('descrip')
  var project1 = document.getElementById('bin2')
  var project2 = document.getElementById('rng')
  var project3 = document.getElementById('time')
  var proDescription = document.getElementById('desc1')
  var proDescription2 = document.getElementById('desc2')
  var proDescription3 = document.getElementById('desc3')
  var footer = document.getElementById('rodap')


  name.innerHTML = initialState.name;
  description.innerHTML = initialState.description;
  projectName.innerHTML = initialState.projectName;
  project1.innerHTML = initialState.project1;
  project2.innerHTML = initialState.project2;
  project3.innerHTML = initialState.project3;
  proDescription.innerHTML = initialState.proDescription;
  proDescription2.innerHTML = initialState.proDescription2;
  proDescription3.innerHTML = initialState.proDescription3;
  rodap.innerHTML = initialState.footer;
}

var checkbox = document.getElementById('languageCheckbox');
checkbox.addEventListener('click', toggleLanguage);
