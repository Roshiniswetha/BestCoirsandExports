import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import {CoirProducts} from "../../data/db"

const Coir = () => {
  const CoirCard = CoirProducts.map((coir) => {
    return (
      <Card
        sx={{
          maxWidth: "600px",
          background: "#fff 0% 0% no-repeat padding-box",
        }}
        className="coir_card"
        key={coir.id}
        raised={true}
      >
        <CardMedia
          className='coir_image'
          style={{ height: '400px' }}
          component="img"
          image={coir.image}
          alt={coir.title}
          src={coir.image}
        />
        <CardHeader title={coir.title} component="h3"></CardHeader>
        <CardContent component="p">{coir.content}</CardContent>
      </Card>
    );
  });
  return <div className="post_list">{CoirCard}</div>;
};

export default Coir;
