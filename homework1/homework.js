const url = "https://swapi.dev/api/people/1"

document.getElementById('btn').addEventListener('click', function () {
    fetch(url)
        .then((data) =>
            data.json()
                .then(parsedData => {
                    document.getElementById('StarWars').innerHTML = parsedData.name
                    console.log(parsedData);
                    document.getElementById('tabela').innerHTML = ''
                    console.log(parsedData);
                    for (let item of parsedData.name) {
                        document.getElementById('tabela').innerHTML += ` ${item}`;

                    } for (let item of parsedData.mass) {
                        document.getElementById('tabela').innerHTML += `<td>${item}</td>`;
                    }
                    for (let hair of parsedData.hair_color) {
                        document.getElementById('tabela').innerHTML += `${hair}`;
                    }
                    for (let skin of parsedData.skin_color) {
                        document.getElementById('tabela').innerHTML += `<td>${skin}</td>`;
                    }
                    for ( let visina of parsedData.height){
                        document.getElementById(`tabela`).innerHTML +=`<td>${visina}</td>`;
                    }

                }
                )
        )
        .catch((e) => {
            console.error(e);
        });
})