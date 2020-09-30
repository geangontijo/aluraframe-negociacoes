class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._negociacaoView = new NegociacoesView($("#negociacoesView"));
    $("#negociacoesView").innerHTML = this._negociacaoView.template();

    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      this._negociacaoView,
      "adiciona",
      "limpar"
    );

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagensView($("#mensagem")),
      "texto"
    );
  }

  adiciona(event) {
    event.preventDefault();

    const data = DateHelper.criaData(this._inputData.value);

    let negociacao = this._criaNegociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    );

    this._listaNegociacoes.adiciona(negociacao);
    this._mensagem.texto = "Negociacao adicionada com sucesso!";
    this._limpaFormulario(event);
  }

  limpa() {
    this._listaNegociacoes.limpar();
  }

  importaNegociacoes() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "negociacoes/semana");

    xhr.onreadystatechange = () => {

        xhr.readyState === 4
    };

    xhr.send();
  }

  _criaNegociacao(data, quantidade, valor) {
    return new Negociacao(data, quantidade, valor);
  }

  _limpaFormulario(event) {
    event.target.reset();
    this._inputData.focus();
  }
}
