import { useLoaderData } from "react-router-dom";
import User from "../components/User";

interface UsersData {
  id: number;
  name: string;
  phone: string;
}

const Users = () => {
  const data = useLoaderData() as UsersData[];
  return (
    <div className="grid grid-cols-4 gap-3">
      {data.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
