import React from "react";
import {Fragment} from "react";
import HeaderCartButton from './HeaderCartButton';
import burgerHeader1 from '../../assets/burgerHeader1.jpg';
import classes from './Header.module.css';

const Header = props => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>Davey's Burgers</h1>
            <HeaderCartButton />
        </header>
        <div className={classes['main-image']}>
            <img src={burgerHeader1} alt='Daveys Burgers' />
        </div>
    </Fragment>
    )
};

export default Header;