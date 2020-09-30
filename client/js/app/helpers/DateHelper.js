class DateHelper {

    constructor() {
        throw new Error('Essa classe não pode ser instanciada');
    }

    static criaData(string) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(string))
            throw new Error('Deve estar no padrão aaaa-mm-dd');

        return new Date(
            ...string.split('-')
            .map((item, indice) => indice === 1 ? item - 1 : item)
        );
    }

    static formataData(data) {
        var data = new Date(data),
            dia = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0' + dia : dia,
            mes = (data.getMonth() + 1).toString(),
            mesF = (mes.length == 1) ? '0' + mes : mes,
            anoF = data.getFullYear();
        return diaF + "/" + mesF + "/" + anoF;
    }
}