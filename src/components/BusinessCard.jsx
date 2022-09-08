import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";

export default function BusinessCard(props) {
  const businessData = props.data;
  return (
    <div className="cardDiv">
      <Card className="card">
        <CardMedia component="img" height="180" image={props.data?.image_url} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            {props.data?.name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Değerlendirme
          </Typography>
          <Rating name="read-only" value={props.data?.rating} readOnly /> <br/>
          <Typography variant="h7" color="text.secondary">
            Oylama: {props.data?.review_count}
          </Typography> <br/>
          <div className="button-div">
          <Link to={`Business/${businessData.id}`} className="link"> <Button>Detay</Button></Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
