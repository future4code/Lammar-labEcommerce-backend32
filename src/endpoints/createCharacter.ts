import { Request, Response } from "express"
import { connection } from "../connection";



export const createCharacter = async (
    req: Request,
    res: Response
): Promise<void> => {

    try {
        const { name, gender, description } = req.body
        await connection.raw(`
        INSERT INTO characters (id, name, gender, description)
            VALUES (
                ${Date.now().toString()}, 
                '${name}', 
                '${gender}', 
                '${description}'
                )
        `)

        res.status(201).end()

    } catch (error) {

        res.status(500).end()

    }

}