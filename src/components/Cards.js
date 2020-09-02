import React,{ useState } from 'react';
import MovieDetail from './moviePop';
import {Button,ButtonToolbar} from 'react-bootstrap';

const Cards = (movie) => {

  const [lgShow, setLgShow] = useState(false);

  return(
    <>
    <div className="col-sm-4">
      <div className="card text-white bg-dark mb-4 shadow-sm">

        <img alt="poster" src={movie.movie.Poster} onError={(e)=>{e.target.src = 'images/notFound.png'}}></img>

          <div className="card-body">
            <h2 className="card-text">{movie.movie.Title}</h2>
          <div className="d-flex justify-content-between align-items-center">
            <h4>{movie.movie.Type}</h4>
            <h5 style={{color:'#3f444e'}}>{movie.movie.Year}</h5>
          </div>
            <ButtonToolbar>
              <Button variant="dark" onClick={() => setLgShow(true)}>View &rarr;</Button>
              <MovieDetail movieID={movie.movie.imdbID} lgShow={lgShow} setLgShow={setLgShow}/>
            </ButtonToolbar>
          </div>

        </div>
      </div>
    </>
  );
}

export default Cards;
