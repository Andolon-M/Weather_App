<template>
    <div class="w-full flex flex-col items-center">
        <div class="flex flex-col items-center justify-center w-[93%] h-[721px] gap-2 mb-2">


            <div className="grid grid-cols-6 grid-rows-12 gap-3 w-full h-full">
                <div className="border rounded-2xl bg-card-2 col-span-3 row-span-2 px-4 py-1 flex flex-col items-end">
                    <div class="flex flex-row justify-start items-center gap-3 w-full h-full ">
                        <div
                            class="w-9 h-9 bg-color-1 rounded-full flex justify-center items-center p-[2px] overflow-hidden">
                            <img src="../../public/img/air.svg" alt="" class="w-full h-full object-contain">
                        </div>
                        <div>
                            <p class="text-[0.8em] font-semibold text-nowrap capitalize">Wind Speed</p>
                            <p class="text-[0.9em] font-semibold m-0 capitalize">30 mph</p>
                        </div>

                    </div>
                    <div class="flex flex-row -mt-2 justify-center items-center gap-1">
                        <img src="../../public/img/arrow_drop_down.svg" alt="">
                        <p class="text-[0.7em] font-semibold text-nowrap capitalize">30 km/h</p>
                    </div>
                </div>
                <div className="border rounded-2xl bg-card-2 col-span-3 row-span-2 col-start-4 px-4 py-1 flex flex-col items-end">
                    <div class="flex flex-row justify-start items-center gap-3 w-full h-full ">
                        <div
                            class="w-9 h-9 bg-color-1 rounded-full flex justify-center items-center p-[2px] overflow-hidden">
                            <img src="../../public/img/air.svg" alt="" class="w-full h-full object-contain">
                        </div>
                        <div>
                            <p class="text-[0.8em] font-semibold text-nowrap capitalize">Rain Chance</p>
                            <p class="text-[0.9em] font-semibold m-0 capitalize">30 mph</p>
                        </div>

                    </div>
                    <div class="flex flex-row -mt-2 justify-center items-center gap-1">
                        <img src="../../public/img/arrow_drop_down.svg" alt="">
                        <p class="text-[0.7em] font-semibold text-nowrap capitalize">30 km/h</p>
                    </div>
                </div>
                <div className="border rounded-2xl bg-card-2 col-span-3 row-span-2 row-start-3 px-4 py-1 flex flex-col items-end">
                    <div class="flex flex-row justify-start items-center gap-3 w-full h-full ">
                        <div
                            class="w-9 h-9 bg-color-1 rounded-full flex justify-center items-center p-[2px] overflow-hidden">
                            <img src="../../public/img/air.svg" alt="" class="w-full h-full object-contain">
                        </div>
                        <div>
                            <p class="text-[0.8em] font-semibold text-nowrap capitalize">Pressure</p>
                            <p class="text-[0.9em] font-semibold m-0 capitalize">30 mph</p>
                        </div>

                    </div>
                    <div class="flex flex-row -mt-2 justify-center items-center gap-1">
                        <img src="../../public/img/arrow_drop_down.svg" alt="">
                        <p class="text-[0.7em] font-semibold text-nowrap capitalize">30 km/h</p>
                    </div>
                </div>
                <div className="border rounded-2xl bg-card-2 col-span-3 row-span-2 col-start-4 row-start-3 px-4 py-1 flex flex-col items-end">
                    <div class="flex flex-row justify-start items-center gap-3 w-full h-full ">
                        <div
                            class="w-9 h-9 bg-color-1 rounded-full flex justify-center items-center p-[2px] overflow-hidden">
                            <img src="../../public/img/air.svg" alt="" class="w-full h-full object-contain">
                        </div>
                        <div>
                            <p class="text-[0.8em] font-semibold text-nowrap capitalize">UV Index</p>
                            <p class="text-[0.9em] font-semibold m-0 capitalize">30 mph</p>
                        </div>

                    </div>
                    <div class="flex flex-row -mt-2 justify-center items-center gap-1">
                        <img src="../../public/img/arrow_drop_down.svg" alt="">
                        <p class="text-[0.7em] font-semibold text-nowrap capitalize">30 km/h</p>
                    </div>
                </div>
                <div className="border rounded-2xl bg-card-2 col-span-6 row-span-4 row-start-5">5</div>
                <div className="border rounded-2xl bg-card-2 col-span-6 row-span-4 row-start-9">6</div>
            </div>

            <div class="grid grid-cols-6 grid-rows-6 gap-3 w-full h-[46%]">
                <div class="border rounded-2xl bg-card-2 col-span-6 row-span-4">1</div>
                <div class="border rounded-2xl bg-card-2 col-span-3 row-span-2 row-start-5">2</div>
                <div class="border rounded-2xl bg-card-2 col-span-3 row-span-2 col-start-4 row-start-5">3</div>
            </div>

        </div>
    </div>


</template>

<script setup>
import {onMounted, ref } from 'vue';
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
</script>

<style scoped></style>
