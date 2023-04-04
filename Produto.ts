import { Fornecedor } from "./Fornecedor"

export class Produto {
    private _id: number
    private _descricao: string
    protected _fornecedor: Fornecedor
    private _preco: number

    constructor(_id: number, _descricao: string, _fornecedor: Fornecedor, _preco: number) {
        this._id = _id
        this._descricao = _descricao
        this._fornecedor = _fornecedor
        this._preco = _preco
    }

    get id():number {
        return this._id
    }

    get descricao():string {
        return this._descricao
    }

    get fornecedor():Fornecedor {
        return this._fornecedor
    }

    get preco():number {
        return this._preco
    }

    set preco(preco: number) {
        if (preco < 0) {
            preco = 0
        }
        this._preco = preco
    }

    set descricao(descricao: string) {
        this._descricao = descricao
    }

    set fornecedor(fornecedor: Fornecedor) {
        this._fornecedor = fornecedor
    }

    set id(id: number) {
        this._id = id
    }
}