import React from 'react';
import {HashRouter} from 'react-router-dom';
import Pages from "./routes/Pages";
import {Header} from "./header/Header";
import {Footer} from "./footer/Footer";

const Main = () => {
    return (
        <HashRouter>
            <Header tabs={["My Profile", "Projects", "Community", "Challenges", "Voting", "Find people"]}
                    user={{
                        "name": "Daria Golenko",
                        "image": "https://i.pinimg.com/564x/bd/1a/f5/bd1af5e7fa134ed64c0e5bc45315c300.jpg"
                    }}/>
            <Pages/>
            <Footer links={[
                {"link": "#", "label": "Blog"},
                {"link": "#", "label": "Privacy"},
                {"link": "#", "label": "Careers"},
                {"link": "#", "label": "Help center"},
                {"link": "#", "label": "Contact"}
            ]}/>
        </HashRouter>
    );
};

export default Main;
