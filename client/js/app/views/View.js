class View {

    constructor(el) {

        this._el = el;
    }

    template() {
        throw new Error('Esse metodo deve ter uma implementação');
    }

    update(model) {

        this._el.innerHTML = this.template(model);
    }
}