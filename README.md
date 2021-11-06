# Ciklum Tech Test - Lottoland Games

## Introduction
This is a technical test for applying to Senior Front-End Developer role at Ciklum for Lottoland. It has been deployed using [**Preact**](https://preactjs.com/) and JavaScript ES6. The project structure follows an [**Atomic Design Model**](https://bradfrost.com/blog/post/atomic-web-design/), although Template and Page layers could be improved. The **test coverage is of 100%** in statements, branches, functions, and lines of code.

Regarding the layout, the website is responsive and has been tested with a minimum width of 320px and a maximum greater or equal to 1280px. The breakpoint that switches between mobile and desktop layout is at 768px. SCSS has been used for styling, and some features like variables (for colors) and loops (for repetitive font-face declarations) have been also employed.

## Installation and running
The app can be run using the following Preact CLI commands:
``` bash
# Install dependencies
npm install

# Serve with hot reload at localhost:8080
npm run dev

# Build for production with minification
npm run build

# Test the production build locally
npm run serve

# Run tests with jest and enzyme
npm run test

# Run tests with jest and enzyme, showing coverage results
npm run test -- --coverage
```

## Running with Docker
In order to run the app in DEV mode with Docker, the following commands must be executed (might need to run with `sudo` in Linux):
``` bash
# Build Docker image
docker build -t lottoland-games:dev .

# Serve detached at localhost:8081
docker run -itd --rm -v ${PWD}:/app -v /app/node_modules -p 8081:8080 lottoland-games:dev
```

When using Windows, PowerShell must be used in order to get the current directory with `${PWD}`. If using the Windows Command Line (cmd), `${PWD}` should be replaced with `%cd%`. 

The `docker run` command will output an ID that can be used to stop the process from running. As an example:

``` bash
# Run the container
~]$ docker run -itd --rm -v ${PWD}:/app -v /app/node_modules -p 8081:8080 lottoland-games:dev
5c6322e49ef013e03aff555e4d69226bb4ea9f788088a0be050c7e8fb7248440

# Stop it
~]$ docker stop 5c6322e49ef013e03aff555e4d69226bb4ea9f788088a0be050c7e8fb7248440
5c6322e49ef013e03aff555e4d69226bb4ea9f788088a0be050c7e8fb7248440
```

### Known issues
- Right now, running the app with Docker breaks hot reload due to missing configuration.