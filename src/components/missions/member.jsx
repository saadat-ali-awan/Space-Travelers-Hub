import PropTypes from 'prop-types';

const Member = (props) => {
  const { reserved } = props;
  return (
    <>
      {reserved && (
        <p className="badge bg-info m-0 text-nowrap">ACTIVE MEMBER</p>
      )}
      {!reserved && (
        <p className="badge bg-secondary m-0 text-nowrap">NOT A MEMBER</p>
      )}
    </>
  );
};

Member.propTypes = {
  reserved: PropTypes.bool,
};

Member.defaultProps = {
  reserved: false,
};
export default Member;
