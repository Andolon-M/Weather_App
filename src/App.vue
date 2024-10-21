<template>
    <Suspense>
      <template #default>
        <div class="scroll-container background-1" @scroll="handleScroll" > <!-- Agregar contenedor para scroll -->
          <Header :isScrolled="isScrolled" v-show="true" />
          <Navbar />
          <router-view></router-view>
        </div>
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </template>
  
  <script setup>
  import Navbar from './components/Navbar.vue';
  import Header from './components/Header.vue';
  import { ref } from 'vue';
  
  // Obtener la etiqueta meta del color del tema
  const themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
  const isScrolled = ref(false); // Estado reactivo para controlar el scroll
  
  // Función de debounce para limitar la ejecución
  const debounce = (func) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
      }, );
    };
  };
  
  // Manejar el evento de scroll
  const handleScroll = debounce((event) => {
    const scrollPosition = event.target.scrollTop;
  
    // Cambiar el color del tema y el estado isScrolled
    if (scrollPosition >= 178) {
        console.log('Se hizo scroll hacia abajo', scrollPosition);
      themeColorMetaTag.setAttribute('content', '#e2d3fa');
      isScrolled.value = true; // Cambiar el estado cuando se hace scroll
    } else{
      console.log('Se hizo scroll hacia arriba', scrollPosition);
      themeColorMetaTag.setAttribute('content', '#704cd2');
      isScrolled.value = false; // Cambiar el estado cuando se hace scroll
    }
  }, 
);
  </script>
  
  <style scoped>
  .scroll-container {
    height: 100vh; /* Asegurarse de que el contenedor tenga altura completa */
    overflow-y: scroll; /* Permitir scroll vertical */
  }
  </style>
  