import React, { useState } from 'react';
import './Banner.css';
import Button from '@material-ui/core/Button';
import Search from './Search';
// import { Link } from "react-router-dom";
import { Route } from 'react-router-dom';
// import { Button } from "@material-iu/core";

function Banner() {
    // const history = useHistory();
    const [showSearch, setShowSearch] = useState
    (false);

    return (
        <div className= 'banner'>
            <div className= 'banner__search'>
            {showSearch && <Search />}


                <Button onClick= {() => setShowSearch(!showSearch)}
                className= 'banner__searchButton'
                variant='outlined'> Search Dates </Button>
            </div>
            <div className='banner__info'>
                <h1> Get a luxury home of your dream</h1>
                <h5> Your choice is not our constraint,
                        we will go extra miles for you </h5>

                <Button 
                // onClick={() => history.push('/search')} 
                    variant='outlined'>Explore Vacancy</Button>
            </div>
            
        </div>
    )
}

export default Banner
