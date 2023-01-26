let butt= document.getElementById("butt");
document.getElementById("tabela").style.visibility = "hidden";

butt.addEventListener("click", ()=> {
    fetch("https://swapi.dev/api/planets/1/").then((data) => {
        data.json().then((parsedData) => {
            console.log(parsedData);
            document.getElementById("tabela").style.visibility = "visible";

            let red = document.createElement("tr");
            let line1 = document.createElement("td");
            let line2 = document.createElement("td");
            let line3 = document.createElement("td");
            let line4 = document.createElement("td");

            line1.innerHTML += `<td> ${parsedData.name}</td>`;
            line2.innerHTML += `<td> ${parsedData.population}</td>`;
            line3.innerHTML += `<td> ${parsedData.climate}</td>`;
            line4.innerHTML += `<td> ${parsedData.gravity[0]}</td>`;
            


            red.appendChild(line1);
            red.appendChild(line2);
            red.appendChild(line3);
            red.appendChild(line4);
            tabela.appendChild(red);
        });
    });
});