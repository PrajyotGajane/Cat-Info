
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const CatBreed = ({ catBreeds, getCatById }) => {
  if (!catBreeds) {
    return (
      <center>
        <h1>Loading...</h1>
        {/* here we can add loader */}
      </center>
    );
  }

  return (
    <Card sx={{ width: 300, height:350,marginBottom:"15px" }}>
      <img src={catBreeds?.url} alt="" style={{width:"100%",height:"65%"}} />
      <CardContent sx={{ height:45}}>
        {catBreeds.breeds?.map((breed) => (
          <div>
            <Typography gutterBottom variant="h5" component="div">
              {breed.name}
            </Typography>
            <Typography variant="h7" color="text.secondary">
              Origin - {breed.origin}
            </Typography>
          </div>
        ))}
      </CardContent>
      <CardActions>
        <Link
          size="small"
          to={`/details/${catBreeds.id}`}
        >
          View Details
        </Link>
      </CardActions>
    </Card>
  );
};

export default CatBreed;
