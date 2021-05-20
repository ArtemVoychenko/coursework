import React, {Component} from 'react';
import {API_KEY_3, API_URL} from "../../api/api";
import queryString from "query-string";
import '../../styles/index.css';




class DetailPage extends Component {

    state = {
        movie: {}
    };

    componentDidMount() {
        const id = this.props.match?.params?.id;

        const queryStringParams = {
            api_key: API_KEY_3,
            language: "ru-RU",
        };

        const link = `${API_URL}/movie/${id}?${queryString.stringify(
            queryStringParams
        )}`;
        fetch(link)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                this.setState({
                    movie: data
                })
            });
    }



    render() {
        const {movie} = this.state;


        return (
            <div className="container mainPage" style={{backgroundImage:`url("https://image.tmdb.org/t/p/w500${movie.backdrop_path}")`}}>
                <div className="opacityPage">
                <div className="page" style={{backgroundImage:`url("https://image.tmdb.org/t/p/w500${movie.poster_path}")`}}>
                </div>
                    <div className="pageText">
                        <h1 style={{color:"blue", textAlign:"center"}}>{movie.title}</h1>
                        <hr/>
                        <h3 style={{color:"blue"}}>Обзор:</h3>
                        <h6 style={{color:"white"}}>{movie.overview}</h6>
                        <hr/>
                        <h3 style={{color:"blue"}}>Дата релиза:</h3>
                        <h7 style={{color:"white"}}>{movie.release_date}</h7>
                        <hr/>
                        <h3 style={{color:"blue"}}>Рейтинг:</h3>
                        <h7 style={{color:"white"}}>{movie.vote_average}</h7>
                    </div>
                </div>
            </div>

        );
    }
}



export default DetailPage;