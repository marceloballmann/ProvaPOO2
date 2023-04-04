"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fornecedor_1 = require("./Fornecedor");
var Produto_1 = require("./Produto");
var Estoque_1 = require("./Estoque");
var fornecedor = new Fornecedor_1.Fornecedor(1, "fornecedor", "1231210/0001", "489999999", "Rua dois, Numero 3");
console.log("id= ", fornecedor.id);
console.log("razao social= ", fornecedor.nomeRazao);
console.log("cnpj= ", fornecedor.cnpj);
console.log("telefone= ", fornecedor.telefone);
console.log("endereco= ", fornecedor.endereco);
var produto = new Produto_1.Produto(1, "produto", fornecedor, 5);
console.log("id= ", produto.id);
console.log("descricao= ", produto.descricao);
console.log("fornecedor= ", produto.fornecedor);
console.log("preço= ", produto.preco);
var estoque = new Estoque_1.Estoque(1, produto, 3);
estoque.quantidade = -5;
console.log("quantidade= ", estoque.quantidade);
ValorDoProdutoEmEstoque(produto);
produto.preco = -20;
ValorDoProdutoEmEstoque(produto);
function ValorDoProdutoEmEstoque(produto) {
    console.log(estoque.produto.preco);
}
