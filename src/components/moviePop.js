import axios from 'axios';
import React,{Component} from 'react';
import {Modal} from 'react-bootstrap';
import './moviePop.css'

class MovieDetail extends Component{

  state={ movie:[], };

  componentDidMount(){
    const unique = '4d49aebe';
    var movieID = this.props.movieID;
    axios.get(`http://www.omdbapi.com/?apikey=${unique}&plot=full&i=${movieID}`)
      .then(
      (response) => {
        this.setState({ movie:response.data });
      })
    .catch((err) => console.log('Error'));
  }

  render(){
    const movie = this.state.movie;
    return(
      <Modal
        size="lg"
        show={this.props.lgShow}
        onHide={() => this.props.setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          {movie.Title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="body__flex">
          <div className="body__flex-1">
            <img alt="poster" src={movie.Poster} onError={(e)=>{e.target.src = 'images/notFound.png'}}/>
          </div>
          <div className="body__flex-2">
            <h1><span>Title:</span>{movie.Title}</h1>
            <h2><span>Genre:</span>{movie.Genre}</h2>
            <h2><span>Awards & BoxOffice:</span>{movie.Awards} & {movie.BoxOffice}</h2>
            <h2><span>Language:</span>{movie.Language}</h2>
            <h3><span>Director:</span>{movie.Director}</h3>
            <h3><span>Actors:</span>{movie.Actors}</h3>
            <h4><span>Released:</span>{movie.Released}</h4>
            <h5><span>Plot:</span>{movie.Plot}</h5>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

// Actors: "Devendra Banhart, Arnaldo Baptista, Lucinha Barbosa, Bill Bartell"
// Awards: "5 wins & 6 nominations."
// BoxOffice: "N/A"
// Country: "Brazil"
// DVD: "N/A"
// Director: "Paulo Henrique Fontenelle"
// Genre: "Documentary, Biography, Music"
// Language: "Portuguese, English"
// Metascore: "N/A"
// Plot: "N/A"
// Poster: "https://m.media-amazon.com/images/M/MV5BNGRhMjAwZDUtNzRmMS00YjkyLTg1MTMtZWEyMjYwMWVhZTBhXkEyXkFqcGdeQXVyMTU2ODc4ODQ@._V1_SX300.jpg"
// Production: "N/A"
// Rated: "N/A"
// Ratings: [{…}]
// Released: "19 Jun 2009"
// Response: "True"
// Runtime: "120 min"
// Title: "Loki: Arnaldo Baptista"
// Type: "movie"
// Website: "N/A"
// Writer: "Paulo Henrique Fontenelle"
// Year: "2008"
// imdbID: "tt1517095"
// imdbRating: "8.3"
// imdbVotes: "175"

export default MovieDetail;
