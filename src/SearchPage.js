import React from 'react';
import './SearchPage.css';
import {Button} from "@material-ui/core";
import SearchResult from './SearchResult';


function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p> 100 stays. 1st April December</p>
                <h1> Stays nearby</h1>

                <Button varient="outlined"> Cancellation Flexibility</Button>
                <Button varient="outlined"> Type of place</Button>
                <Button varient="outlined"> Price</Button>
                <Button varient="outlined"> Rooms and beds</Button>
                <Button varient="outlined"> More filters</Button>
            </div>

            <SearchResult 
                img="https://q-xx.bstatic.com/images/hotel/max1024x768/111/111085073.jpg?"
                location="Prive appartment in Serene Area"
                title=" Apex Lodge"
                description="2 master bedroom"
                star={7}
                price="N200 000/year"
                total="N250 0000 total"
            />

             <SearchResult 
                img="https://q-xx.bstatic.com/images/hotel/max1024x768/682/68204054.jpg?"
                location="Prive appartment in Serene Area"
                title=" Apex Lodge"
                description="2 master bedroom"
                star={3.4}
                price="N200 000/year"
                total="N250 0000 total"
            />
            
            <SearchResult 
                img="https://content.knightfrank.com/property/ng040/images/21789d4c-3edb-485d-aecd-fdf82dca2030-0.jpg?cio=true&w=1200"
                location="Prive appartment in Serene Area"
                title=" Mabush Logde"
                description="2 master bedroom"
                star={4.5}
                price="N200 000/year"
                total="N250 0000 total"
            />

            <SearchResult 
                img="https://images.propertypro.ng/large/4-bedroom-fully-detached-house-in-a-mini-estate-gra-ikeja-partially-furnished-ikeja-foMtqrXTV7Bxk4GxYqLD.jpg"
                location="Prive appartment in Serene Area"
                title=" Great Home"
                description="Duplex"
                star={5}
                price="2000 000/year"
                total="N2500 0000 total"
            />
        </div>
    )
}

export default SearchPage
