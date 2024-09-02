# URL Shortener Frontend

Este proyecto es la parte frontend de una aplicación de acortador de URLs construida con React.

## Requisitos

- Node.js (versión LTS recomendada)
- npm o yarn

## Instalación

Sigue estos pasos para clonar el repositorio y configurar el proyecto:

### Clonar el repositorio

```bash
git clone https://github.com/1ukaz/url-shortener-frontend.git
cd url-shortener-frontend
```

### Instalar dependencias
```bash
npm install
# o si usas yarn
yarn install
```

### Configurar variables de entorno
Copia el archivo `.env.example` y renómbralo a `.env`. Luego, edita el archivo `.env` con las configuraciones necesarias para tu entorno.
```bash
cp .env.example.env
```
Asegúrate de que el archivo `.env` tenga la siguiente estructura:
```bash
REACT_APP_API_BASE_URL=http://localhost:8000/api
```
O cualquier alias que hayas elegido, solo recuerda que las rutas estan en `host.elegido/api`

## Iniciar la aplicacion
```bash
npm start
# o si usas yarn
yarn start
```
Esto iniciará el servidor de desarrollo y podrás ver la aplicación en `http://localhost:3000`.