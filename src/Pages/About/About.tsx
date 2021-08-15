import styles from "./About.module.css"
import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "../../Components/Marker/Marker"
// import InfoWindow from 'google-map-react';
const About = () => {

  const API_KEY = process.env.REACT_APP_GOOGLE_CLOUD_MAPS_API_KEY;
  // const Marker = ({text}: any) => <div>{text}</div>;
  const [center] = useState({lat: 29.127611, lng: -25});
  const [zoom] = useState(1);
  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#444444"
            }
        ]
    }, 
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
          {
              color: "#FAEDD6"
          }
      ]
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
        {
            visibility: "off"
        }
    ]
},
{
  featureType: "road",
  elementType: "all",
  stylers: [
      {
          saturation: -100
      },
      {
          lightness: 45
      }
  ]
},
{
  featureType: "road.highway",
  elementType: "all",
  stylers: [
      {
          visibility: "simplified"
      }
  ]
},
{
  featureType: "road.arterial",
  elementType: "labels.icon",
  stylers: [
      {
          visibility: "on"
      }
  ]
},
{
  featureType: "transit",
  elementType: "all",
  stylers: [
      {
          visibility: "on"
      }
  ]
},
{
  featureType: "water",
  elementType: "all",
  stylers: [
      {
          color: "#003c66"
      },
      {
          visibility: "on"
      }
  ]
},
  ],
    };
  };

  return  (
    <div className={styles.center}>
      
    <div  className={styles.map}>
     <h1 className={styles.title}>About</h1>
    <GoogleMapReact
      bootstrapURLKeys={{ key: String(API_KEY) }}
      defaultCenter={center}
      defaultZoom={zoom}
      options={getMapOptions}
      
    >
      <Marker
      name="My Marker"
      text="hello"
        lat={28.143670}
        lng={12.580566}
        center = {{lat:40, lng:19}}
      />
       <Marker
      name="My Marker"
      text="hello"
        lat={40}
        lng={19}
        center = {{lat:40, lng:19}}
        
      />
      
       
    </GoogleMapReact>
  </div>
  </div>
);
};

export default About;
