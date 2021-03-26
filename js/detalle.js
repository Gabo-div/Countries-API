const banderas = document.getElementById('banderas');
const query = new URLSearchParams(window.location.search);
const params = query.get('name');

document.addEventListener('DOMContentLoaded', () => {

    fetchData();

})

const fetchData = async () => {

    try {

        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await res.json();

        filtroData = data.filter(item => item.name === params);
        console.log(filtroData)

        pintarBanderas(filtroData);

    } catch (e) {
        console.log(e);
    }

}

const pintarBanderas = data => {

    let elementos = '';

    data.forEach(el => {

        elementos += `
            <div class="details">
            <img class="img-details" loading="lazy" src="${el.flag}" alt="">
            <div class="details-content">
                <h3>${el.name}</h3>
                <div class="col">
                    <p>
                        <b>Native Name:</b>
                        ${el.nativeName}
                    </p>
                    <p>
                        <b>Population:</b>
                        ${el.population}
                    </p>
                    <p>
                        <b>Region:</b>
                        ${el.region}
                    </p>
                    <p>
                        <b>Sub Region:</b>
                        ${el.subregion}
                    </p>
                    <p>
                        <b>Capital:</b>
                        ${el.capital}
                    </p>
                </div>

                <div class="col">
                    <p>
                        <b>Top Level Domain:</b>
                        ${el.topLevelDomain}
                    </p>
                    <p>
                        <b>Currencies:</b>
                        ${el.currencies[0].code}
                        ${el.currencies[1] ?el.currencies[1].code : ''}
                    </p>
                    <p>
                        <b>Languages:</b>
                        ${el.languages[0] ? el.languages[0].name : ''}
                        ${el.languages[1] ? el.languages[1].name : ''}
                        ${el.languages[2] ? el.languages[2].name : ''}
                        ${el.languages[3] ? el.languages[3].name : ''}
                    </p>
                    
                </div>

            </div>
        </div>
        `

    });

    banderas.innerHTML = elementos;

};