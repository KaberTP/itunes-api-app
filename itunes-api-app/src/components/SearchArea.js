import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';

const categories = ["all", "movie", "podcast", "music", "musicVideo", "audiobook", "shortFilm", "tvShow", "software", "ebook"]
const categoryOptions = categories.map((category,index) => 
                        <option key={index} value={category}>{category}</option>
                        );         
//Functional component Header to display info in top of page Header
const SearchArea = (props) => {
    return(
       
           <Form className='searchArea'onSubmit={props.searchEnter} action=''>
               <Form.Row className='align-items-center'>
                <Col>
                    <Form.Control onChange={props.searchChange} type='text' placeholder='Search...'/>
               </Col>
               <Col>
                    <Button variant='secondary'type='onSubmit'>SEARCH</Button>
               </Col>
               <Col>
                    <Form.Control as="select" defaultValue='All' onChange={props.categoryChange}>
                        {categoryOptions}   
                    </Form.Control>
                </Col>
               </Form.Row>   
           </Form>
    
    )
}

export default SearchArea;