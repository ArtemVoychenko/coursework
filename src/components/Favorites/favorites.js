import React, {Component} from 'react';
import {connect} from "react-redux";
import MovieItem from "../Movies/MovieItem";
import {addMoviesDispatcher, deleteMoviesDispatcher} from "../../store/dispachers/dispachers";



class Favorites extends Component {

    addFavoriteMovie = (movie) => {

        addMoviesDispatcher(movie)
    };

    removeFavoriteMovie = (id) => {
        deleteMoviesDispatcher(id)
    };

    render() {

        const {favoriteMovies} = this.props;
        return (
            <div className="container col-12 mb-4">
                <div className="row">
                {favoriteMovies.map(movie => {
                    const isFavorite = this.props.favoriteMovies.some(({id})=> id === movie.id);
                    return(
                        <div key={movie.id} className="col-6 mb-4">
                            <MovieItem item={movie} addFavoriteMovie={this.addFavoriteMovie} isFavorite={isFavorite} removeFavoriteMovie={this.removeFavoriteMovie}/>
                        </div>
                    );
                } )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    console.log(state);
    return state
};

export default connect(mapStateToProps)(Favorites);

