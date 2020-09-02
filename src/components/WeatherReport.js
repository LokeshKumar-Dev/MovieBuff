import React,{Component ,useState} from 'react';

function WeatherReport() {
  let [searchValue,setSearchValue] = useState(null);
  let [lat,setLat] = useState(0);
  let [long,setLong] = useState(0);
  let [app,setApp] = useState('');

  function SearchQ(value) {
    setSearchValue(searchValue=value);
  };

  function Coords(lati ,longi) {
    setLat(lat=lati);
    setLong(long=longi);
  }

  // if(searchValue !== null | lat !== 0){
  //   setApp({app:<PostList searchValue={searchValue} lat={lat} long={long} />})
  // };

  return(
    <>
    {console.log('return')}
      {/*LEFT-WIDGET*/}
     <div className="widget-left">

       <div className="season">
         <div className="degree">
           <h4>Sunny</h4>
           <h3>12°c</h3>
         </div>
         <div className="date">
           <h6>21.05.2016</h6>
         </div>
          <div className="clear"> </div>
       </div>

       <div className="season w3">
         <div className="degree">
           <h4>Cloudy</h4>
           <h3>9°c</h3>
         </div>
         <div className="date">
           <h6>23.05.2016</h6>
         </div>
          <div className="clear"> </div>
       </div>

       <div className="season agile">
         <div className="degree">
           <h4>Winter</h4>
           <h3>11°c</h3>
         </div>
         <div className="date">
           <h6>27.05.2016</h6>
         </div>
          <div className="clear"> </div>
       </div>

       <div className="season">
         <div className="degree">
           <h4>Rainy</h4>
           <h3>17°c</h3>
         </div>
         <div className="date">
           <h6>30.05.2016</h6>
         </div>
          <div className="clear"> </div>
       </div>

     </div>
     {/*LEFT-WIDGET__END*/}

     {/*RIGHT-WIDGET*/}
     <div className="widget-right w3l">
       <p>Saturday</p>
       <p>May 2016</p>
       <h5>Mostly Sunny</h5>
       <h2>17°c</h2>
     </div>
     {/*RIGHT-WIDGET__END*/}
    </>
  );
};
export default WeatherReport;
