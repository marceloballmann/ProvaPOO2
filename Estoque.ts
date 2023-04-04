import { Produto } from "./Produto"

export class Estoque {
    private _id: number
    private _produto: Produto
    private _quantidade: number

    constructor(_id: number, _produto: Produto, _quantidade: number) {
        this._id = _id
        this._produto = _produto
        this._quantidade = _quantidade
    }

    get id() {
        return this._id
    }
    get produto() {
        return this._produto
    }
    get quantidade() {
        return this._quantidade
    }
    set quantidade(valor: number) {
        if (valor < 0) {
            valor = 0
        }
        this._quantidade = valor
    }
    set id(valor: number) {
        this._id = valor
    }
    set produto(valor: Produto) {
        this._produto
    }

}