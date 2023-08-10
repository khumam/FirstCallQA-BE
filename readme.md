# FirstCallQA Test Assessment Backend
This is a backend test assessment for a fullstack web developer assigned by FirstCallQA. In this code, we have defined the backend using ExpressJS, and Prisma with sqlite for the databases.

## How to run the code
To run the code, make sure you have cloned the FE version from here: https://github.com/khumam/FirstCallQA-FE, and then run the service. Details on how to run the FE service are already provided in the readme file within the repository.

Next, inside this repository, you can run the following command to install the required packages:

```
npm install
```
Then copy the .env.example file
```
cp .env.example .env
```

The final step is to run the development server using the following command:

```
npm run dev
```

This will make the backend listen on port 3080 (default on env file).

IMPORTANT: I have set the default port for the backend as 3080, so ensure that when you run the backend service, it's also using port 3080.

## Project structure
- All project files are stored in the `src` folder.
- The `interfaces` folder is for defining the interface type for each variable.
- The `controllers` folder is for defining the controller each service.
- The `loaders` folder is for defining the function to load the routes.
- The `requests` folder is for defining the request rule for the service.
- The `routes` folder is for defining the routes.
- The `prisma` folder is for defining the database and prisma configuration.