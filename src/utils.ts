import { NewPersonEntry, Worked,  } from "./types";

const parseName = (nameFromRequest : any) : string => {
     
    if(!isString(nameFromRequest)) throw new Error('Incorrect or missing name')
    return nameFromRequest
}

const parseWorked = (workedFromRequest : any) : Worked => {
   if(!isString(workedFromRequest) || !isWorked(workedFromRequest) ) throw new Error('Incorrect or missing Worked')
   return workedFromRequest
}

const parseAge = (ageFromRequest : any) => {
    if(isNaN(ageFromRequest) || typeof ageFromRequest !== 'number') throw new Error('Incorrect or missing age')
     return ageFromRequest
}
const isString = (msg : string) : boolean => {
    return typeof msg === 'string'
}

const isWorked = (value : any) : boolean => {
    return Object.values(Worked).includes(value)
}
const toNewPersonEntry = (object : any) : NewPersonEntry => {
 const newEntry : NewPersonEntry = {
     name : parseName(object.name),
     age : parseAge(object.age),
     worked : parseWorked(object.worked)

 }

 return newEntry
}

export default toNewPersonEntry