import "../App.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BusinessLocationMap from "./BusinessLocationMap";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Rating from "@mui/material/Rating";
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { Link } from "react-router-dom";




function Business() {
  const [datas, setDatas] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const getBusiness = async () => {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}?locale=tr_TR`;
    const getBusiness = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY_APP}`,
      },
    });
    const datas = await getBusiness.json();
    setDatas(datas);
    setLoading(false);
  };
  useEffect(() => {
    getBusiness();
  }, []);
  document.body.style.backgroundColor = "#ECD9C8";
 
  if (loading) {
    return <div className="business__loading">Yükleniyor...</div>;
  }
  return (
   <div>
     <div className="arrowRoundBack">
    <Link to="/" >< ReplyAllIcon sx={{ fontSize: 40 }}/></Link>
 
    </div>
    <div className="business-detail">
      <div>
         <img
          className="business-detail-img"
          src={datas?.image_url}
          alt="işletme görseli"
        />
     </div>
     
     <div className="business-timeline">
     <Timeline position="alternate" >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <BadgeOutlinedIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 3 }}>
          <Typography variant="h5" component="span">
          {datas?.name}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <LocalPhoneOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 1 }}>
          <Typography variant="h6" component="span">
            Telefon
          </Typography>
          <Typography>{datas?.display_phone}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HomeOutlinedIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 3 }}>
          <Typography variant="h6" component="span">
            Adres
          </Typography>
          <Typography>{datas?.location?.display_address}</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="primary" variant="outlined">
            <ControlPointOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 1 }}>
          <Typography variant="h6" component="span">
            Değerlendirme
          </Typography>
          <Typography><Rating
        name="text-feedback"
        value={datas?.rating ?? " "}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      /></Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    
    </div>
    </div>
    <div className="details__map">
            <BusinessLocationMap 
              lat={datas?.coordinates?.latitude}
              lng={datas?.coordinates?.longitude}
            
            /></div><br/>
    
    </div>
  );
}
export default Business;
