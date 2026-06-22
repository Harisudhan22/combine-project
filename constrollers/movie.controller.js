import Movie from '../modules/movies.modules.js'

export const MovieIndex = async (req, res) => {
  try{
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  
};

export const MovieAdd = async (req, res) => {
  const newMovie = new Movie({
    name: req.body.name,
    discription: req.body.discription,
  });

  try {
    const movie = await newMovie.save();
    return res.status(201).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const Movieone = async (req, res) => {
  try {
  
    const movie = await Movie.findOne({
      name: req.params.name
    });
    if (movie == null){
      return res.status(404)
    } else {
      return res.json(movie)
    }


  } catch(error) {
    return res.status(400).json({ message: error.message })
  }
}


export const MovieUpdate = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie){
      return res.status(404).json({ message: "Movie Not Found" })
    }
    if(req.body.name && req.body.discription){
      if (req.body.name) {
        movie.name = req.body.name;
      } 
      if (req.body.discription) {
        movie.discription = req.body.discription;
      }
      await movie.save();
      return res.json({message : "updated successfully"})
    } else {
        return res.status(400).json({message : "you did not provided name and discription"})
      }



  } catch(error) {
    return res.status(400).json({ message: error.message })
  }
}

export const MoviePartialUpdate = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie){
      return res.status(404).json({ message: "Movie Not Found" })
    }
   
      if (req.body.name) {
        movie.name = req.body.name;
      } 
      if (req.body.discription) {
        movie.discription = req.body.discription;
      }
      await movie.save();
      return res.json({message : "updated successfully"})
    



  } catch(error) {
    return res.status(400).json({ message: error.message })
  }
}



export const MovieDelete = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if(movie == null){
      return res.status(404).json({
    message: "Movie not found"
  });
    } else {
      return res.json({message : "the movie was Deleted successfully"})
    } 
  } catch(error) {
    res.send({message : error.message})
  }
  
} 
