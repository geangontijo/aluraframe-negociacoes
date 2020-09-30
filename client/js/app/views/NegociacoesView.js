class NegociacoesView extends View {

    constructor(el) {
        super(el);
    }

    template(listaNegociacao) {
        return `<table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th id="ordena-data" class="ordena" onclick="negociacaoController.ordena('data')">DATA</th>
                <th id="ordena-quantidade" class="ordena" onclick="negociacaoController.ordena('quantidade')">QUANTIDADE</th>
                <th id="ordena-valor" class="ordena" onclick="negociacaoController.ordena('valor')">VALOR</th>
                <th id="ordena-volume" class="ordena" onclick="negociacaoController.ordena('volume')">VOLUME</th>
            </tr>
        </thead>

        <tbody>
            ${listaNegociacao !== undefined ?
                listaNegociacao.negociacoes.map(item => `
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
            <td>${listaNegociacao !== undefined ?
                listaNegociacao.negociacoes.reduce((total, current) => total += current.volume, 0)
                : 0
            }</td>
        </tfoot>
        </table>`;
    }
}