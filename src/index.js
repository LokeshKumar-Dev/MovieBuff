import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchBox from './components/SearchBox';
import App from './components/App';

class Index extends Component{

  state={ movies:[],app:'' };

  onSearchTerm = (searchValue=null,pageValue=1) => {
    const unique = '4d49aebe';
    axios.get(`http://www.omdbapi.com/?apikey=${unique}&s=${searchValue}&page=${pageValue}`)
    .then(
      (response) => {
        this.setState({ movies:response.data.Search });
        if (this.state.movies.length !== null){
          this.setState({
            app : <App
            movies={this.state.movies}
            />});
        }
      })
    .catch((err) => console.log(err));

  }

  render(){
    return(
        <div className="container">
          <h1 className="logo__name">MovieBuff...</h1>
          <nav className="navbar sticky-top navbar-light">
            <a href="!#" className="navbar-brand">MovieBuff...</a>
            <SearchBox run={this.onSearchTerm} />
            </nav>
          <div className="container_wrap">
            <div className="slider">
              <div className="callbacks_container">
                <ul className="rslides" id="slider">
                  <li><img src="images/banner.jpg" className="img-responsive" alt="" />
                  </li>
                  <li><img src="images/banner1.jpg" className="img-responsive"  alt="" />
                  </li>
                  <li><img src="images/banner2.jpg" className="img-responsive" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          { this.state.app }
        </div>
    );
  }
}

ReactDOM.render(<Index/>,document.querySelector('#root'));
