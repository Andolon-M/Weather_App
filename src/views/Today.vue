<template>
    <div class="w-full flex flex-col items-center">
        <div class="flex flex-col items-center justify-center w-[93%] h-[721px] gap-2 mb-2">
            <div className="grid grid-cols-6 grid-rows-12 gap-3 w-full h-full">
                <div className="border rounded-2xl bg-card-2 col-span-3 row-span-2 px-4 py-1 flex flex-col items-end">
                    <div class="flex flex-row justify-start items-center gap-3 w-full h-full ">
                        <div
                            class="w-9 h-9 bg-color-1 rounded-full flex justify-center items-center p-[1px] overflow-hidden">
                            <img src="../../public/img/air.svg" alt="" class="w-full h-full object-contain">
                        </div>
                        <div>
                            <p class="text-[0.8em] font-semibold text-nowrap capitalize">Wind Speed</p>
                            <p class="text-[0.9em] font-semibold m-0 capitalize">{{ weather?.current?.wind_kph }} km/h
                            </p>
                        </div>

                    </div>
                    <div class="flex flex-row -mt-2 justify-center items-center gap-1">
                        <img src="../../public/img/arrow_drop_down.svg" alt="">
                        <p class="text-[0.7em] font-semibold text-nowrap capitalize">{{ weather?.current?.wind_kph }}
                            km/h
                        </p>
                    </div>
                </div>
                <div
                    className="border rounded-2xl bg-card-2 col-span-3 row-span-2 col-start-4 px-4 py-1 flex flex-col items-end">
                    <div class="flex flex-row justify-start items-center gap-3 w-full h-full ">
                        <div
                            class="w-9 h-9 bg-color-1 rounded-full flex justify-center items-center p-[6px] overflow-hidden">
                            <img src="../../public/img/rainy.svg" alt="" class="w-full h-full object-contain">
                        </div>
                        <div>
                            <p class="text-[0.8em] font-semibold text-nowrap capitalize">Rain Chance</p>
                            <p class="text-[0.9em] font-semibold m-0 capitalize">{{ weather?.current?.precip_in }}%</p>
                        </div>

                    </div>
                    <div class="flex flex-row -mt-2 justify-center items-center gap-1">
                        <img src="../../public/img/arrow_drop_up.svg" alt="">
                        <p class="text-[0.7em] font-semibold text-nowrap capitalize">10%</p>
                    </div>
                </div>
                <div
                    className="border rounded-2xl bg-card-2 col-span-3 row-span-2 row-start-3 px-4 py-1 flex flex-col items-end">
                    <div class="flex flex-row justify-start items-center gap-3 w-full h-full ">
                        <div
                            class="w-9 h-9 bg-color-1 rounded-full flex justify-center items-center p-[7px] overflow-hidden">
                            <img src="../../public/img/waves.svg" alt="" class="w-full h-full object-contain">
                        </div>
                        <div>
                            <p class="text-[0.8em] font-semibold text-nowrap capitalize">Pressure</p>
                            <p class="text-[0.9em] font-semibold m-0 ">{{ weather?.current?.pressure_mb }} hpa</p>
                        </div>

                    </div>
                    <div class="flex flex-row -mt-2 justify-center items-center gap-1">
                        <img src="../../public/img/arrow_drop_up.svg" alt="">
                        <p class="text-[0.7em] font-semibold text-nowrap ">{{ weather?.current?.pressure_in }} hpa</p>
                    </div>
                </div>
                <div
                    className="border rounded-2xl bg-card-2 col-span-3 row-span-2 col-start-4 row-start-3 px-4 py-1 flex flex-col items-end">
                    <div class="flex flex-row justify-start items-center gap-3 w-full h-full ">
                        <div
                            class="w-9 h-9 bg-color-1 rounded-full flex justify-center items-center p-[7px] overflow-hidden">
                            <img src="../../public/img/light_mode.svg" alt="" class="w-full h-full object-contain">
                        </div>
                        <div>
                            <p class="text-[0.8em] font-semibold text-nowrap capitalize">UV Index</p>
                            <p class="text-[0.9em] font-semibold m-0 capitalize">{{ weather?.current?.uv }}%</p>
                        </div>

                    </div>
                    <div class="flex flex-row -mt-2 justify-center items-center gap-1">
                        <img src="../../public/img/arrow_drop_down.svg" alt="">
                        <p class="text-[0.7em] font-semibold text-nowrap capitalize">0%</p>
                    </div>
                </div>
                <div className="border rounded-2xl bg-card-2 col-span-6 row-span-4 row-start-5">5</div>
                <div className="border rounded-2xl bg-card-2 col-span-6 row-span-4 row-start-9">6</div>
            </div>

            <div class="grid grid-cols-6 grid-rows-6 gap-3 w-full h-[46%]">
                <div class="border rounded-2xl bg-card-2 col-span-6 row-span-4">1</div>
                <div
                    class="border rounded-2xl bg-card-2 col-span-3 row-span-2 row-start-5 px-4 py-1 flex flex-col items-end">
                    <div class="flex flex-row justify-start items-center gap-3 w-full h-full ">
                        <div
                            class="w-9 h-9 bg-color-1 rounded-full flex justify-center items-center p-[6px] overflow-hidden">
                            <img src="../../public/img/rainy.svg" alt="" class="w-full h-full object-contain">
                        </div>
                        <div>
                            <p class="text-[0.8em] font-semibold text-nowrap capitalize">Sunrise</p>
                            <p class="text-[0.9em] font-semibold m-0 capitalize">{{ weatherToday?.forecast?.forecastday[0]?.astro?.sunrise }}</p>
                        </div>

                    </div>
                    <div class="flex flex-row -mt-2 justify-center items-center gap-1">
                        <p class="text-[0.7em] font-semibold text-nowrap ">4h ago</p>
                    </div>
                </div>
                <div
                    class="border rounded-2xl bg-card-2 col-span-3 row-span-2 col-start-4 row-start-5 px-4 py-1 flex flex-col items-end">
                    <div class="flex flex-row justify-start items-center gap-3 w-full h-full ">
                        <div
                            class="w-9 h-9 bg-color-1 rounded-full flex justify-center items-center p-[6px] overflow-hidden">
                            <img src="../../public/img/rainy.svg" alt="" class="w-full h-full object-contain">
                        </div>
                        <div>
                            <p class="text-[0.8em] font-semibold text-nowrap capitalize">Sunset</p>
                            <p class="text-[0.9em] font-semibold m-0 capitalize">{{ weatherToday?.forecast?.forecastday[0]?.astro?.sunset }}</p>
                        </div>

                    </div>
                    <div class="flex flex-row -mt-2 justify-center items-center gap-1">
                        <p class="text-[0.7em] font-semibold text-nowrap ">in  9h</p>
                    </div>
                </div>
            </div>

        </div>
    </div>


