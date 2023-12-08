import React from 'react';
import { ComponentIDs } from '../utilities/ids';

// eslint-disable-next-line react/prop-types
const FileField = ({ onChange }) => {
  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onChange(e.target.files[0]);
    }
  };

  return <input id={ComponentIDs.fileField} type="file" onChange={handleChange} />;
};

export default FileField;
