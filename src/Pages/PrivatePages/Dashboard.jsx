import { useAuth } from "../../Backend/Contexts/AuthContext";

export default function Dashboard() {
  return <div>{useAuth().currentUser.uid}</div>;
}
