class MensagensView extends View {
  constructor(el) {
    super(el);
  }

  template(mensagem) {
    let resposta = (() => {
      if (mensagem) {
        if (typeof mensagem === typeof {}) {
          if (mensagem.texto) {
            return mensagem.texto;
          }
        }

        if (typeof mensagem === "string") {
          return mensagem;
        }
      }
    })();

    if (resposta !== undefined) {
      return `<div class="alert alert-info"><p>${resposta}</p></div>`;
    }
  }
}
