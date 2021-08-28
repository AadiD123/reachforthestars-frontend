import styles from "./About.module.css";
import { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../../Components/Marker/Marker";
import { useEffect } from "react";
import { db } from "../../Backend/Firebase";
import firebase from "firebase";

const generateShortBio = (bio: string): string => {
  let res = "";
  let first = false;
  for (let i = 0; i < bio.length; i++) {
    if (bio[i] === "." || bio[i] === "!") {
      res += bio[i];
      if (first) {
        return res;
      } else if (res.length > 100) {
        return res;
      }
      first = true;
    } else {
      res += bio[i];
    }
  }
  return res;
};

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
    img: string;
  }
  const [bios, setBios] = useState<BioInterface[]>([]);

  useEffect(() => {
    if (bios.length > 0) {
      return;
    }
    let allBios: BioInterface[] = [];
    db.collection("bios")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          allBios.push({
            name: doc.get("name"),
            location: doc.get("location"),
            bio: doc.get("bio"),
            img: doc.get("img"),
          });
        });
        setBios(allBios);
        localStorage.setItem("biosArray", JSON.stringify(allBios));
      })
      .catch((error) => {
        console.log("error getting documents: ", error);
      });
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
          {bios?.map((bio) => (
            <Marker
              name={bio.name}
              text={generateShortBio(bio.bio)}
              lat={bio.location.latitude}
              lng={bio.location.longitude}
              src={bio.img}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default About;
