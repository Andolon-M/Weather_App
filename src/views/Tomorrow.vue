<template>
    <div class="w-full flex flex-col items-center">
        <div class="flex flex-col items-center justify-center w-[93%] h-[821px] gap-3 mb-2">
            <div className="grid grid-cols-6 grid-rows-12 gap-3 w-full h-[69%]">
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
                <div
                    className="border rounded-2xl bg-card-2 col-span-6 row-span-4 row-start-5 px-4 py-2 flex flex-col items-end">
                    <div class="flex justify-start items-center w-full mb-2 gap-2">
                        <div
                            class="w-9 h-9 bg-color-1 rounded-full flex justify-center items-center p-[6px] overflow-hidden">
                            <img src="../../public/img/history_toggle_off.svg" alt="" class="w-full h-full object-contain">
                        </div>
                        <p class="font-semibold">Chance of rain</p>
                    </div>
                    <div class="flex flex-row justify-center items-center h-full w-full">
                        <!-- Mostrar las próximas 5 horas a partir de la hora actual -->
                        <div v-if="nextFiveHours.length > 0" class="flex flex-row w-full justify-between h-full">
                            <div v-for="(hour, index) in nextFiveHours" :key="index"
                                class="flex flex-col items-center justify-center ">
                                <!-- Mostrar 'now' si la hora coincide con la actual -->
                                <p v-if="isCurrentHour(hour.time)" class="text-sm">Now</p>
                                <p v-else class="text-sm">{{ formatTime(hour.time) }}</p>
                                <!-- Mostrar el icono del clima -->
                                <img :src="`https:${hour.condition.icon}`" :alt="hour.condition.text" class="w-10" />
                                <!-- Mostrar la temperatura -->
                                <p class="font-semibold text-sm">{{ hour.temp_c }}°C</p>

                            </div>
                        </div>
                        <p v-else>No hay datos disponibles</p>
                    </div>
                </div>
                <div
                    className="border rounded-2xl bg-card-2 col-span-6 row-span-4 row-start-9 px-4 py-2 flex flex-col items-end overflow-hidden">
                    <img src="../../public/img/Group%2068.svg" alt="" class="h-full w-full object-contain">

                </div>
            </div>

            <div class="grid grid-cols-6 grid-rows-6 gap-3 w-full h-[30%]">
                <div
                    class="border rounded-2xl bg-card-2 col-span-6 row-span-4 px-4 py-1 flex flex-col items-end overflow-y-scroll">
                    <div class="flex justify-between items-center w-full mb-2">
                        <div
                            class="w-9 h-9 bg-color-1 rounded-full flex justify-center items-center p-[6px] overflow-hidden">
                            <img src="../../public/img/rainy.svg" alt="" class="w-full h-full object-contain">
                        </div>
                        <p class="font-semibold">Chance of rain</p>
                        <p class="font-semibold">{{ maxRainChance }}%</p>
                    </div>

                    <div v-for="(hour, index) in nextFiveHours" :key="index"
                        class="progress-bar-container flex  flex-row justify-between items-center gap-y-3">
                        <div class="flex justify-between items-center mb-2">
                            <p>{{ formatTime(hour.time) }}</p>

                        </div>
                        <div class="progress-bar-background">
                            <div class="progress-bar" :style="{ width: `${hour.chance_of_rain}%` }"></div>
                        </div>
                        <p>{{ hour.chance_of_rain }}%</p>
                    </div>
                </div>
                <div
                    class="border rounded-2xl bg-card-2 col-span-3 row-span-2 row-start-5 px-4 py-2 flex flex-col items-end">
                    <div class="flex flex-row justify-start items-center gap-3 w-full h-full ">
                        <div
                            class="w-9 h-9 bg-color-1 rounded-full flex justify-center items-center p-[6px] overflow-hidden">
                            <img src="../../public/img/rainy.svg" alt="" class="w-full h-full object-contain">
                        </div>
                        <div>
                            <p class="text-[0.8em] font-semibold text-nowrap capitalize">Sunrise</p>
                            <p class="text-[0.9em] font-semibold m-0 capitalize">{{
                                weatherToday?.forecast?.forecastday[0]?.astro?.sunrise }}</p>
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
                            <p class="text-[0.9em] font-semibold m-0 capitalize">{{
                                weatherToday?.forecast?.forecastday[0]?.astro?.sunset }}</p>
                        </div>

                    </div>
                    <div class="flex flex-row -mt-2 justify-center items-center gap-1">
                        <p class="text-[0.7em] font-semibold text-nowrap ">in 9h</p>
                    </div>
                </div>
            </div>

        </div>
    </div>


