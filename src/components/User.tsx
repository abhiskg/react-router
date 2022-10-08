import { Link } from "react-router-dom";
interface UserProps {
  user: {
    id: number;
    name: string;
    phone: string;
  };
}

const User = (props: UserProps) => {
  const { id, name, phone } = props.user;
  return (
    <Link
      to={`../user/${id}`}
      className="text-center border-2 border-lime-500 p-3 hover:bg-slate-300 cursor-pointer"
    >
      <h2>{id}</h2>
      <div>{name}</div>
      <div>{phone}</div>
    </Link>
  );
};

export default User;
