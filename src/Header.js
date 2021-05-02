import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from './logo.jpg';
import SearchResult from './SearchResult';


function Header() {
    return (
        <div className='header'>
                {/* <link to='/'> */}
                    <div className="perharps">
                        <img src={Logo} width="50" alt="logo"/>
                    </div>
                {/* </link>     */}

                <div className='header__center'>
                        <input type="text"/>
                        <SearchIcon />
                </div>

                <div className='header__right'>
                        <p> Book a Space</p>
                        <LanguageIcon />
                        <ExpandMoreIcon />
                        <Avatar />

                </div>
            
        </div>
    )
}

export default Header
