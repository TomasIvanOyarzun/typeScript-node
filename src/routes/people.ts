import express from 'express'
import * as personData from '../service/personService'
import toNewPersonEntry from '../utils'
const router = express.Router()

// router.get('/', (_ , res) => {
//     res.send(personData.getAllPersons())
// })

router.get('/', (_ , res) => {
    res.send(personData.getAllPersonsNoAge())
})

router.get('/:id', (req , res) => {
    const entry = personData.findById(Number(req.params.id))
    return entry ?  res.status(200).json(entry) : res.status(400).json({msg : 'not found'})
   
})
router.post('/', (req ,res)=> {

    try {
        
        const newPersonEntry = toNewPersonEntry(req.body)
        const addPersonEntry = personData.addPerson(newPersonEntry)
        res.status(200).json(addPersonEntry)
    } catch (error) {
        res.status(400).send({msg: error})
    }
   
})

export default router