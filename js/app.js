const banderas = document.getElementById('banderas');

document.addEventListener('DOMContentLoaded', () =>{

    fetchData();

})


const fetchData = async () =>{

    try {

        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await res.json();
        
        pintarBanderas(data);
        search(data);
        filtros(data);

    } catch (e) {
        console.log(e);
    }

}

const pintarBanderas = data =>{

    let elementos = '';

    data.forEach(el => {
        
        elementos += `
            <div class="card">
            <img class="img-fluid card-img" loading="lazy" src="${el.flag}" alt="">
            <div class="card-body">
                <h3>${el.name}</h3>
                <p>
                    <b>Population:</b>
                    ${el.population}
                </p>
                <p>
                    <b>Region:</b>
                    ${el.region}
                </p>
                <p>
                    <b>Capital:</b>
                    ${el.capital}
                </p>
                <p>
                    <a href="pais.html?name=${el.name}">See more</a>
                </p>
            </div>
        </div>
        `

    });

    banderas.innerHTML = elementos;

}; 