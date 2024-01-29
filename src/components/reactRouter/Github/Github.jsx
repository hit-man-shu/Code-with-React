import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     const getData = async () => {
  //       try {
  //         const data = await fetch("https://api.github.com/users/hit-man-shu");
  //         const newData = await data.json();
  //         setData(newData);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     getData();
  //   }, []);

  return (
    <div className="m-4 flex items-center justify-between bg-gray-600 p-4 text-center text-3xl text-white ">
      <img src={data.avatar_url} alt="Github avatar" width={300} />
      <div>Github Followers: {data.followers}</div>
      <div>Github Bio: {data.bio}</div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const data = await fetch("https://api.github.com/users/hit-man-shu");
  return data.json();
};
