// import Omdb from '../api/Omdb';
import React, {Component} from 'react';
import Cards from './Cards';

class App extends Component{
  // onSearchTerm = async () => {
  //   const data = await Omdb.get({
  //     Parameter:{
  //       i:'tt3896198'
  //     }
  //   });
  //   console.log(data);
  // }
  state={ moviesList:[] };

  static getDerivedStateFromProps(props, state) {
    return {moviesList: props.movies};
  }

  render(){
    return(
        <div>
          <div className="row">
            { this.state.moviesList.map((movie) => <Cards key={movie.imdbID} movie={movie}/>)}
          </div>
        </div>
    );

  }
}

export default App;
