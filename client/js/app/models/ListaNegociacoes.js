class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    limpar() {

        this._negociacoes = [];
    }

    ordena(coluna) {
        this._negociacoes.sort((a, b) => b[coluna] - a[coluna]);
    }
}