import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ pOption }) => {
  const { price, name, features } = pOption;
  //   console.log(features);
  return (
    <div className="bg-blue-500 rounded p-6 text-white flex flex-col justify-between">
      <div className="text-center">
        <h3>
          <span className="text-6xl font-extrabold">{price}</span>
          <span className="text-xl">/mon</span>
        </h3>
        <h4 className="text-2xl my-4">{name}</h4>
      </div>
      <div>
        {features.map((feature, idx) => (
          <Feature feature={feature} key={idx} />
        ))}
        <button className="bg-amber-400 w-full py-2 rounded mt-4 font-medium text-xl hover:bg-amber-500 duration-100">
          Buy Now
        </button>
      </div>
    </div>
  );
};

PriceOption.propTypes = {
  pOption: PropTypes.object,
};

export default PriceOption;
