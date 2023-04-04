import { Fornecedor } from "./Fornecedor";
import { Produto } from "./Produto";
import { Estoque } from "./Estoque";

let fornecedor = new Fornecedor(1, "fornecedor", "1231210/0001", "489999999", "Rua dois, Numero 3");
console.log("id= ", fornecedor.id);
console.log("razao social= ", fornecedor.nomeRazao);
console.log("cnpj= ", fornecedor.cnpj);
console.log("telefone= ", fornecedor.telefone);
console.log("endereco= ", fornecedor.endereco);

let produto = new Produto(1, "produto", fornecedor, 5);
console.log("id= ", produto.id);
console.log("descricao= ", produto.descricao);
console.log("fornecedor= ", produto.fornecedor);
console.log("preço= ", produto.preco);

let estoque = new Estoque(1, produto, 3);

estoque.quantidade = -5
console.log("quantidade= ", estoque.quantidade);

ValorDoProdutoEmEstoque(produto)

produto.preco = -20

ValorDoProdutoEmEstoque(produto)


function ValorDoProdutoEmEstoque(produto: Produto) {
    console.log(estoque.produto.preco)
}


