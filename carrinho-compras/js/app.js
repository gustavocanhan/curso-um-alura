function adicionar() {
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;

  if (quantidade == 0) {
    quantidade = 1;
  }

  let preco = quantidade * valorUnitario;

  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML = `
  <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${preco}</span>
        </section>
  `;
}

function limpar() {}
