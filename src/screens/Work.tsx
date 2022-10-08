import { useLoaderData } from "react-router-dom";
const Work = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>Work</div>;
};

export default Work;
