import React from 'react';
import {HashRouter} from 'react-router-dom';
import Pages from "./routes/Pages";
import Footer from "./footer/Footer";
import {Header} from "./header/Header";

const Main = () => {
    return (
        <HashRouter>
            <Header tabs={["My Profile", "Projects", "Community", "Challenges", "Voting", "Find people"]}
                    user={{"name": "Daria Golenko", "image": "https://i.pinimg.com/564x/bd/1a/f5/bd1af5e7fa134ed64c0e5bc45315c300.jpg"}}/>
            <Pages/>
            <Footer/>
        </HashRouter>
    );
};

export default Main;
