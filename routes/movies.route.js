import express from "express"
import { MovieAdd, MovieDelete, MovieIndex, MovieUpdate } from "../constrollers/movie.controller.js"

const router = express.Router()

//CRUD functionality
//MVC - Module View Controller
// R - For Reading
router.get('/', MovieIndex)

// C - for creating movies
router.post('/', MovieAdd)

// U - for updating movie
router.put('/:id', MovieUpdate)

// D - For Deleting Movie
router.delete('/:id', MovieDelete)

export default router;