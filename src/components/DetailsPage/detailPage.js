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
            <div className="container mainPage">
                <div className="page" style={{backgroundImage:`url("https://image.tmdb.org/t/p/w500${movie.poster_path}")`}}>
                </div>
                    <div className="pageText">
                        <h1 style={{color:"blue"}}>{movie.title}</h1>
                        <hr/>
                        <h5 style={{color:"black"}}>Обзор:</h5>
                        <h6 style={{color:"black"}}>{movie.overview}</h6>
                        <hr/>
                        <h5 style={{color:"black"}}>Дата релиза:{movie.release_date}</h5>
                        <hr/>
                        <h5 style={{color:"black"}}>Рейтинг: {movie.vote_average}</h5>
                    </div>
            </div>

        );
    }
}



export default DetailPage;