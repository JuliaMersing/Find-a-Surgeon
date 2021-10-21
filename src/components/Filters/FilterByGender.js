import React from "react";
import PropTypes from "prop-types";

const FilterByGender = ({ filterGender, handleFilter }) => {
  const handleChange = (ev) => {
    handleFilter({
      value: ev.target.value,
      key: "gender",
    });
  };
  return (
    <>
      <div className="form__container">
        <label className="form__label" htmlFor="gender">
          Gender:
        </label>
        <select
          className="form__input"
          name="gender"
          id="gender"
          value={filterGender}
          onChange={handleChange}
        >
          <option value="">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="no-binary">No-binary</option>
        </select>
      </div>
    </>
  );
};

FilterByGender.propTypes = {
  specie: PropTypes.string,
};

export default FilterByGender;
