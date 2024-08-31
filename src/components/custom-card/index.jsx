import "./index.css";
import { SIMPLE_CARD, STATUS_CARD } from "./constants";
import SimpleCard from "./simple-card";
import PropTypes from "prop-types";
/**
 * CustomCard Component
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.data - The data object containing the content or information to be displayed in the card.
 * @param {string} props.classNaming - The CSS class name(s) used to style the card container.
 * @param {string} props.type - The type of card, which may determine the card's style or behavior.
 * @returns {JSX.Element} A custom card component.
 */

const CustomCard = ({ data, classNaming, type }) => {
  if (!data) {
    return null;
  }

  switch (type) {
    case SIMPLE_CARD:
      return <SimpleCard data={data} classNaming={classNaming} />;

    case STATUS_CARD:
      return (
        <div>
          <p>Status card</p>
        </div>
      );

    default:
      return (
        <div>
          <p>Default card</p>
        </div>
      );
  }
};

CustomCard.propTypes = {
  data: PropTypes.shape,
  classNaming: PropTypes.string,
  type: PropTypes.string,
};

export default CustomCard;
