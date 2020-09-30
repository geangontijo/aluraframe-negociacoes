class NegociacaoController {
  constructor() {
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._negociacaoView = new NegociacoesView($("#negociacoesView"));
    $("#negociacoesView").innerHTML = this._negociacaoView.template();

    this._listaNegociacoes = new Bind(
      new ListaNegociacoes(),
      this._negociacaoView,
      "adiciona",
      "limpar",
      "ordena"
    );

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagensView($("#mensagem")),
      "texto"
    );

    this._loading = new Bind(
      new Loading(),
      new LoadingView($('#loading')),
      "status",
      "_status"
    )
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
    this._loading.status = true;
    Promise.all([
      NegociacoesService.obterNegociacoesDaSemana(),
      NegociacoesService.obterNegociacoesDaSemanaAnterior(),
      NegociacoesService.obterNegociacoesDaSemanaRetrasada()
    ])
      .then(response => {
        response
          .reduce((arrayAchatado, item) => arrayAchatado.concat(item), [])
          .forEach(
            item => this._listaNegociacoes.adiciona(item)
          )
        this._mensagem.texto = 'Negociações importadas com sucesso!'
        this._loading.status = false;
      })
      .catch(err => console.log(err));
  }

  ordena(coluna) {
    this._listaNegociacoes.ordena(coluna);

    let icon = document.createElement('i');
    icon.classList.add('fas');
    icon.classList.add('fa-arrow-down');
    icon.style.marginLeft = '5px';
    $(`#ordena-${coluna}`).append(icon);
  }

  _criaNegociacao(data, quantidade, valor) {
    return new Negociacao(data, quantidade, valor);
  }

  _limpaFormulario(event) {
    event.target.reset();
    this._inputData.focus();
  }
}
