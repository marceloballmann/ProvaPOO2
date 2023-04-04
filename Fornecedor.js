"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fornecedor = void 0;
var Fornecedor = /** @class */ (function () {
    function Fornecedor(_id, _nomeRazao, _cnpj, _telefone, _endereco) {
        this._id = _id;
        this._nomeRazao = _nomeRazao;
        this._cnpj = _cnpj;
        this._telefone = _telefone;
        this._endereco = _endereco;
    }
    Object.defineProperty(Fornecedor.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fornecedor.prototype, "nomeRazao", {
        get: function () {
            return this._nomeRazao;
        },
        set: function (nomeRazao) {
            this._nomeRazao = nomeRazao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fornecedor.prototype, "cnpj", {
        get: function () {
            return this._cnpj;
        },
        set: function (cnpj) {
            this._cnpj = cnpj;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fornecedor.prototype, "telefone", {
        get: function () {
            return this._telefone;
        },
        set: function (telefone) {
            this._telefone = telefone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fornecedor.prototype, "endereco", {
        get: function () {
            return this._endereco;
        },
        set: function (endereco) {
            this._endereco = endereco;
        },
        enumerable: false,
        configurable: true
    });
    return Fornecedor;
}());
exports.Fornecedor = Fornecedor;
