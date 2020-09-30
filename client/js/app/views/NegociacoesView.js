class NegociacoesView extends View {

    constructor(el) {
        super(el);
    }

    template(listaNegociacao) {
        return `<table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
            ${listaNegociacao !== undefined ?
                listaNegociacao.negociacoes.map(item =>`
                <tr>
                    <td>${DateHelper.formataData(item.data)}</td>
                    <td>${item.quantidade}</td>
                    <td>${item.valor}</td>
                    <td>${item.volume}</td>
                </tr>`
                ).join('') : ''}
        </tbody>
        <tfoot>
            <td colspan="3"></td>
            <td>${
                listaNegociacao !== undefined ?
                        listaNegociacao.negociacoes.reduce((total, current) => total += current.volume ,0)
                        : 0
            }</td>
        </tfoot>
        </table>`;
    }
}