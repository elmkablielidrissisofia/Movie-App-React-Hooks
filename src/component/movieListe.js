import React, { useState } from 'react';
import movieCard from './movieCard';
import {Form,Col,Row}from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

const movieListe = (props) => {
    const [Search,setSearch]=useState('')
    const [star,setStar]=useState(0)
    const handleSearch=(e)=>{
        e.preventDefault()
        setSearch(e.target.value)
    }
    const ratingChanged = (newRating) => {
        setStar(newRating)
      };
    return ( <div >
        <Row>
        <Col>
        <Form.Control size="lg" type="text" placeholder="Search" width="300px" onInput={handleSearch}/>
        </Col>
        <Col>
        <ReactStars 
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
    />
        </Col>
        </Row>
        <div style={{display:"flex",justifyContent:"space-around"}}>
        {props.movie.filter(el=>el.titre.toUpperCase().includes(Search.toUpperCase())).filter(el=>el.rate=>star).map(el=><movieCard titre={el.titre} rate={el.rate} image={el.image} />)}
        </div>

    </div> );
}
 
export default movieListe;