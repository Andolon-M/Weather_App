<template>
    <div :class="headerClass">
        <div :class="headerContainerClass">
            <div :class="headerHeadClass">
                <p>{{ weather?.location?.name }}, {{ weather?.location?.region }} </p>
                <input type="text" placeholder="Search">
            </div>
            <div :class="headerBodyClass">
                <div>
                    <h1>{{ weather?.current?.temp_c }}°</h1>
                    <p>feels like {{ weather?.current?.feelslike_c }}°</p>
                </div>
                <div>
                    <img :src="weather?.current?.condition?.icon" alt="">
                </div>
            </div>
            <div :class="headerFooterClass">
                <p>{{ formattedDate }}</p>
                <h4>día {{ weather?.current?.temp_c }}° <br/> noche {{weather?.current?.temp_c}}°</h4>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';

// Definición de las propiedades
const props = defineProps({
    isScrolled: Boolean
});


// Crear un estado para almacenar los datos del clima
const weather = ref(null);
const formattedDate = ref('');

// Función para obtener los datos del clima
const fetchClima = async () => {   // Puedes hacer que esta ciudad sea dinámica
    const url = `https://${import.meta.env.VITE_API_BASE_URL}/current.json?key=${import.meta.env.VITE_API_KEY}&q=${import.meta.env.VITE_API_DEFAULT_CITY_NAME}&lang=${import.meta.env.VITE_API_LANGUAGE}`;
    console.log(url);

    // VITE_API_KEY =03c9fed6ba2042e9ba2124408242110
    // VITE_API_BASE_URL = http://api.weatherapi.com/v1
    // VITE_API_DEFAULT_CITY_NAME = Bucaramanga
    // VITE_API_LANGUAGE = es

    try {
        const response = await fetch(url);
        const data = await response.json();
        weather.value = data;  // Almacenar los datos en la variable weather
        console.log(weather.value);
        // Formatear la fecha
        formattedDate.value = formatDate(weather.value.location.localtime);
    } catch (error) {
        console.error('Error al obtener el clima:', error);
    }
};

const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Opciones para formatear el mes, día y hora
    const options = {
        month: 'long',  // Nombre completo del mes
        day: 'numeric', // Día del mes
        hour: '2-digit', // Hora
        minute: '2-digit', // Minutos
        hour12: false, // Mostrar en formato 24 horas
    };

    // Formatear la fecha
    return new Intl.DateTimeFormat('es-MX', options).format(date);
};

// Llamar a la función fetchClima cuando el componente se monta
onMounted(async () => {
    await fetchClima();
});



// Usar computed para determinar las clases del header
const headerClass = computed(() => {
    return props.isScrolled ? 'header scrolled' : 'header';
});
const headerContainerClass = computed(() => {
    return props.isScrolled ? 'header_container scrolled' : 'header_container';
});

// Clases para cada sección del header
const headerHeadClass = computed(() => {
    return props.isScrolled ? 'header-head scrolled' : 'header-head';
});

const headerBodyClass = computed(() => {
    return props.isScrolled ? 'header-body scrolled' : 'header-body';
});

const headerFooterClass = computed(() => {
    return props.isScrolled ? 'header-footer scrolled' : 'header-footer';
});


</script>

<style scoped>
.header {
    background: url('../../public/img/background.jpg') no-repeat;
    background-size: cover;
    background-position: bottom;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom-left-radius: 8%;
    border-bottom-right-radius: 8%;
    transition: all 0.6s ease-in-out !important;

}

.header.scrolled {
    background: none;
    transition: all 0.6s ease-in-out !important;
}

.header_container {
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.6s ease-in-out !important;
    width: 95%;
    top: 0%;
    transition: all 0.6s ease-in-out !important;
    justify-content: space-between;
    border-radius: 10%;
}

.header_container.scrolled {
    position: fixed;
    display: flex;
    width: 100%;
    height: 15%;
    top: 0%;
    color: var(--color-2) !important;
    transition: all 0s ease-in-out !important;
    justify-content: space-around;
    background: var(--card-1);
    padding-bottom: 1emm;
    border-radius: 0%;
}

.header-head {
    transition: all 0.6s ease-in-out !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 2.8vh;
}

.header-head p {
    font-size: 1.2em;
    color: var(--color-1);
    text-transform: capitalize;
    letter-spacing: 0.1em;
    font-weight: 500;
}

.header-head.scrolled p {
    color: var(--color-2);
}

.header-head input {
    width: 5vw;
    padding: 0.5em;
    border: none;
    background: transparent;
    outline: none;
    color: var(--color-2);
    font-size: 1em;
    transition: all 0.6s ease-in-out !important;
}

.header-head.scrolled {
    /* Estilos para el header head cuando está scrolled */

}

.header-body {
    transition: all 0.6s ease-in-out !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
}

.header-body.scrolled {
    justify-content: baseline;
}

.header-body :first-child {
    display: flex;
    transition: all 0.6s ease-in-out !important;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
}

.header-body :first-child h1 {
    font-size: 6em;
    color: var(--color-1);
    margin: 0;
    text-transform: capitalize;
    letter-spacing: 0em;
    font-weight: 500;
}

.header-body :first-child p {
    font-size: 1em;
    color: var(--color-1);
    margin-left: -30px;
    text-transform: capitalize;
    letter-spacing: 0.1em;
    font-weight: 500;
    text-wrap: nowrap;
}


.header-body.scrolled :first-child h1 {
    font-size: 4em;
    color: var(--color-2);
    margin: 0;
    text-transform: capitalize;
    letter-spacing: 0.1em;
    font-weight: 500;
}

.header-body.scrolled :first-child p {
    font-size: 1em;
    color: var(--color-2);
    margin-left: -30px;
    text-transform: capitalize;
    letter-spacing: 0.1em;
    font-weight: 500;
}


.header-body>:last-child {
    width: 40vw;
    height: 18vh;
    overflow: hidden;
}

.header-body.scrolled>:last-child {
    width: 20vw;
    height: 9vh;
    overflow: hidden;
}

.header-body>:last-child img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.header-body.scrolled {
    /* Estilos para el body del header cuando está scrolled */
    opacity: 0.7;
    /* Ejemplo: cambiar opacidad */
}

.header-footer {
    transition: all 0.6s ease-in-out !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    padding-bottom: 0.8em;
}

.header-footer p {
    color: var(--card-1);
    text-transform: capitalize;
}

.header-footer h4 {
    color: var(--card-1);
    text-transform: capitalize;
    width: 20vw;
    height: 5vh;
    text-wrap: wrap;
    text-align: right;
    font-weight: 600;
}

.header-footer.scrolled {
    /* Estilos para el footer del header cuando está scrolled */
    display: none;
    /* Ejemplo: cambiar peso de fuente */
}
</style>