</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
// Crear un estado para almacenar los datos del clima
const weather = ref(null);
const weatherTomorrow = ref(null);
const formattedDate = ref('');
const hourlyData = ref([]);

// Función para obtener los datos del clima
const fetchClima = async (date) => {   // Puedes hacer que esta ciudad sea dinámica
    const url = `https://${import.meta.env.VITE_API_BASE_URL}/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${import.meta.env.VITE_API_DEFAULT_CITY_NAME}&lang=${import.meta.env.VITE_API_LANGUAGE}&dt=${date}`;

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
    const url = `https://${import.meta.env.VITE_API_BASE_URL}/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${import.meta.env.VITE_API_DEFAULT_CITY_NAME}&lang=${import.meta.env.VITE_API_LANGUAGE}&dt=${date}`;
    console.log(url);
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        weatherTomorrow.value = data;

    } catch (error) {
        console.error('Error al obtener el clima:', error);
    }
}

const currentHour = new Date().getHours();

// Filtrar las próximas 5 horas a partir de la hora actual
const nextFiveHours = computed(() => {
    return hourlyData.value.filter(hour => {
        const hourOfDay = new Date(hour.time).getHours();
        return hourOfDay >= 0;
    }).slice(0, 5);
});


// Función para formatear la hora
// Función para formatear la hora en formato 12 horas (AM/PM)
const formatTime = (time) => {
    return new Date(time).toLocaleTimeString([], { hour: 'numeric', hour12: true });
};


// Función para verificar si la hora es la hora actual
const isCurrentHour = (time) => {
    const hourOfDay = new Date(time).getHours();
    return hourOfDay === currentHour;
};

// Calcular el porcentaje máximo de lluvia para mostrar en la parte superior
const maxRainChance = computed(() => {
    return Math.max(...nextFiveHours.value.map(hour => hour.chance_of_rain));
});


// Llamar a la función fetchClima cuando el componente se monta
onMounted(async () => {
   

    const fecha = new Date();
    // Sumar un día a la fecha actual
    fecha.setDate(fecha.getDate() + 1);

    // Obtener los componentes de la fecha
    const year = fecha.getFullYear();  // Obtiene el año
    const month = String(fecha.getMonth() + 1).padStart(2, '0');  // Obtiene el mes (0-11) y le sumamos 1 para que sea de 1-12
    const day = String(fecha.getDate()).padStart(2, '0');  // Obtiene el día del mes

    // Formato final: año-mes-día
    const fechaFormateada = `${year}-${month}-${day}`;

    await fetchClima(fechaFormateada);
    // Llamar a la función fetchClimaEspesifico con la fecha
    await fetchClimaEspesifico(fechaFormateada);

    hourlyData.value = weatherTomorrow.value?.forecast?.forecastday[0].hour;


});
</script>

<style scoped>
.icon {
    width: 30px;
    height: 30px;
}

/* Estilo para las barras de progreso */
.progress-bar-container {
    width: 100%;
}

.progress-bar-background {
    background-color: #e0d4f7;
    border-radius: 8px;
    height: 25px;
    width: 60%;
    margin-top: 4px;
}

.progress-bar {
    background-color: var(--progress-bar-1);
    height: 25px;
    border-radius: 8px;
}
</style>
