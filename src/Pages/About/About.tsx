import styles from "./About.module.css";
import { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../../Components/Marker/Marker";
// import InfoWindow from 'google-map-react';
const About = () => {
  const API_KEY = process.env.REACT_APP_GOOGLE_CLOUD_MAPS_API_KEY;
  // const Marker = ({text}: any) => <div>{text}</div>;
  const [center] = useState({ lat: 29.127611, lng: -25 });
  const [zoom] = useState(1);
  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#444444",
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [
            {
              color: "#FAEDD6",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [
            {
              saturation: -100,
            },
            {
              lightness: 45,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [
            {
              visibility: "simplified",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              color: "#003c66",
            },
            {
              visibility: "on",
            },
          ],
        },
      ],
    };
  };

  return (
    <div className={styles.center}>
      <div className={styles.map}>
        <h1 className={styles.title}>About</h1>
        <GoogleMapReact
          bootstrapURLKeys={{ key: String(API_KEY) }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={getMapOptions}
        >
          <Marker
            name="Adit Sinha Roy"
            text="Why Hello There! My name is Adit Sinha Roy and I am a newly joined member of RFTS."
            lat={51.253777}
            lng={-85.323212}
            center={{ lat: 40, lng: 19 }}
          />
          <Marker
            name="Alizay Hassan"
            text="Hi! My name is Alizay Hassan and I'm a sophomore in highschool. At RFTS, I am a Team Member of the Human Resources Department."
            lat={44.15661}
            lng={-77.04613}
            center={{ lat: 40, lng: 19 }}
          />
          <Marker
            name="Amy Park"
            text="Hey! My name is Amy Park and I am a secretary part of the Administration team. I’m an upcoming junior who is absolutely both terrified and excited for the new school year."
            lat={36.16909}
            lng={-115.14058}
            center={{ lat: 40, lng: 19 }}
          />
          <Marker
            name="Anusheh Ahad"
            text="Hey everyone! My name is Anusheh Ahad and I am from Ontario, Canada. I am going to be entering grade 11 in the following year!"
            lat={51.253777}
            lng={-85.323212}
            center={{ lat: 40, lng: 19 }}
          />
          <Marker
            name="Arrianna Dawkins"
            text="Hello everyone! My name is Arrianna Dawkins and I am from Kingston, Jamaica. I am a senior in high school and I intend to earn my Bachelors in Information Systems. Outside of school, I am passionate about being creative."
            lat={18.109581}
            lng={-77.297508}
            center={{ lat: 40, lng: 19 }}
          />
          <Marker
            name="Emily Chen"
            text="Hello! My name is Emily and I'm from California! I'm a high school Junior and a part of the Class of 2023. I hope to major in Political Science in college."
            lat={36.7783}
            lng={119.4179}
            center={{ lat: 40, lng: 19 }}
          />
          <Marker
            name="Farah Nisar"
            text="Hi! My name is Farah Nisar, and I am a tutor and an Human Resources team member at Reach for the Stars. I’m currently a freshman at Rutgers University planning to major in biomedical engineering. "
            lat={40.0583}
            lng={74.4057}
            center={{ lat: 40, lng: 19 }}
          />
          <Marker
            name="Fatou Calliste"
            text="Hello, my name is Fatou Calliste, and I am currently a junior in high school. I joined RFTS due to the pandemic and needing access to service opportunities, in addition to my desire to get involved and better my community and my world."
            lat={41.2033}
            lng={77.1945}
            center={{ lat: 40, lng: 19 }}
          />
          <Marker
            name="Fiona Xin"
            text="My name is Fiona Xin and I am from Ontario, Canada. I am currently a junior in the IB program at Alexander Mackenzie H.S. I am the Co-Head of External Affairs as the Leader of the Outreach team"
            lat={43.8563}
            lng={79.5085}
            center={{ lat: 40, lng: 19 }}
          />
          <Marker
            name="Janine Villamil"
            text="Hello! My name is Janine Villamil and I am from Southern California. Currently I am going into my senior year of high school."
            lat={36.7783}
            lng={119.4179}
            center={{ lat: 40, lng: 19 }}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default About;
