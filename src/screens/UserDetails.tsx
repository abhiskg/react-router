import { useLoaderData } from "react-router-dom";
const UserDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>User Details</div>;
};

export default UserDetails;
