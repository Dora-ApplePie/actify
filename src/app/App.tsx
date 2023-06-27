import React, {useState} from 'react';
import Main from "../main/Main";
import {ColorScheme, ColorSchemeProvider, MantineProvider} from '@mantine/core';
import {useColorScheme} from "@mantine/hooks";

function App() {
    const preferredColorScheme = useColorScheme('dark');
    const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{
                colorScheme,
                colors: {
                    brandLime: ['#F4FCE3', '#E9FAC8', '#D8F5A2', '#C0EB75', '#A9E34B', '#94D82D', '#82C91E', '#74B816', '#66A80F', '#5C940D'],
                    brandDark: ['#C1C2C5', '#A6A7AB', '#909296', '#5C5F66', '#373A40','#2C2E33', '#323436', '#2e2e31', '#202023', '#101113']
                },
                primaryColor: 'brandDark',
            }} withGlobalStyles withNormalizeCSS>
                <Main/>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;
