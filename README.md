# URL Shortener Frontend

This project is the frontend layer built with React for a URL shortener backend API REST. 
The purpose of this project is to provide a practical example of how to implement the same functionalities using React, allowing for a direct comparison with a similar project built using Vue 3.

By examining both the React and Vue 3 implementations, you can gain insights into the differences and similarities between these two popular frameworks. This comparison aims to highlight the unique features, strengths, and potential challenges of each framework, helping you to understand their respective approaches to building modern web applications.

## Requirements

- Node.js (LTS version recommended)
- npm

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
```

### Set up env variables
Copy the file `.env.example` and rename it to `.env`. Then edit the file `.env` with your environment needs.
```bash
cp .env.example .env
```
Just be sure your `.env` file has the following variable:
```bash
REACT_APP_API_BASE_URL=http://localhost:8000/api
```
Or any other alias of your choice, just remember the routes in the BE project are located at `/api`

## Start the application for development or tests
```bash
npm start
```
This will start de development server and you will be able to see the app working at `http://localhost:3000`.