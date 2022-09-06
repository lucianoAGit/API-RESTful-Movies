import { Router, Request, Response } from "express";
import { creatMovie, findMovieById, getAllMovies, removeMovies, updateMovie } from "./controllers/movieControllers";

//validation
import {validate} from "./middleware/handleValidation"
import { movieCreateValidation } from "./middleware/movieValidator";

const router = Router()

export default router.get("/test", (req:Request, res: Response) =>{
    res.status(200).send("API working!")
})
.post("/movie", movieCreateValidation(),validate,creatMovie)
.get("/movie/:id", findMovieById)
.get("/movie", getAllMovies)
.delete("/movie/:id", removeMovies)
.patch("/movie/:id", updateMovie);
