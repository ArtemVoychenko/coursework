import {createSlice} from '@reduxjs/toolkit';


const favoriteMovies = {
    name: 'favoriteMovies',
    initialState: [],
    reducers: {
        addMovies: (state, action) => {
            state.push(action.payload)
        },
        deleteMovies: (state, action) => {
            const index = state.map(movie => movie.id).indexOf(action.payload);
            if (index !== -1){
                state.splice(index,1);
            }
        }
    }
};

export const {reducer, actions} = createSlice(favoriteMovies);