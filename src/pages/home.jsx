import React from 'react'
import {Jumbotron} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchingBar from '../components/navbar';



const Home = () => {
  return (
    <Jumbotron>
     <SearchingBar/>
    </Jumbotron>
  );
}


export default Home;