"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(_id, _descricao, _fornecedor, _preco) {
        this._id = _id;
        this._descricao = _descricao;
        this._fornecedor = _fornecedor;
        this._preco = _preco;
    }
    Object.defineProperty(Produto.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "descricao", {
        get: function () {
            return this._descricao;
        },
        set: function (descricao) {
            this._descricao = descricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "fornecedor", {
        get: function () {
            return this._fornecedor;
        },
        set: function (fornecedor) {
            this._fornecedor = fornecedor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (preco) {
            if (preco < 0) {
                preco = 0;
            }
            this._preco = preco;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
exports.Produto = Produto;
