import React from 'react';
import {Button, Image} from 'react-bootstrap';
//Functional component Item to display each search item 
const FavouriteItem = (props) => {
    return(
        <div className='favourite'>
            <Image src={props.image} roundedCircle height='50px' width='50px' />
            <p>{props.title}</p>
            <Button variant='secondary' onClick={props.removeFavourite}><i className='fa fa-close'></i></Button>
        </div>
    )
}

export default FavouriteItem;