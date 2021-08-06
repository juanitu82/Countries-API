
const axios = require('axios')
const { Router } = require('express');
const sequelize = require('sequelize')
const activity = require('../models/Activity');
const { Country, Activity } = require('../db')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const apiCall = async () => {
    const apiResponse = await axios.get('https://restcountries.eu/rest/v2/all');
    const apiData = await apiResponse.data.map( e =>  {
        return {
            Id: e.alpha3Code,
            Nombre: e.name,
            Bandera: e.flag,
            Continente: e.region,
            Capital: e.capital,
            SubRegion: e.subregion,
            Area: e.area,
            Poblacion: e.population
        }
    });
}


const nada = async () => {
    let nada1 = await Country.create({
        id: 'ARG',
        nombre: 'argentina',
        bandera: 'prueba',
        continente: 'america',
        capital: 'BsAs',
        subregion: 'sudaca',
        area: 98765,
        poblacion: 123456
    });
    console.log(nada1.toJSON())
}

    nada()
    Country.findAll()



const router = Router();

// router.get('/', async (req, res) => {
//     const { name } = req.query;
//     try {
//         const countrySearch = await Country.findAll();
//         console.log(countrySearch)
//         if(!countrySearch.length) await Country.bulkCreate(apiCall);
//         else res.json('hola')
//         console.log(countrySearch)
//     } catch (error) {
//         res.send(error)
//     }
    
// })
    
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
