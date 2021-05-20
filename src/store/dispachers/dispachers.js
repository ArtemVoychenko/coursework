import {store} from '../store';
import {actions} from "../redusers/redusers";

const {dispatch} = store;
const {addMovies, deleteMovies} = actions;

export const addMoviesDispatcher = (movie) => dispatch(addMovies(movie));
export const deleteMoviesDispatcher = (id) => dispatch(deleteMovies(id));
