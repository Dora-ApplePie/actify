import React from 'react';
import {useState} from 'react';
import {
    createStyles,
    Container,
    Avatar,
    UnstyledButton,
    Group,
    Text,
    Menu,
    Tabs,
    Burger,
    rem,
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {
    IconLogout,
    IconHeart,
    IconStar,
    IconMessage,
    IconSettings,
    IconPlayerPause,
    IconTrash,
    IconSwitchHorizontal,
    IconChevronDown,
} from '@tabler/icons-react';

import Logo from '../../assets/img/logo-inv.png';
import {ToggleIcon} from "../utils/ToggleIcon";

const useStyles = createStyles((theme) => ({
    header: {
        paddingTop: theme.spacing.lg,
        backgroundColor: theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
        borderBottom: `${rem(1)} solid ${
            theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background
        }`,
    },

    mainSection: {
        paddingBottom: theme.spacing.xs,
    },

    user: {
        color: theme.white,
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        transition: 'background-color 100ms ease',

        '&:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background!,
                0.1
            ),
        },

        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('xs')]: {
            display: 'none',
        },
    },

    userActive: {
        backgroundColor: theme.fn.lighten(
            theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background!,
            0.1
        ),
    },

    tabs: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    tabsList: {
        borderBottom: '0 !important',
    },

    tab: {
        fontWeight: 500,
        height: rem(38),
        color: theme.white,
        backgroundColor: 'transparent',
        borderColor: theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,

        '&:hover': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background!,
                0.1
            ),
        },

        '&[data-active]': {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background!,
                0.1
            ),
            borderColor: theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
        },
        '&[data-active]::before': {
            backgroundColor: theme.colors.brandLime[7],
        }
    },
    spanTitle: {
        fontSize: 20,
        fontWeight: 400,
        color: theme.colors.brandLime[5],
    }
}));

interface HeaderTabsProps {
    user: {
        name: string
        image: string
    };
    tabs: string[]
}

export function Header({user, tabs}: HeaderTabsProps) {
    const {classes, theme, cx} = useStyles();
    const [opened, {toggle}] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const items = tabs.map((tab) => (
        <Tabs.Tab value={tab} key={tab}>
            {tab}
        </Tabs.Tab>
    ));

    return (
        <div className={classes.header}>
            <Container className={classes.mainSection} size={"xl"}>
                <Group position="apart">
                    <Group spacing={15}>
                        <img src={Logo} alt={'logo'} width={40}/>
                        <span className={classes.spanTitle}>Actify</span>
                    </Group>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        className={classes.burger}
                        size="sm"
                        color={theme.white}
                    />
                    <Group spacing="xs">
                        <Menu
                            width={260}
                            position="bottom-end"
                            transitionProps={{transition: 'pop-top-right'}}
                            onClose={() => setUserMenuOpened(false)}
                            onOpen={() => setUserMenuOpened(true)}
                            withinPortal
                        >
                            <Menu.Target>
                                <UnstyledButton
                                    className={cx(classes.user, {[classes.userActive]: userMenuOpened})}
                                >
                                    <Group spacing={10}>
                                        <Avatar src={user.image} alt={user.name} radius="xl" size={30}/>
                                        <Text weight={500} size="md" sx={{lineHeight: 1, color: theme.white}} mr={3}>
                                            {user.name}
                                        </Text>
                                        <IconChevronDown size={rem(12)} stroke={1.5}/>
                                    </Group>
                                </UnstyledButton>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item
                                    icon={<IconHeart size="0.9rem" stroke={1.5} color={theme.colors.red[6]}/>}
                                >
                                    Liked
                                </Menu.Item>
                                <Menu.Item
                                    icon={<IconStar size="0.9rem" stroke={1.5} color={theme.colors.yellow[6]}/>}
                                >
                                    Saved
                                </Menu.Item>
                                <Menu.Item
                                    icon={<IconMessage size="0.9rem" stroke={1.5} color={theme.colors.blue[6]}/>}
                                >
                                    Your comments
                                </Menu.Item>

                                <Menu.Label>Settings</Menu.Label>
                                <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5}/>}>
                                    Account settings
                                </Menu.Item>
                                <Menu.Item icon={<IconSwitchHorizontal size="0.9rem" stroke={1.5}/>}>
                                    Change account
                                </Menu.Item>
                                <Menu.Item icon={<IconLogout size="0.9rem" stroke={1.5}/>}>Logout</Menu.Item>

                                <Menu.Divider/>

                                <Menu.Label>Danger zone</Menu.Label>
                                <Menu.Item icon={<IconPlayerPause size="0.9rem" stroke={1.5}/>}>
                                    Pause subscription
                                </Menu.Item>
                                <Menu.Item color="red" icon={<IconTrash size="0.9rem" stroke={1.5}/>}>
                                    Delete account
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <ToggleIcon/>
                    </Group>
                </Group>
            </Container>
            <Container size={"sm"}>
                <Tabs
                    defaultValue="My Profile"
                    variant={"outline"}
                    classNames={{
                        root: classes.tabs,
                        tabsList: classes.tabsList,
                        tab: classes.tab,
                    }}
                >
                    <Tabs.List>{items}</Tabs.List>
                </Tabs>
            </Container>
        </div>
    );
}
