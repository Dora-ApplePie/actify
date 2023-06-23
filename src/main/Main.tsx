import React from 'react';
import {HashRouter} from 'react-router-dom';
import Pages from "./routes/Pages";
import Footer from "./footer/Footer";
import {Header} from "./header/Header";

const Main = () => {
    return (
        <HashRouter>
            <Header tabs={["Account", "Community", "Forums", "My Projects", "Helpdesk"]}
                    user={{
                "name": "Daria Golenko",
                "image": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            }}/>
            <Pages/>
            <Footer/>
        </HashRouter>
    );
};

export default Main;
