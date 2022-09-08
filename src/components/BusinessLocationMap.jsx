import React from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  marginLeft: 0,
  border: "1px solid #00a79d",
  borderRadius: "0.8em",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

function BusinessLocationMap({ lat, lng }) {
  console.log(lat, lng)
  return (

<>
      {
      lat && lng ? (
        <div
        style={{
          height: 350,
          width: "100%",
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "center",
          padding: 0,
        }}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{
            lat,
            lng,
          }}
          zoom={16}
          useStaticMap={true}
          options={options}
        >
          <MarkerF position={{ lat, lng }} />

        </GoogleMap>
      </div>
      ) : null
      }
      
</>
  );
}

export default React.memo(BusinessLocationMap);
