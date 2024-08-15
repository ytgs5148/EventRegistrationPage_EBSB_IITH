import { ArrowBackRounded, ChevronRight } from "@mui/icons-material";
import { Box, Button, createTheme, CssBaseline, FormControl, FormLabel, Grid, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
import { ThemeProvider } from '@emotion/react';
import { styled } from '@mui/system';
import { useState } from "react";
import getCheckoutTheme from "../theme";
import axios from "axios";
import image from '../assets/bg.jpg'

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

const RegistrationPage = () => {
    const checkoutTheme = createTheme(getCheckoutTheme());
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [branch, setBranch] = useState('');
    const [year, setYear] = useState('');
    const [department, setDepartment] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [intro, setIntro] = useState('');

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        axios.post('https://eventregistrationpage-ebsb-iith.onrender.com/api/submit', {
            fullName,
            email,
            branch,
            year,
            department,
            rollNumber,
            intro,
        }).then(({ data }) => {
            alert(`Data has been added in the Google Spreadsheet. Redirecting you to Google Spreadsheet page`);
            window.open(data.link, '_blank');
        }).catch(err => {
            alert(`Error: ${err}`);
        })
    }

    return (
        <ThemeProvider theme={checkoutTheme}>
            <CssBaseline />
            <Grid container sx={{ height: { xs: '100%', sm: '100vh' } }}>
                <Grid item xs={12} sm={5} lg={4} sx={{ 
                    display: { xs: 'none', md: 'flex' }, 
                    flexDirection: 'column', 
                    backgroundColor: "#131b20",
                    borderRight: { sm: 'none', md: '1px solid #131b20' }, 
                    borderColor: '#BFCCD9', 
                    alignItems: 'start', 
                    px: 5, 
                    gap: 4 
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'end',
                        height: 130,
                        borderRadius: '10px',
                        padding: '12px 16px',
                        textTransform: 'none',
                        fontWeight: 500,
                    }}>
                        <Button
                            startIcon={<ArrowBackRounded />}
                            component="a"
                            href="/events"
                            sx={{ ml: '-8px', fontSize: '1rem', fontWeight: 600 }}
                        >
                            Back to Events
                        </Button>
                    </Box>
                    <Box sx={{ flexDirection: 'column', flexGrow: 1, width: '100%', maxWidth: 500 }}>
                        <Typography variant="h3" sx={{ fontWeight: 1000, letterSpacing: 4 }}>Art Contest</Typography>
                        <Typography variant="subtitle1" sx={{ mt: 1, color: '#94a6b8' }}>
                            Time: 5:30 PM - 6:30 PM
                        </Typography>
                        <Typography variant="subtitle1" sx={{ mb: 2, color: '#94a6b8' }}>
                            Venue: New Mess Lawn
                        </Typography>
                        <Typography variant="subtitle1" sx={{ mt: 4 }}>
                            • Theme: Create artwork that celebrates the beauty and diversity of language. Whether it's through calligraphy, typography, or creative wordplay, let your imagination run wild!
                        </Typography>
                        <Typography variant="subtitle1" sx={{ mt: 2 }}>
                            • Feel free to use any materials you like. From pencils to paints and colorful markers, the choice is yours.
                        </Typography>
                        <Typography variant="subtitle1" sx={{ mt: 2 }}>
                            • Participants will roughly have 90 minutes to complete their artwork.
                        </Typography>
                        <Typography variant="subtitle1" sx={{ mt: 2 }}>
                            • Once you're done, simply bring your artwork to the designated submission area. Don't forget to write your name and contact details on the back so we can reach out to the winner.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item sm={12} md={7} lg={8} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '100%',
                    alignItems: 'start',
                    pt: { xs: 2, sm: 4 },
                    px: { xs: 2, sm: 10 },
                    gap: { xs: 4, md: 8 },
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>

                    <Box sx={{ justifyContent: { sm: 'space-between', md: 'flex-end' }, alignItems: 'center', width: '100%', maxWidth: { sm: '100%', md: 600 } }}>
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between' }}>
                            <Button
                                startIcon={<ArrowBackRounded />}
                                component="a"
                                href="/"
                            >
                                Back to Events
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ flexDirection: 'column', flexGrow: 1, width: '100%', maxWidth: { sm: '100%', md: 600 }, maxHeight: '720px', gap: { xs: 5, md: 'none' } }}>
                        <Grid container spacing={3}>
                            <FormGrid item xs={12} md={12}>
                                <FormLabel htmlFor="first-name" required sx={{ marginBottom: 1 }}>
                                    Full Name
                                </FormLabel>
                                <OutlinedInput
                                    id="full-name"
                                    name="full-name"
                                    type="name"
                                    placeholder="Rudranil Basak"
                                    autoComplete="first name"
                                    required
                                    sx={{ backgroundColor: '#1c2a36', color: 'white' }}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                            </FormGrid>
                            <FormGrid item xs={12} md={12}>
                                <FormLabel htmlFor="email" required sx={{ marginBottom: 1 }}>
                                    Email
                                </FormLabel>
                                <OutlinedInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="es24btech11029@iith.ac.in"
                                    autoComplete="email"
                                    required
                                    sx={{ backgroundColor: '#1c2a36', color: 'white' }}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormGrid>
                            <FormGrid item xs={12}>
                                <FormLabel htmlFor="branch" required sx={{ marginBottom: 1 }}>
                                    Branch
                                </FormLabel>
                                <FormControl fullWidth>
                                    <Select
                                        id="branch"
                                        name="branch"
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Branch' }}
                                        defaultValue=""
                                        sx={{ backgroundColor: '#1c2a36', color: 'white' }}
                                        onChange={(e) => setBranch(e.target.value)}
                                    >
                                        <MenuItem value="" disabled>Select Branch</MenuItem>
                                        <MenuItem value="CE">CE</MenuItem>
                                        <MenuItem value="MS">MS</MenuItem>
                                        <MenuItem value="ES">ES</MenuItem>
                                    </Select>
                                </FormControl>
                            </FormGrid>
                            <FormGrid item xs={12} md={4}>
                                <FormLabel htmlFor="year" required sx={{ marginBottom: 1 }}>
                                    Year
                                </FormLabel>
                                <FormControl fullWidth>
                                    <Select
                                        id="year"
                                        name="year"
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Year' }}
                                        defaultValue=""
                                        sx={{ backgroundColor: '#1c2a36', color: 'white' }}
                                        onChange={(e) => setYear(e.target.value)}
                                    >
                                        <MenuItem value="" disabled>Select Year</MenuItem>
                                        <MenuItem value="22">22</MenuItem>
                                        <MenuItem value="23">23</MenuItem>
                                        <MenuItem value="24">24</MenuItem>
                                    </Select>
                                </FormControl>
                            </FormGrid>
                            <FormGrid item xs={12} md={4}>
                                <FormLabel htmlFor="department" required sx={{ marginBottom: 1 }}>
                                    Department
                                </FormLabel>
                                <FormControl fullWidth>
                                    <Select
                                        id="department"
                                        name="department"
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Department' }}
                                        defaultValue=""
                                        sx={{ backgroundColor: '#1c2a36', color: 'white' }}
                                        onChange={(e) => setDepartment(e.target.value)}
                                    >
                                        <MenuItem value="" disabled>Select Department</MenuItem>
                                        <MenuItem value="BTECH">Btech</MenuItem>
                                        <MenuItem value="MTECH">Mtech</MenuItem>
                                    </Select>
                                </FormControl>
                            </FormGrid>
                            <FormGrid item xs={12} md={4}>
                                <FormLabel htmlFor="roll-number" required sx={{ marginBottom: 1 }}>
                                    Roll Number
                                </FormLabel>
                                <OutlinedInput
                                    id="roll-number"
                                    name="roll-number"
                                    type="number"
                                    inputProps={{ min: 1, max: 200 }}
                                    placeholder="1-200"
                                    fullWidth
                                    sx={{ backgroundColor: '#1c2a36', color: 'white' }}
                                    onChange={(e) => setRollNumber(e.target.value)}
                                />
                            </FormGrid>
                            <FormGrid item xs={12} md={12}>
                                <FormLabel htmlFor="intro" required sx={{ marginBottom: 1 }}>
                                    Introduce Yourself
                                </FormLabel>
                                <OutlinedInput
                                    id="intro"
                                    name="intro"
                                    type="text"
                                    placeholder="Tell me more about yourself"
                                    fullWidth
                                    sx={{ backgroundColor: '#1c2a36', color: 'white' }}
                                    onChange={(e) => setIntro(e.target.value)}
                                />
                            </FormGrid>
                        </Grid>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column-reverse', sm: 'row' },
                            justifyContent: 'flex-end',
                            alignItems: 'end',
                            flexGrow: 1,
                            pb: { xs: 8, sm: 0 },
                            mt: { xs: 2, sm: 0 },
                        }}
                    >
                        <Typography variant="subtitle1" sx={{ color: '#83a6b8' }}>
                            Roll Number: {branch && `${branch}${year}${department}110${rollNumber}`}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column-reverse', sm: 'row' },
                            justifyContent: 'flex-end',
                            alignItems: 'end',
                            flexGrow: 1,
                            pb: { xs: 12, sm: 0 },
                            mt: { xs: 2, sm: 0 },
                            mb: '30px',
                        }}
                    >
                        <Button
                            variant="contained"
                            endIcon={<ChevronRight />}
                            onClick={handleSubmit}
                            disabled={!fullName || !email || !branch || !year || !department || !rollNumber || !intro}
                            sx={{
                                width: { xs: '100%', sm: 'fit-content' },
                            }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default RegistrationPage;
