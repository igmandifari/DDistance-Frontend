import PropTypes from "prop-types";

const EmptyState = ({ emptyStyle }) => {
  return (
    <p className={`text-center py-4 ${emptyStyle} mx-9 font-semibold`}>
      Data Is Empty
    </p>
  );
};

export default EmptyState;

EmptyState.propTypes = {
  emptyStyle: PropTypes.string,
};
