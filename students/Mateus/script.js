const lista = document.getElementById('lista'); //variavel com a lista que esta ligada com a ul do html
fetch('https://jsonplaceholder.typicode.com/users')//captura os dados desse caminho
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao processar os dados');//Tratamento de erro para caso o status de response for diferente de ok
    }
    return response.json();//retorna o json com os dados
  })
  .then(data => {
    data.forEach(user => {
      const listaNE = document.createElement('li');//variavel para criar uma <li> dentro da <ul> no html com os dados inseridos
      listaNE.textContent = `${user.name} - ${user.email}`;//variavel com o nome e email de cada usuário
      lista.appendChild(listaNE);//add os elementos individuais(listaNE) dentro da lista maior(lista) para ser enviada
    });
  })
  .catch(error => {
    console.log('Erro:', error.message);//Printar no console que ocorrreu um erro
  });