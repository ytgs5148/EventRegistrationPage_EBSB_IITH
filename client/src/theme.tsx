import { ThemeOptions, alpha } from '@mui/material/styles';

export default function getCheckoutTheme(): ThemeOptions {
    return {
        palette: {
            mode: 'dark',
            background: {
                default: '#090E10',
            },
        },
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    notchedOutline: {
                        border: 'none'
                    },
                    root: () => ({
                        boxSizing: 'border-box',
                        flexGrow: 1,
                        maxHeight: 40,
                        height: '100%',
                        borderRadius: '10px',
                        borderColor: '#364049',
                        backgroundColor: alpha('#131B20', 0.4),
                    }),
                    input: {
                        paddingLeft: 10,
                    },
                },
            },
        },
    };
}