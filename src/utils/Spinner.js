import React from 'react';
import { Oval } from 'react-loader-spinner';

const styles = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '55vh'
  };

const Spinner = () => {
  return (
    <div className="spinner-container" style={styles}>
      <Oval
        height={80}
        width={80}
        color="#0d6efd"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#0a53be"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Spinner;
