import styles from "./About.module.css";
import { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../../Components/Marker/Marker";
import { getAllBios } from "../../Backend/db/dbfunctions";
import { useEffect } from "react";
import { db } from "../../Backend/Firebase";
// import InfoWindow from 'google-map-react';
import firebase from "firebase";

const About = () => {
  const API_KEY = process.env.REACT_APP_GOOGLE_CLOUD_MAPS_API_KEY;
  // const Marker = ({text}: any) => <div>{text}</div>;
  const [center] = useState({ lat: 29.127611, lng: -25 });
  const [zoom] = useState(1);
  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
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

  interface BioInterface {
    name: string;
    location: firebase.firestore.GeoPoint;
    bio: string;
  }
  const [bios, setBios] = useState<BioInterface[]>();

  useEffect(() => {
    let allBios: BioInterface[] = [];
    // db.collection("bios")
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       allBios.push({
    //         name: doc.get("name"),
    //         location: doc.get("location"),
    //         bio: doc.get("bio"),
    //       });
    //     });
    //     setBios(allBios);
    //   })
    //   .catch((error) => {
    //     console.log("error getting documents: ", error);
    //   });
  });

  return (
    <div className="mainContainer">
      <div className={styles.map}>
        <h1 className="title">About</h1>
        <GoogleMapReact
          bootstrapURLKeys={{ key: String(API_KEY) }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={getMapOptions}
        >
          {/* {bios?.map((bio) => (
            <Marker
              name={bio.name}
              text={bio.bio.substr(0, 100)}
              lat={bio.location.latitude}
              lng={bio.location.longitude}
            />
          ))} */}

          <Marker
            name="Alizay Hassan"
            text="Hi! My name is Alizay Hassan and I'm a sophomore in highschool. At RFTS, I am a Team Member of the Human Resources Department."
            lat={44.15661}
            lng={-77.04613}
            // center = {{lat:40, lng:19}}
          />
          <Marker
            name="Amy Park"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            lat={36.16909}
            lng={-115.14058}
            // center = {{lat:40, lng:19}}
          />
          <Marker
            name="Anusheh Ahad"
            text="Hey everyone! My name is Anusheh Ahad and I am from Ontario, Canada. I am going to be entering grade 11 in the following year!"
            lat={51.253777}
            lng={-85.323212}
            // center = {{lat:40, lng:19}}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default About;
