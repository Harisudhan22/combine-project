import express from "express"

const router = express.Router()

//CRUD functionality

// R - For Reading
router.get('/', (req,res) => {
  res.send("this is the overall movie")
})

// C - for creating movies
router.post('/', (req,res) => {
  res.send("this will creates the movie")
})

// U - for updating movie
router.put('/:id', (req,res) => {
  res.send("this will update the movie")
})

// D - For Deleting Movie
router.delete('/:id', (req,res) => {
  res.send("this will delete the movies")
})

export default router;