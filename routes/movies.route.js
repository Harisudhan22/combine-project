import express from "express"
import { MovieAdd, MovieDelete, MovieIndex, MovieUpdate, Movieone, MoviePartialUpdate } from "../constrollers/movie.controller.js"



const router = express.Router()

//CRUD functionality
//MVC - Module View Controller
// R - For Reading
router.get('/', MovieIndex)

router.get('/:name', Movieone)

// C - for creating movies
router.post('/', MovieAdd)

// U - for updating movie
router.put('/:id', MovieUpdate)

router.patch('/:id', MoviePartialUpdate)

// D - For Deleting Movie
router.delete('/:id', MovieDelete)

export default router;