import React from 'react';

import FormLabelAndInput from '../../atoms/FormLabelAndInput/FormLabelAndInput';

const ChangeName = () => {
  return (
    <div>
      <FormLabelAndInput id="name" placeholder="e.g. John Kramer" label="Enter Your Name" required={false} />
    </div>
  );
};

export default ChangeName;
