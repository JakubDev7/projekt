import {Grid, Card, CardMedia, CardContent, Typography} from "@mui/material";
import {styled} from "@mui/system";

const StyledCard = styled(Card)`
  height: 100%;
`;

export const RecipesList = ({recipes}) => {
    return (
        <Grid
            container
            rowSpacing={3}
            columnSpacing={5}
            padding={{xs: 0, md: 3, lg: 5}}
        >
            {recipes.map((recipe, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                    <StyledCard>
                        <CardMedia
                            sx={{height: 400}}
                            image={recipe.recipe.image}
                            title="recipe"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                                {recipe.recipe.label}
                            </Typography>
                            {recipe.recipe.ingredientLines.map((ingredientLine, idx) => (
                                <Typography gutterBottom variant="h6" component="div" key={idx}>
                                    {ingredientLine}
                                </Typography>
                            ))}
                        </CardContent>
                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    );
};
