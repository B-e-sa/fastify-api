import { Static, Type } from '@sinclair/typebox'

// TODO:
// add password pattern
export const createUserBodySchema = {
    username: Type.String({ minLength: 10 }),
    password: Type.String({ minLength: 8 })
}