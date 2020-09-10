//Imports 
import React from 'react';
import SearchArea from './SearchArea.js';
import ItemList from './ItemList.js';
// Class component Items in which state will be kept of search and Search Area
class Items extends React.Component {
  //Constructor
  constructor(props){
      super(props);
      this.handleSearch = this.handleSearch.bind(this);
      this.searchItem = this.searchItem.bind(this);
      this.state = {
          items: [],
          search: '',
          category:'all'
      }
  }//end constructor

  //Method to fecth from api and search for the item 
  searchItem = (e) => {
    e.preventDefault();
    const {search,category} = this.state;
    fetch('/',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({term:search, media:category}), 
        }).then(res => res.json())
        .then(data => {
          this.setState({items: [...data.results]}); 
      }).catch(error => {
        this.setState({items:[],search:''});
      })
  }
  
  //Method to change state of category each time user selects a category
  handleCategory = (e) => {
    this.setState({category: e.target.value});
    console.log(this.state.category);
  }
  //Method to change state of search each time users adds input 
  handleSearch = (e) => {
      this.setState({search: e.target.value});
      console.log(this.state.search)
  }
    //Render
  render() {
    return (
      <div>
        <SearchArea searchEnter={this.searchItem} categoryChange={this.handleCategory} searchChange={this.handleSearch}/>
        <ItemList items={this.state.items}/>
      </div>
    )
  }//end Render
}//end App 

export default Items;