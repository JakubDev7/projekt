import {TextField} from "@mui/material";
import {InputAdornment} from "@mui/material";
import {IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useState, useEffect} from "react";

export const Searchbar = ({setRecipes}) => {
    const [query, setQuery] = useState("chicken");

    async function fetchRecipes() {
        const response = await fetch(
            `https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=fcff602c&app_key=1ee0813908ac6da7fe05fe00cc60373a`,
        );
        const data = await response.json();
        setRecipes(data.hits);
    }

    function handleChange(event) {
        setQuery(event.target.value);
    }

    useEffect(() => {
        fetchRecipes();
        // eslint-disable-next-line
    }, [query]);

    return (
        <TextField
            label="Search"
            onChange={handleChange}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={fetchRecipes}>
                            <SearchIcon/>
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            InputLabelProps={{
                sx: {
                    color: '#631563',
                    '&.Mui-focused': {
                        color: '#800080',
                    },
                },
            }}
            fullWidth
            sx={{
                width: '80%',
                margin: 'auto',
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#631563',
                    },
                    '&:hover fieldset': {
                        borderColor: '#800080',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#800080',
                    },
                },
            }}
        />
    );
};
