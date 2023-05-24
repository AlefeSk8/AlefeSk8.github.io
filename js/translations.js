// Traduções
var translations = {
  'en': {
    //header
    'text1': 'Home',
    'text2': 'About',
    'text3': 'Education',
    'text4': 'Skills',
    'text5': 'Contact',
    
    //Home
    'text6': "Hi, I'm",
    'text7': "I'm a Fullstack developer, I have experience with javascript frameworks, they are React.js, Node.js and React Native, I'm currently studying a bachelor's degree in Computer Science at University Anhembi Morumbi, it's my passion to work in this area of ​​development, I'm looking for great opportunities!",
    'text8': "Hire-Me",
    'text9': "Let's Talk",
    
    //About
    'text10': "About",
    'text11': "Me",
    'text12': "Fullstack-Developer!",
    'text13': "I'll tell you a little about myself, I consider myself a person focused on goals, determined, happy, I like to be among people and bring joy to the environment, music for me is like water, essential for life, I love programming listening to music, I'm always in search of knowledge, I love learning and seeing the result of what I'm doing!",
    'text14': "Read More",
    
    //Education
    'text15': "My",
    'text16': "Journey",
    'text17': "Education",
    'text18': "Computer Science - UAM",
    'text19': "Bachelor's degree in computer science at University Anhembi Morumbi (UAM).",
    'text20': "Fullstack Javascript - Rocketseat",
    'text21': "Course of fullstack javascript frameworks like Node.js, React.js and React Native at Rocketseat.",
    'text22': "IT Course - Microcamp",
    'text23': "I'm concluded the basic computer course and complementary course of English and Spanish.",
    'text24': "Experience",
    'text25': "Backend API Development - App4Health",
    'text26': "I'm worked at a project of health application, making a backend API using Node.js for integrate with frontend.",
    'text27': "Mobile App Development - GoFinance",
    'text28': "I'm worked at a own project of finance application, making a mobile app using React Native.",
    'text29': "Website Development - Tech Tem",
    'text30': "I'm worked at a e-commerce of electronics, making his site using wordpress and woocommerce, doing maintenances and updates.",
    
    //Skills
    'text31': "My",
    'text32': "Skills",
    'text33': "Coding Skills",
    
    'text34': "Professional Skills",
    'text35': "API Development",
    'text36': "Web Development",
    'text37': "App Development",
    'text38': "SEO Marketing",
    
    //Contact
    'text39': "Contact",
    'fullName': 'Full Name',
    'emailAddress': 'Email Address',
    'mobileNumber': 'Mobile Number',
    'emailSubject': 'Email Subject',
    'message': 'Your Message',
    'text40': 'Submit',
    
    //Footer
    'text41': 'by Álefe | All Rights Reserved.',
    
    //flags
    'flag': 'us-flag.png'
  },
  
  'pt-br': {
    'text1': 'Início',
    'text2': 'Sobre',
    'text3': 'Educação',
    'text4': 'Habilidades',
    'text5': 'Contato',
    
    //Home
    'text6': "Oi, sou",
    'text7': "Sou desenvolvedor Fullstack, tenho experiências com frameworks javascript, são elas React.js, Node.js e React Native, atualmente estou cursando bacharelado em Ciência da Computação na Universidade Anhembi Morumbi, é minha paixão trabalhar nessa área de desenvolvimento, estou em busca de grandes oportunidades!",
    'text8': "Contrate-Me",
    'text9': "Fale Comigo",
    
    //About
    'text10': "Sobre",
    'text11': "Mim",
    'text12': "Desenvolvedor-Fullstack!",
    'text13': "Vou te contar um pouco sobre mim, eu me considero uma pessoa focado nos objetivos, determinado, alegre, gosto de estar entre pessoas e trazer alegria para o ambiente, música pra mim é como a água, essencial para vida, amo programar ouvindo música, estou sempre em busca de conhecimento, amo aprender e ver o resultado daquilo que estou fazendo!",
    'text14': "Leia Mais",
    
    //Education
    'text15': "Minha",
    'text16': "Jornada",
    'text17': "Educação",
    'text18': "Ciência da Computação - UAM",
    'text19': "Bacharelado em ciência da computação na Universidade Anhembi Morumbi (UAM).",
    'text20': "Fullstack Javascript - Rocketseat",
    'text21': "Curso de frameworks javascript fullstack como Node.js, React.js e React Native na Rocketseat.",
    'text22': "Curso de TI - Microcamp",
    'text23': "Conclui o curso de informática básica e o curso complementar de Inglês e Espanhol.",
    'text24': "Experiência",
    'text25': "Desenvolvimento Backend API - App4Health",
    'text26': "Trabalhei no projeto de aplicativo de saúde, criando uma API backend utilizando Node.js para integrar com o frontend.",
    'text27': "Desenvolvimento App Mobile - GoFinance",
    'text28': "Trabalhei em um projeto pessoal de aplicativo de finanças, criando uma aplicação mobile utilizando React Native.",
    'text29': "Desenvolvimento Web - Tech Tem",
    'text30': "Trabalhei em um e-commerce de eletrônicos, criando seu site usando wordpress e woocommerce, fazendo manutenções e atualizações.",
    
    //Skills
    'text31': "Minhas",
    'text32': "Habilidades",
    'text33': "Habilidades de Codificação",
    
    'text34': "Habilidades Profissionais",
    'text35': "Desenvolvimento API",
    'text36': "Desenvolvimento Web",
    'text37': "Desenvolvimento App",
    'text38': "Marketing SEO",
    
    //Contact
    'text39': "Contate",
    'fullName': 'Nome Completo',
    'emailAddress': 'Endereço de Email',
    'mobileNumber': 'Número de Celular',
    'emailSubject': 'Assunto do Email',
    'message': 'Sua Mensagem',
    'text40': 'Enviar',
    
    //Footer
    'text41': 'por Álefe | Todos os Direitos Reservados.',
    
    //Flags
    'flag': 'br-flag.png'
  }
};

// Função para atualizar os textos com a tradução
function updateTexts(language) {
  var textElements = document.querySelectorAll('.translate');
  textElements.forEach(function(element, index) {
    element.textContent = translations[language]['text' + (index + 1)];
  });
}

// Função para atualizar os placeholders com a tradução
function updatePlaceholders(language) {
  var inputElements = document.querySelectorAll('input, textarea, button');
  inputElements.forEach(function(element) {
    var placeholderKey = element.getAttribute('placeholder-key');
    if (placeholderKey && translations[language][placeholderKey]) {
      element.setAttribute('placeholder', translations[language][placeholderKey]);
    }
  });
}

// Função para atualizar a bandeira
function updateFlag(language) {
  var flagElement = document.querySelector('.slider');
  flagElement.classList.toggle('br-flag', language === 'pt-br');
  flagElement.classList.toggle('us-flag', language === 'en');
}

// Função para alternar o idioma
function toggleLanguage() {
  var currentLanguage = document.documentElement.lang;
  var newLanguage = (currentLanguage === 'en') ? 'pt-br' : 'en';
  
  // Atualiza os textos com a tradução
  updateTexts(newLanguage);
  
  // Atualiza os placeholders com a tradução
  updatePlaceholders(newLanguage);
  
  // Atualiza a bandeira
  updateFlag(newLanguage);
  
  // Atualiza o atributo lang do documento HTML
  document.documentElement.lang = newLanguage;
}

// Define a bandeira e os textos iniciais
updateFlag('en');
updateTexts('en');
updatePlaceholders('en');

// Adiciona o manipulador de evento de mudança ao checkbox
document.getElementById('toggle-language').addEventListener('change', toggleLanguage);
