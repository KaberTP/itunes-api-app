import React from 'react';
import Item from './Item';
import { useState } from 'react';
import FavouriteItem from './FavouriteItem';
import { Row, Col } from 'react-bootstrap';

//Functional component Itemslist to display a list of searched items 

const ItemList = (props) => {
    const [favourites,setFavourites] = useState([]);
    const items = props.items;
    //Function Add search item to favourite items
    function addFavourites(item){
        setFavourites([...favourites,item]);
        console.log(favourites);
    }
    //Remove a favourite item 
    function removeFavourite(favourite){
        setFavourites(favourites.filter(item => item !== favourite));
    }
    // display Searched Items aswell as Favourites
    if (items){
    return(

        <Row>
            <Col sm='10' md='10' lg='9'>
            <div className='searchedItems'>    
               
            {   
                items.map((item,index) => {
                    return <Item
                                image={item.artworkUrl100}
                                title={item.trackCensoredName}
                                artist={item.artistName}
                                media={item.kind}
                                price={item.trackPrice}
                                addFavourites={(e) => addFavourites(item)}
                                key={index}
                            />
                })
                
            }   
            </div>
            </Col>
            <Col sm='2' md='2' lg='3'>
            <div className='favourites'>
                <h3>Favourites <i className='fa fa-heart'></i></h3>
                
                {   
                favourites.map((favourite,index) => {
                    return <FavouriteItem
                                image={favourite.artworkUrl100}
                                title={favourite.trackCensoredName}
                                removeFavourite={(e)=> removeFavourite(favourite)}
                                key={index}
                            />
                })
                
                }    
            </div>
            </Col>
        </Row>
       
        
    )
    }
}

export default ItemList;