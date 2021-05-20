import React from 'react';
import HeaderNav from "./HeaderNav/headerNav";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Home/home";
import DetailPage from "./DetailsPage/detailPage";
import {store} from "../store/store";
import { Provider } from 'react-redux';
import Favorites from "./Favorites/favorites";


export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
            <BrowserRouter>
                        <HeaderNav/>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/favorites">
                        <Favorites/>
                    </Route>
                    <Route path="/movie/:id" component={DetailPage}/>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
            </Provider>
        );
    }
}

function About() {
    return <div>
        {/*<h2 >Здесь могла быть ваша реклама</h2>*/}
        <img className="card-img-top card-img--height"
    src={`http://risovach.ru/upload/2016/04/mem/zheleznyy-chelovek_111087770_orig_.jpg`}
    alt=""
        />
        </div>
}




