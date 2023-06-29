const lista = document.getElementById('lista');
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao processar os dados');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(user => {
      const listaNE = document.createElement('li');
      listaNE.textContent = `${user.name} - ${user.email}`;
      lista.appendChild(listaNE);
    });
  })
  .catch(error => {
    console.log('Erro:', error.message);
  });