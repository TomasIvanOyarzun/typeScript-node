import person from './personas.json'

import { Person, noAgePerson, NewPersonEntry} from '../types'

const personJson : Array<Person> = person as Array<Person>

export const getAllPersons = () : Array<Person> => personJson

export const findById = (id : number) : Person | undefined  => {
    const entry = personJson.find(el => el.id === id)
    return entry 
}

export const getAllPersonsNoAge = () : Array<noAgePerson> => {
    return personJson.map(({id,name,worked}) => {
        return {
            id, name, worked
        }
    })
}

export const addPerson = (newPersonEntry : NewPersonEntry) : Person => {
    const newPerson = {
        id : personJson.length + 1,
      ...newPersonEntry
    }
       
    personJson.push(newPerson)
   return newPerson
}