</template>

<script setup>
import { onMounted, ref } from 'vue';
// Crear un estado para almacenar los datos del clima
const weather = ref(null);
const weatherToday = ref(null);
const formattedDate = ref('');

// Función para obtener los datos del clima
const fetchClima = async () => {   // Puedes hacer que esta ciudad sea dinámica
    const url = `https://${import.meta.env.VITE_API_BASE_URL}/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${import.meta.env.VITE_API_DEFAULT_CITY_NAME}&lang=${import.meta.env.VITE_API_LANGUAGE}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        weather.value = data;  

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

const fetchClimaEspesifico = async (date) => {
    const url = `https://${import.meta.env.VITE_API_BASE_URL}/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${import.meta.env.VITE_API_DEFAULT_CITY_NAME}&lang=${import.meta.env.VITE_API_LANGUAGE}&dt=${{ date }}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        weatherToday.value = data;  
        console.log(weatherToday.value);
        
    } catch (error) {
        console.error('Error al obtener el clima:', error);
    }
}

// Llamar a la función fetchClima cuando el componente se monta
onMounted(async () => {
    await fetchClima();

    const fecha = new Date();

    // Obtener los componentes de la fecha
    const year = fecha.getFullYear();  // Obtiene el año
    const month = String(fecha.getMonth() + 1).padStart(2, '0');  // Obtiene el mes (0-11) y le sumamos 1 para que sea de 1-12
    const day = String(fecha.getDate()).padStart(2, '0');  // Obtiene el día del mes

    // Formato final: año-mes-día
    const fechaFormateada = `${year}-${month}-${day}`;

    // Llamar a la función fetchClimaEspesifico con la fecha
    await fetchClimaEspesifico(fechaFormateada);
});
</script>

<style scoped></style>
