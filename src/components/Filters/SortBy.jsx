import React from 'react';
import PropTypes from "prop-types";

export default class SortBy extends React.Component {
    static propTypes = {
        sort_by: PropTypes.string.isRequired,
        onChangeFilters: PropTypes.func.isRequired
    };

    render() {
        const { sort_by, onChangeFilters}= this.props;
        return(
            <div className="form-group">
                <label htmlFor="sort_by">Сортировать по:</label>
                <select style={{cursor: "pointer"}} id="sort_by" className="form-control" name="sort_by" value={sort_by} onChange={onChangeFilters}>
                    <option value="popularity.desc">Популярные по убыванию:</option>
                    <option value="popularity.asc">Популярные по возростанию:</option>
                    <option value="vote_average.desc">Рейтинг по убыванию:</option>
                    <option value="vote_average.asc">Рейтинг по возростанию:</option>
                </select>
            </div>
        )
    }
}


