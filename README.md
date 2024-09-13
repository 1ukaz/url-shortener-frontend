# URL Shortener Frontend

This is the frontend layer build with React for a URL shortener backend

## Requirements

- Node.js (LTS version recommended)
- npm or yarn

## Instalation

Follow this steps for cloning the repo and setting up the project:

### Clone the repo

```bash
git clone https://github.com/1ukaz/url-shortener-react.git
cd url-shortener-react
```

### Install dependencies and required node modules
```bash
npm install
# o si usas yarn
yarn install
```

### Set up env variables
Copy the file `.env.example` and rename it to `.env`. Then edit the file `.env` with your environment needs.
```bash
cp .env.example.env
```
Just be sure your `.env` file has the following variable:
```bash
REACT_APP_API_BASE_URL=http://localhost:8000/api
```
Or any other alias of your choice, just remember the routes in the BE project are located at `/api`

## Start the application for development or tests
```bash
npm start
# o si usas yarn
yarn start
```
This will start de development server and you will be able to see the app working at `http://localhost:3000`.