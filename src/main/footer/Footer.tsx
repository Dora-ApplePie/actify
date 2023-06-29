import React from 'react';
import {createStyles, Container, Group, Anchor, rem, Text} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(120),
        position: "absolute",
        width: '100%',
        bottom: 0,
        left: 0,
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[6]
        }`,
        backgroundColor: theme.fn.variant({variant: 'filled', color: theme.primaryColor}).background,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}));

interface FooterSimpleProps {
    links: { link: string; label: string }[];
}

export function Footer({links}: FooterSimpleProps) {
    const {classes} = useStyles();
    const items = links.map((link) => (
        <Anchor<'a'>
            color="dimmed"
            key={link.label}
            href={link.link}
            onClick={(event) => event.preventDefault()}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <Container className={classes.inner} size={"xl"}>
                <Text c="dimmed" fz="sm">© 2023 Actify. All rights reserved.</Text>
                <Group className={classes.links}>{items}</Group>
            </Container>
        </div>
    );
}
