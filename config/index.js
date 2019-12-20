const config = {
    development: {
        API_KEY: process.env.API_KEY,
        PORT: 3000,
    },
    production: {
        API_KEY: process.env.API_KEY,
        PORT: process.env.PORT
    }
};
let environment;

process.env.NODE_ENV ? environment = process.env.NODE_ENV : environment = 'development';

module.exports = config[environment];