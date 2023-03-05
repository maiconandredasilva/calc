function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaEnter = () => {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear(); // não precisa do elemento
      if (el.classList.contains('btn-del')) this.del(); // não precisa do elemento
      if (el.classList.contains('btn-eq')) this.realizaConta(); // não precisa do elemento
    });
  };

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      // se não houver a conta...
      if(!conta) {
        alert('Conta inválida');
        return;
      }

      this.display.value = conta;
    } catch(e) {
      alert('Conta inválida');
      return;
    }
  };

  // adiciona número no display
  this.addNumDisplay = el => {
    this.display.value += el.innerText; // adiciona também o texto do elemento
    this.display.focus();
  };

  this.clear = () => this.display.value = ''; // limpando o display da calculadora
  this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora(); // criando um novo objeto
calculadora.inicia(); // tudo começa no método Inicia
