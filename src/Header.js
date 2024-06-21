import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
    return (
        <Box sx={{flexGrow: 1, mb: 2}}>
            <AppBar position="static" sx={{backgroundColor: '#631563'}}>
                <Toolbar sx={{height: '100px'}}>
                    <Box sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                    }}>
                        <Typography variant="h4" component="div">
                            Recipe finder
                        </Typography>
                        <Typography variant="h6" component="div">
                            search your own recipe
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
