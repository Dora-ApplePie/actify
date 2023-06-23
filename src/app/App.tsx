import React from 'react';
import Main from "../main/Main";
import {MantineProvider} from '@mantine/core';

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS
                         theme={{
                             colors: {
                                 brandLime: ['#F4FCE3', '#E9FAC8', '#D8F5A2', '#C0EB75', '#A9E34B', '#94D82D', '#82C91E', '#74B816', '#66A80F', '#5C940D'],
                                 brandDark:['#C1C2C5', '#A6A7AB', '#909296', '#5C5F66', '#373A40', '#2C2E33', '#25262B', '#1A1B1E', '#141517', '#101113']
                             },
                             // THIS WILL RESUlT IN ERROR, DO NOT DO THIS
                             primaryColor: 'brandDark',
                         }}
        >
            <Main/>
        </MantineProvider>
    );
}

export default App;
