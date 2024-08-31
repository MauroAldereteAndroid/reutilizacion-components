import PropTypes from "prop-types";
import "./styles.css";

const SimpleCard = ({ data, classNaming }) => {
  if (!data) {
    return null;
  }

  const { image, title, description } = data;

  return (
    <div className={classNaming}>
      {image && (
        <img
          className={`${classNaming}__image`}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8DGs15SG9WeqaunMgdfekvhYF4_VgmxxEA&s"
          width="150"
          height="150"
        />
      )}
      {title && <p className={`${classNaming}__title`}>{title}</p>}
      {description && (
        <p className={`${classNaming}__description`}>{description}</p>
      )}
    </div>
  );
};

SimpleCard.propTypes = {
  data: PropTypes.shape,
  classNaming: PropTypes.string,
};

export default SimpleCard;
