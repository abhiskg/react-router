import { useRouteError } from "react-router-dom";
interface ErrorResponse {
  status: number;
  statusText: string;
  message: string;
}

const Error = () => {
  const error = useRouteError() as ErrorResponse;

  return (
    <div className="text-center mt-10">
      <h1>Error</h1>
      <div>{error.status}</div>
      <div>{error.statusText || error.message}</div>
    </div>
  );
};

export default Error;
