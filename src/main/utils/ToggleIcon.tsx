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
                    borderRadius: "10px",
                    borderColor: theme.colors.brandLime[4]
                })}

            >
                {dark ? <IconSun size="1.3rem" /> : <IconMoonStars size="1.3rem"/>}
            </ActionIcon>
    );
};
