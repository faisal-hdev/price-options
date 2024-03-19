import PropTypes from "prop-types";
import { FaCheckDouble } from "react-icons/fa6";

const Feature = ({ feature }) => {
  //   console.log(feature);
  return (
    <div>
      <p className="flex items-center py-2 gap-2">
        <FaCheckDouble className="text-yellow-400 text-xl" />
        {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
