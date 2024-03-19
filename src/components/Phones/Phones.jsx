import { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { CirclesWithBar } from "react-loader-spinner";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phoneWithFakeData);
        setPhones(phoneWithFakeData);
        setLoading(false);
      });
  }, []);

  return (
    <div className="text-center my-14">
      <h2 className="text-4xl">Phones : {phones.length}</h2>
      {loading && (
        <div className="w-[300] h-[200] flex justify-center items-center my-6">
          <CirclesWithBar
            height="100"
            width="100"
            color="#4fa94d"
            outerCircleColor="#4fa94d"
            innerCircleColor="#4fa94d"
            barColor="#4fa94d"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
      <BarChart width={1000} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default Phones;
