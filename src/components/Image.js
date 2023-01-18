import React, { useState } from "react";

const Image = () => {
  const { fields, setFields } = useState({});
  return (
    <div>
      <label>Url</label>
      <input name="url" />
    </div>
  );
};

export default Image;
