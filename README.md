### 1. Clonar el repositorio

Si no lo has hecho aún, clona el repositorio del proyecto en tu máquina local:


### 3. Configurar variables de entorno

El proyecto utiliza un archivo `.env` para gestionar variables de entorno. Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes configuraciones basadas en las credenciales proporcionadas:


### 4. Instalar dependencias

Dirígete a la carpeta del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
cd Weather App
npm install
```

### 5. Ejecutar el proyecto en modo desarrollo

Para ejecutar tanto el backend como el fronend puede usar el sigueinte comando:

```bash
npm run serve
```

Esto inicia el servidor de desarrollo y puedes acceder a la aplicación en tu navegador en:

```
http://localhost:3000
```

### Comandos de npm importantes

- `npm run dev`: Inicia el servidor de desarrollo de Vite.
- `npm run build`: Genera la aplicación optimizada para producción.

