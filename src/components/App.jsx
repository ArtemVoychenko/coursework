import React from 'react';
import Filters from './Filters/Filters';
import MoviesList from './Movies/MovieList';

export default class App extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="row nt-4">
                    <div className="col-4">
                        <div className="card" style={{width: "100%"}}>
                            <div className="card-body">
                                <h3>Фильтры:</h3>
                                <Filters/>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <MoviesList/>
                    </div>
                </div>
            </div>
        );
    }
}