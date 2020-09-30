var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor'),
];

console.log(campos);

const tbody = document.querySelector('tbody');

document.querySelector('.form').addEventListener('submit', e => {
    const volume = document.createElement('input');
    volume.value = campos[1].value * campos[2].value;
    campos.push(volume);

    e.preventDefault();
    let tr = document.createElement('tr');

    campos.forEach(element => {

        td = document.createElement('td');
        td.textContent = element.value;
        tr.appendChild(td);

    });
    tbody.appendChild(tr);
    e.target.reset();
});