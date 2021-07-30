import Iframe from "react-iframe";

export default function Dashboard() {
  return (
    <div>
      <Iframe
        url="https://clockify.me/tracker"
        width="450px"
        height="450px"
        position="relative"
      />
    </div>
  );
}
