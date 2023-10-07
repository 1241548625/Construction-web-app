import React from "react";

const FormInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;

  return (
    <div>
      <label>{label}</label>
      {props.type === "textarea" ? (
        <textarea {...inputProps} onChange={onChange} />
      ) : (
        <input {...inputProps} onChange={onChange} />
      )}
    </div>
  );
};

export default FormInput;
