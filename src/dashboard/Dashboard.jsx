import React, { useEffect, useState } from "react";
import { getBreedDetails, getCatBreeds } from "../services/cats.service";
import AppBar from "../components/AppBar";
import CatBreed from "../components/CatBreed";
import "../dashboard/Dashboard.css";
import toast from "react-hot-toast";

function Dashboard() {
  const [bridData, setBridData] = useState(null);

  const gettingBridData = async () => {
    try {
      const data = await getCatBreeds();
      if (data.status === 200) {
        setBridData(data.data);
        toast.success("Data Fetched Successfuly", {
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
  };

  useEffect(() => {
    gettingBridData();
  }, []);

  return (
    <div className="Dashboard">
      <AppBar />
      <div className="Brid-Box">
        {bridData?.map((catBreeds) => (
          <CatBreed key={catBreeds.id} catBreeds={catBreeds} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
