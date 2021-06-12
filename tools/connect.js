const Axios = require('axios').default;

class Connect {
    constructor(HOST = '') {
        this.HOST = HOST;
    }

    async getInfo(route = '/') {
        let req = await Axios.get(`${this.HOST}${route}`);

        return req.data;
    }

    async getInfoWithParams(route = '/', params = { lang: 'es' }) {
        let completedRoute = route;

        if (completedRoute.split('').pop() !== '?') {
            completedRoute += '?';
        }

        let myParams = [];

        for (let key in params) {
            myParams.push(`${key}=${params[key]}`);
        }

        return await this.getInfo(completedRoute.concat(myParams.join('&')));
    }
}

module.exports = Connect;