import React from "react";
import PropTypes from "prop-types";

const RadioGroup = ({ label, name, options, inputRef }) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      <div>
        {options.map(({ label: optionLabel, value }, index) => {
          return (
            <div key={index}>
              <input
                id={index}
                name={name}
                type="radio"
                value={value}
                ref={inputRef}
              />
              <label htmlFor={index}>
                <span>{optionLabel}</span>
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  )
};
export default RadioGroup;