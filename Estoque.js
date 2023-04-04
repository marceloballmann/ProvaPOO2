"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estoque = void 0;
var Estoque = /** @class */ (function () {
    function Estoque(_id, _produto, _quantidade) {
        this._id = _id;
        this._produto = _produto;
        this._quantidade = _quantidade;
    }
    Object.defineProperty(Estoque.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (valor) {
            this._id = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Estoque.prototype, "produto", {
        get: function () {
            return this._produto;
        },
        set: function (valor) {
            this._produto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Estoque.prototype, "quantidade", {
        get: function () {
            return this._quantidade;
        },
        set: function (valor) {
            if (valor < 0) {
                valor = 0;
            }
            this._quantidade = valor;
        },
        enumerable: false,
        configurable: true
    });
    return Estoque;
}());
exports.Estoque = Estoque;
