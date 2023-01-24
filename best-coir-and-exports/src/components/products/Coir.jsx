import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import "./Coir.css";

const Coir = ({ coirs }) => {
  const CoirCard = coirs.map((coir) => {
    return (
      <Card
        sx={{
          maxWidth: "400px",
          background: "#fff 0% 0% no-repeat padding-box",
        }}
        className="Coir"
        key={coir.id}
        raised={true}
      >
        <CardMedia
          style={{ height: 'auto' }}
          component="img"
          height="140px"
          image={require('../../assets/images/grow-bags.jpg')}
          alt={coir.title}
          src={coir.imgUrl}
        />
        <CardHeader title={coir.title} component="h3"></CardHeader>
        <CardContent component="p">{coir.content}</CardContent>
      </Card>
    );
  });
  return <div className="post_list">{CoirCard}</div>;
};

export default Coir;
