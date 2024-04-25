document.addEventListener("DOMContentLoaded", () =>{
    getEstados();
})

async function getEstados(){
    const ul = document.querySelector('#estadosUl');

    data = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    dataJson = await data.json();

    estadosArray = dataJson.map(estado => estado.nome);

    estadosArray.forEach(estado => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = `./municipios/index.html?uf=${estado}`;
        link.innerHTML = estado;
        li.appendChild(link);
        ul.appendChild(li);
    });
}

