// Seleciona todos os elementos com a classe 'item' (os itens do carrossel)
let list = document.querySelectorAll('.item');

// Seleciona o botão de navegação 'próximo' pelo ID
let next = document.getElementById('next');

// Seleciona o botão de navegação 'anterior' pelo ID
let prev = document.getElementById('prev');

// Conta o número total de itens no carrossel
let count = list.length;

// Define qual item está ativo atualmente (começa no primeiro)
let active = 0;

// Adiciona um evento de clique ao botão 'próximo'
next.onclick = () => {
  // Seleciona o elemento que atualmente tem a classe 'active'
  let activeOld = document.querySelector('.active');
  // Remove a classe 'active' do item atual
  activeOld.classList.remove('active');

  // Calcula o índice do próximo item no carrossel
  // Se o índice ativo for o último, volta para o primeiro (ciclo)
  active = active >= count - 1 ? 0 : active + 1;

  // Adiciona a classe 'active' ao próximo item
  list[active].classList.add('active');
};

// Adiciona um evento de clique ao botão 'anterior'
prev.onclick = () => {
  // Seleciona o elemento que atualmente tem a classe 'active'
  let activeOld = document.querySelector('.active');
  // Remove a classe 'active' do item atual
  activeOld.classList.remove('active');

  // Calcula o índice do item anterior no carrossel
  // Se o índice ativo for o primeiro, vai para o último (ciclo)
  active = active <= 0 ? count - 1 : active - 1;

  // Adiciona a classe 'active' ao item anterior
  list[active].classList.add('active');
};
