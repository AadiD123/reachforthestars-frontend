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
      name="Arrianna Dawkins"
      text="Hello everyone! My name is Arrianna Dawkins and I am from Kingston, Jamaica. I am a senior in high school and I intend to earn my Bachelors in Information Systems. Outside of school, I am passionate about being creative."
      lat={18.109581}
      lng={-77.297508}
        // center = {{lat:40, lng:19}}
        
      />
      <Marker
      name="Adit Sinha Roy"
      text="Why Hello There! My name is Adit Sinha Roy and I am a newly joined member of RFTS."
        lat={51.253777}
        lng={-85.323212}
        // center = {{lat:40, lng:19}}
      />
       <Marker
      name="Alizay Hassan"
      text="Hi! My name is Alizay Hassan and I'm a sophomore in highschool. At RFTS, I am a Team Member of the Human Resources Department."
        lat={44.156610}
        lng={-77.046130}
        // center = {{lat:40, lng:19}}
        
      />
       <Marker
      name="Amy Park"
      text="Hey! My name is Amy Park and I am a secretary part of the Administration team. I’m an upcoming junior who is absolutely both terrified and excited for the new school year."
        lat={36.169090}
        lng={-115.140580}
        // center = {{lat:40, lng:19}}
        
      />
       <Marker
      name="Anusheh Ahad"
      text="Hey everyone! My name is Anusheh Ahad and I am from Ontario, Canada. I am going to be entering grade 11 in the following year!"
      lat={51.253777}
      lng={-85.323212}
        // center = {{lat:40, lng:19}}
        
      />
       <Marker
      name="Bernie Baschkier"
      text="Hi everyone! My name is Bernie Baschkier and I am an Executive Director and Co-Head of the Administration Department. I am a high school senior in South Florida, but I am originally from Argentina! "
      lat={27.664827}
      lng={-81.515755}
        // center = {{lat:40, lng:19}}
        
      />

      <Marker
      name="Bobo Chan"
      text="Hi there! My name is Bobo Chan, and I am a Human Resources team member and Volunteer Team Leader. I will be attending university in Ontario, Canada for business administration but I was originally born and raised in Hong Kong. "
      lat={51.253777}
      lng={-85.323212}
        // center = {{lat:40, lng:19}}
        
      />
       <Marker
      name="Busola Olagunju"
      text="My name is Busola Olagunju and I live in Lagos, Nigeria. At RFTS, I am an Executive Assistant in the Administration Department. I am also in the tutoring team. I am a rising sophomore who loves volunteering and reaching out to people.      "
      lat={6.524379}
      lng={3.379206}
        // center = {{lat:40, lng:19}}
        
      />

<Marker
      name="Caroline Kenney"
      text=" Hello, my name is Caroline Kenney and I am the Human Resources Team Leader at Reach for the Stars! I am from Kingston, New York but I am currently a high school senior in North Carolina. I joined RFTS to make great education more accessible for children worldwide. "
      lat={40.712776}
      lng={-74.005974}
        // center = {{lat:40, lng:19}}
        
      />
       <Marker
      name="Cateyann E Bernhard"
      text="My name is Cateyann and I am a 11th grader from New York. I have been a member of RFTS since July 2020 and I work as a member of the Secretary Team. "
      lat={40.712776}
      lng={-74.005974}
        // center = {{lat:40, lng:19}}
        
      />
        <Marker
      name=" Edana Uy"
      text="Hey everyone! I'm Edana Uy and I'm under the Media Department of RFTS. I am from Hong Kong and I'm a rising freshman! Some of my hobbies include doing calligraphy and journalling. "
      lat={22.396427}
      lng={114.109497}
        // center = {{lat:40, lng:19}}
        
      />
      
       
    </GoogleMapReact>
  </div>
  </div>
);
};

export default About;
