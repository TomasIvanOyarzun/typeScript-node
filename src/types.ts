

export enum Worked {
    js = 'programmer javascript',
    th = 'teacher primary school',
    st =  'student unversity'
}
export interface Person {
    id : number,
    name : string,
    age : number,
    worked : Worked
}


export type noAgePerson = Omit<Person, 'age'>

export type NewPersonEntry = Omit<Person, 'id'>