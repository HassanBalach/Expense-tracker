import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://api.github.com/users/HassanBalach")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);
  return (
    <div className="bg-green-800 text-white p-4 text-center text-4xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="" />
      <div className="text-left m-4  font-bold ">
        {data.login}
        <p>{data.bio}</p>
        
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async()=>{
   const res= await fetch('https://api.github.com/users/HassanBalach');
    return res.json();
}