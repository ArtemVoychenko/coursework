import React, {Component} from 'react';
import Filters from "../Filters/Filters";
import MoviesList from '../Movies/MovieList'

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            filters: {
                sort_by: "popularity.desc",
                primary_release_year: "2018",
                with_genres: []
            },
            page: 1,
            total_pages: ""
        };
    }


    onChangeFilters = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState(prevState => ({
            filters: {
                ...prevState.filters,
                [name]: value
            }
        }));
    };

    onChangePagination = ({ page, total_pages = this.state.total_pages }) => {
        this.setState({
            page,
            total_pages
        });
    };

    render() {
        const { filters, page, total_pages } = this.state;
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-4">
                        <div className="sidebar-filter">
                            <div className="card cardNew" style={{ width: "100%" }}>
                                <div className="card-body">
                                     <h3>Фильтры:</h3>
                                        <Filters
                                page={page}
                                total_pages={total_pages}
                                filters={filters}
                                onChangeFilters={this.onChangeFilters}
                                onChangePagination={this.onChangePagination}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                    <MoviesList
                        filters={filters}
                        page={page}
                        onChangePagination={this.onChangePagination}
                    />
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;