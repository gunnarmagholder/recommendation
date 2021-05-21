const { response } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const { v4: uuidv4} = require('uuid')

const port = 5001

const app = express()

let recommendation = [
    {
        'user': '1',
        'title': 'Synapse',
        'link': 'https://www.youtube.com/c/Synapse1',
        'description': 'League of Legends highlight videos',
        'category': 'Youtube',
        'recoid': uuidv4()
    },
    {
        'user': '1',
        'title': 'Karl Jobst',
        'link': 'https://www.youtube.com/user/karljobst',
        'description': 'Video game speedruns',
        'category': 'Youtube',
        'recoid': uuidv4()
    },
    {
        'user': '2',
        'title': 'Daniel Ricciardo',
        'link': 'https://www.youtube.com/c/DanielRicciardo',
        'description': 'World famous Formula 1 driver',
        'category': 'Youtube',
        'recoid': uuidv4()
    },
]

app.use(express.json())
app.use(morgan('combined'))
app.use(cors())

app.get('/', (req,res) => {
    res.json({'counter': recommendation.length}).end()
})

// Rest Interface Recommendations
// GET /recommendations/:id - Liste mit der ID für Autor oder Betrachter (je nach ID)
// POST /recommendations/:id/ - Erstellen einer Recommendation (nur auf korrekter ID)
// DELETE /recommendations/:id/:recommendationId - Löschen der Recommendation mit der ID

app.get('/recommendations/:id', (req, res) => {
    res.send(recommendation.filter((doc) => { return doc.user === req.params.id })).end()
})

app.post('/recommendations/:id', (req, res) => {
    let recLength = recommendation.length
    let recommendationToPush = req.body
    recommendationToPush.user = req.params.id
    recommendation.push(recommendationToPush)
    if (recommendation.length > recLength) {
        res.status(200).send('Recommendation written').end()
    } else {
        res.status(500).send('Error writing Recommendation').end()
    }
})

app.delete('/recommendations/:id/:recommendationId', (req, res) => {

})

app.listen(port, () => {
    console.log('Started server on port ' + port)
})