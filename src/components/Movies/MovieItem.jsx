import React from 'react';
import {Link} from "react-router-dom";

export default class MovieItem extends React.Component{
    render() {
        const { item, addFavoriteMovie, removeFavoriteMovie, isFavorite } = this.props;
        const onFavoriteClick = ()=> {
            isFavorite ? removeFavoriteMovie(item.id) : addFavoriteMovie(item)

        }

        return(
            <div>
                <div className="card" style={{width: "100%"}}>
                    <Link to={`movie/${item.id}`} style={{textDecoration: "none", color:"blue"}}>
                        <img className="card-img-top card-img--height"
                            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`}
                             alt=""
                        />
                    </Link>

                    <div className="card-body">
                        <h6 className="card-title">{item.title}</h6>
                        <div className="card-text">Рейтинг: {item.vote_average}</div>
                    </div>
                    {isFavorite ? (<p style={{marginLeft: "90%", color:"black", cursor: "pointer"}} onClick={onFavoriteClick}>
                        &#9733;
                    </p>) : (<p style={{marginLeft: "90%", color:"black", cursor: "pointer"}} onClick={onFavoriteClick}>
                        &#9734;
                    </p>)}
                </div>
            </div>
        );
    }
}