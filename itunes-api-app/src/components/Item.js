import React from 'react';
import {Button} from 'react-bootstrap';


//Functional component Item to display each search item 
const Item = (props) => {
    return(
        <div className='card'>
            <div className='additional'>
                <img src={props.image} alt={props.title} width='73px'></img>
                <p>R{props.price}</p>  
            </div>
            <div className='general'>
                <h5>{props.title}</h5>
                <h6>{props.artist}</h6>
                <h6>{props.media}</h6>
                <div className='favButton'>
                <Button onClick={props.addFavourites} variant='secondary' classname='but'><i  className='fav fa fa-heart'></i> Favourite</Button>
                </div>
            </div>      
        </div>      
    )
}

export default Item;



      /*  <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src={props.image} style={{width:'100px',height:'100px'}} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>{props.artist}</Card.Subtitle>
                <Card.Text>{props.media}</Card.Text>
                <Card.Text>R{props.price}</Card.Text>
                <Button variant="secondary" onClick={props.addFavourites}><i className='fa fa-heart'></i> Favourite</Button>
        </Card.Body>
    </Card>*/

   /* <div className="card">
            <div className="card-image">
                <img src={props.image} height='125px'></img>
                <a className="btn-floating halfway-fab waves-effect waves-light blue-grey darken-2" onClick={props.addFavourites}><i className='fa fa-heart'></i></a>
            </div>
            <div className="card-content">
                <span className="card-title">{props.title}</span>
                <p>{props.artist}</p>
                <p>R{props.price}</p>
                <p>{props.description}</p>
            </div>
        </div>*/