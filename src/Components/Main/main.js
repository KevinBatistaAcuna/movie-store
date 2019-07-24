import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MovieList from '../MovieList/movieList';
import Header from '../Header/header';

function Main(){

    return(
        <React.Fragment>
            <Header />
            <MovieList />
        </React.Fragment>
    )
}
export default Main