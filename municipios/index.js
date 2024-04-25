function fetchMunicipios(estado) {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
        .then(response => response.json())
        .then(data => {
            const municipiosElement = document.createElement('ul');
            municipiosElement.classList.add('municipios-lista');

            data.forEach(municipio => {
                const liElement = document.createElement('li');
                liElement.textContent = municipio.nome;

                municipiosElement.appendChild(liElement);
            });

            const mainElement = document.querySelector('main');
            mainElement.innerHTML = '';
            mainElement.appendChild(municipiosElement);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

window.addEventListener('popstate', (event) => {
    if (event.state && event.state.estado) {
        fetchMunicipios(event.state.estado);
    }
});