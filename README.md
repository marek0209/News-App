[![Netlify Status](https://api.netlify.com/api/v1/badges/4caf47a6-0971-4c5d-8bf2-aa4fc6697e6f/deploy-status)](https://app.netlify.com/sites/admirable-piroshki-c581c2/deploys)

# gnNews - gnStudio React.js developer challenge

## Run in docker
### `cd ngNews`

In main app folder type this command:

### `docker build -t ng-news:dev .`

This command building docker container

### `docker run -p 3000:5173 ng-news:dev`

This command running previously built container

Now the application should be available at http://localhost:3000/


## Run localy

Make sure you have installed Node v18.x

### `cd ngNews`

In main app folder type this command:

### `npm install`

This command should install all dependencies

### `npm run dev`

This should run app in dev mode

Now the application should be available at http://localhost:3000/

## Build for production

### `npm run build`

### `npm run preview`

