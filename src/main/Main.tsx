import React from 'react';
import {HashRouter} from 'react-router-dom';
import Pages from "./routes/Pages";
import Footer from "./footer/Footer";
import {Header} from "./header/Header";

const Main = () => {
    return (
        <HashRouter>
            <Header tabs={["My Profile", "Projects", "Community", "Challenges", "Voting", "Find people"]}
                    user={{"name": "Daria Golenko", "image": "https://ltdfoto.ru/images/2023/06/23/profile-photo.jpg"}}/>
            <Pages/>
            <Footer/>
        </HashRouter>
    );
};

export default Main;
