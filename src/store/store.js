import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './redusers/index';

export const store = configureStore({
    reducer
});