import PropTypes from "prop-types";

const MessageModel = {
  id: null,      // Unique identifier for the message
  text: "",      // Message content
  sender: "",    // "user" or "bot"
  timestamp: new Date(), // Message timestamp
};

// PropTypes validation
export const MessagePropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  sender: PropTypes.oneOf(["user", "bot"]).isRequired,
  timestamp: PropTypes.instanceOf(Date),
});

export default MessageModel;
