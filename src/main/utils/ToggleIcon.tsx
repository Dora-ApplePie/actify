import {ActionIcon, Group, useMantineColorScheme} from '@mantine/core';
import {IconSun, IconMoonStars} from '@tabler/icons-react';

export function ToggleIcon() {
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
            <ActionIcon
                variant="outline"
                color={dark ? 'lime' : 'lime'}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
                style={{marginLeft: "10px"}}
                size="lg"
                sx={(theme) => ({
                    borderRadius: "7px",
                    borderColor: theme.colors.brandDark[3]
                })}

            >
                {dark ? <IconSun size="1.2rem" /> : <IconMoonStars size="1.2rem"/>}
            </ActionIcon>
    );
};
