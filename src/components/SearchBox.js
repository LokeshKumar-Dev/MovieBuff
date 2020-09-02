import React,{Component} from 'react';

class SearchBox extends Component{
  state = { term:'' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.run(this.state.term);

    this.setState({term: ''});
  }
  render(){
    return(
        <form onSubmit={this.onFormSubmit} className="form-inline">
          <div className="input-group">

            <input type="text" className="form-control" placeholder="Movie Search" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.term} onChange={e =>{this.setState({term:e.target.value})}}/>
            <div className="input-group-append">
              <button className="btn btn-outline-dark" type="submit">Search</button>
            </div>
            
          </div>
        </form>
    );
  }
}

export default SearchBox;
