import PropTypes from "prop-types";
import "./styles.css";
function Button({ text }) {
  return <button className="Btn">{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
