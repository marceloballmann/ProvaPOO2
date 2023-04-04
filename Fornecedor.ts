export class Fornecedor {
    private _id: number
    private _nomeRazao: String
    private _cnpj: String
    private _telefone: String
    private _endereco: String

    constructor(_id: number, _nomeRazao: String, _cnpj: String, _telefone: String, _endereco: String) {
            this._id = _id;
            this._nomeRazao = _nomeRazao;
            this._cnpj = _cnpj;
            this._telefone = _telefone;
            this._endereco = _endereco;
    }

    get id():number { 
        return this._id;
    }
    get nomeRazao():String { 
        return this._nomeRazao;
    }
    get cnpj():String { 
        return this._cnpj;
    }
    get telefone():String { 
        return this._telefone;
    }
    get endereco():String { 
        return this._endereco;
    }
    set id(id:number) { 
        this._id = id;
    }
    set nomeRazao(nomeRazao:String) { 
        this._nomeRazao = nomeRazao;
    }
    set cnpj(cnpj:String) { 
        this._cnpj = cnpj;
    }
    set telefone(telefone:String) { 
        this._telefone = telefone;
    }
    set endereco(endereco:String) { 
        this._endereco = endereco;
    }

    


}