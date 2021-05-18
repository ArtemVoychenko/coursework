import React from 'react';
import HeaderNav from "./HeaderNav/headerNav";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Home/home";
import DetailPage from "./DetailsPage/detailPage";

export default class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                        <HeaderNav/>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/movie/:id" component={DetailPage}/>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
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



