import Iframe from "react-iframe";

export default function LogTutoringHours() {
  return (
    <div>
      <h1>Log Service Hours</h1>
      <Iframe
        url="https://clockify.me/tracker"
        width="700px"
        height="500px"
        id="myId"
        className="myClassname"
        display="block"
        position="relative"
      />
    </div>
  );
}
