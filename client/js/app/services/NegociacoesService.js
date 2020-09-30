class NegociacoesService {

    static obterNegociacoesDaSemana() {
        return new Promise((resolve, rejects) => {

            let xhr = new XMLHttpRequest();
            xhr.open("GET", "negociacoes/semana");
            try {
                xhr.onreadystatechange = () => {

                    if (xhr.readyState === 4) {

                        if (xhr.status !== 404) {

                            resolve(JSON.parse(xhr.responseText)
                                .map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor)));

                        } else {
                            console.log(xhr.responseText);
                            rejects('Erro ao importar negociacoes');
                        }
                    }
                };
                xhr.send();
            } catch (error) {

                rejects(error);
            }
        });
    }
    static obterNegociacoesDaSemanaAnterior() {
        return new Promise((resolve, rejects) => {

            let xhr = new XMLHttpRequest();
            xhr.open("GET", "negociacoes/anterior");
            try {
                xhr.onreadystatechange = () => {

                    if (xhr.readyState === 4) {

                        if (xhr.status !== 404) {

                            resolve(JSON.parse(xhr.responseText)
                                .map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor)));

                        } else {
                            console.log(xhr.responseText);
                            rejects('Erro ao importar negociacoes');
                        }
                    }
                };
                xhr.send();
            } catch (error) {

                rejects(error);
            }
        });
    }
    static obterNegociacoesDaSemanaRetrasada() {
        return new Promise((resolve, rejects) => {

            let xhr = new XMLHttpRequest();
            xhr.open("GET", "negociacoes/retrasada");
            try {
                xhr.onreadystatechange = () => {

                    if (xhr.readyState === 4) {

                        if (xhr.status !== 404) {

                            resolve(JSON.parse(xhr.responseText)
                                .map(item => new Negociacao(new Date(item.data), item.quantidade, item.valor)));

                        } else {
                            console.log(xhr.responseText);
                            rejects('Erro ao importar negociacoes');
                        }
                    }
                };
                xhr.send();
            } catch (error) {

                rejects(error);
            }
        });
    }
}