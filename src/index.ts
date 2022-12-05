import app from "./app"
import { getAllCharacters } from "./endpoints/getAllCharacters"
import { createCharacter } from './endpoints/createCharacter';
import { deleteCharacter } from './endpoints/deleteCharacter';

app.get("/characters", getAllCharacters)
app.put("/characters", createCharacter)
app.delete("/characters/:id", deleteCharacter)