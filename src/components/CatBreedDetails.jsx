import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBreedDetails } from "../services/cats.service";
import { styled } from "styled-components";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import toast from "react-hot-toast";

const Page = styled.div`
  padding: 2rem;
`;

const CatBreedDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);


  useEffect(() => {
      (async () => {
        try {
          const data = await getBreedDetails(id);
          if (data.status === 200) {
            setDetails(data.data);
            toast.success("Data Fetched Successfuly Details", {
              style: {
                position: "relative",
                top: "100px",
                background: "green",
                color: "white",
              },
            });
          }
        } catch (error) {
          toast.error("Error fetching cat details", {
            style: {
              position: "relative",
              top: "100px",
              background: "red",
              color: "white",
            },
          });
        }
      })();
  }, []);

  if (!details) {
    return (
      <Page>
        <center>
          <h1>Loading...</h1>
          {/* here we can add loader  */}
        </center>
      </Page>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        "& > :not(style)": {
          m: 1,
          width: 500,
        },
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "98vh",
        width: "95vw",
        // border: "1px solid black",
      }}
    >
      {" "}
      <Link
        to="/"
        style={{
          width: "55%",
          height: "5%",
          fontSize: "20px",
          position: "relative",
          top: "40px",
        }}
      >
        <strong>Home </strong>
      </Link>
      <Paper
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "90%",
          // border: "1px solid blue",
        }}
      >
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          style={{ height: "10%" }}
        >
          Breed Details
        </Typography>
        <div
          style={{
            // border: "2px solid red",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <img
            src={details.url}
            alt="Breed"
            width={400}
            height={250}
            style={{ borderRadius: "20px", alignSelf: "center" }}
          />

          {details?.breeds?.map((breed) => {
            return (
              <div key={breed.id}>
                <div>
                  <strong>Name: </strong> {breed.name}
                </div>
                <div>
                  <strong>Origin: </strong> {breed.origin}
                </div>
                <div>
                  <strong>Weight (metrics): </strong> {breed.weight.metric}
                </div>
                <div>
                  <strong>Hairless:</strong> {breed.hairless}
                </div>
                <div>
                  <strong>Wikipedia URL:</strong>{" "}
                  <a
                    href={breed.wikipedia_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {breed.wikipedia_url}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Paper>
    </Box>
  );
};

export default CatBreedDetails;
