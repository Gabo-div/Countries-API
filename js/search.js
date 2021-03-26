const formulario = document.getElementById('formulario');
const inputBuscar= document.getElementById('inputBuscar');

const search = data =>{

    formulario.addEventListener('keyup', e =>{

        const letraCliente = inputBuscar.value.toLowerCase();
        
        const filtrar = data.filter(item => {

            const letraApi = item.name.toLowerCase();
            if(letraApi.indexOf(letraCliente) !== -1){
                return item;
            }

        });

        pintarBanderas(filtrar);

    });

    formulario.addEventListener('submit', e => {

        e.preventDefault();

        const letraCliente = inputBuscar.value.toLowerCase();
        
        const filtrar = data.filter(item => {

            const letraApi = item.name.toLowerCase();
            if(letraApi.indexOf(letraCliente) !== -1){
                return item;
            }

        });

        pintarBanderas(filtrar);
    });

};

