import React from 'react';
import {Loader, Center} from "@mantine/core";

const Profile = () => {
    return (
        <Center maw={1000} h={600} mx="auto">
            <Loader color="lime" size="xl"/>
        </Center>
    );
};

export default Profile;
