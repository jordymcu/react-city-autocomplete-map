# React - Typescript - Tailwind

# Autocomplete de Ciudades con Mapa

Este proyecto es una aplicación React que implementa un campo de autocompletado para buscar ciudades utilizando la API de OpenCage. Además, muestra información detallada de la ciudad seleccionada, incluyendo un mapa interactivo con la ubicación de la ciudad.

## Características

- Campo de autocompletado para buscar ciudades.
- Muestra información detallada de la ciudad seleccionada.
- Mapa interactivo utilizando `react-leaflet` para mostrar la ubicación de la ciudad.

## Requisitos

- Node.js
- npm (o yarn)

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/nombre-del-repositorio.git
    cd nombre-del-repositorio
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Crea un archivo `.env` en la raíz del proyecto y agrega tu clave API de OpenCage:

    ```bash
    VITE_API_KEY=TU_CLAVE_API
    ```


## Uso

1. Ingresa el nombre de una ciudad en el campo de autocompletado.
2. Selecciona una ciudad de la lista de resultados.
3. La información detallada de la ciudad seleccionada se mostrará junto con un mapa interactivo que indica su ubicación.


## Dependencias

- `react`
- `axios`
- `react-leaflet`
- `leaflet`
- `@types/leaflet`
- `tailwindcss`

## Personalización

Puedes personalizar el estilo del proyecto editando los archivos de TailwindCSS o agregando tus propios estilos CSS.

## Créditos

Este proyecto utiliza la API de [OpenCage](https://opencagedata.com/) para la geocodificación y [OpenStreetMap](https://www.openstreetmap.org/) para los mapas.




