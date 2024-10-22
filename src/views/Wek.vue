<template>
    <div class="px-4 flex flex-col">
        <div v-for="(day, index) in forecast" :key="index" class="forecast-day px-4 py-2 bg-card-2 rounded-xl">

            <div>
                <p class="font-semibold">{{ formatDay(day.date) }}</p>
                <p>{{ day.day.condition.text }}</p>
            </div>
            <div class="flex flex-row">

                <p class="">{{ day.day.maxtemp_c }}° <br> {{ day.day.mintemp_c }}°</p>
                <img :src="getIconUrl(day.day.condition.icon)" alt="Weather Icon" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const forecast = ref([]);

const fetchWeather = async () => {
    const url = `https://${import.meta.env.VITE_API_BASE_URL}/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${import.meta.env.VITE_API_DEFAULT_CITY_NAME}&lang=${import.meta.env.VITE_API_LANGUAGE}&days=10`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();
        forecast.value = data.forecast.forecastday;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

const formatDay = (date) => {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
};

const getIconUrl = (icon) => {
    return `https:${icon}`;
};

onMounted(() => {
    fetchWeather();
});
</script>

<style scoped>
.forecast-day {
    margin: 7px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

img {
    width: 50px;
    height: 50px;
}
</style>