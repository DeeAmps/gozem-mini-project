const config = require('../config');
const logger = require('../utils/logger');

const googleMapsClient = require('@google/maps').createClient({
    key: config.API_KEY,
    Promise: Promise
});

const ApiController = (apiRouter) => {
    apiRouter.post('/get_distance_and_time', async (req, res) => {
        const { body } = req;
        const { start, end } = body;
        const { lat:startlat, lng: startlng } = start;
        const { lat: endlat,  lng: endlng } = end;
        const { units } = body;

        googleMapsClient.distanceMatrix({ 
            origins: `${startlat},${startlng}`,
            destinations: `${endlat}, ${endlng}`,
            units,
        }).asPromise().then(results => {
            res.json(results);
        }).catch(err => {
            console.log('error ', err);
            logger.error(err.json.error_message);
            res.json({ success: false, error: 'An error occurred!' });
        })
    });

    return apiRouter;
}


module.exports = ApiController;