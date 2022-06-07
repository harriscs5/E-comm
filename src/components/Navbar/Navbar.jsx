import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { CallMissedSharp, ShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';

const Navbar = () => {
  return (
    <div>
        <AppBar position='fixed' className={CallMissedSharp.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={mergeClasses.title} color='inherit'>
                    <img src{} alt="" height='25px' className={class.image}/>
                    commerce.js
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar