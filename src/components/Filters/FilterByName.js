import React from "react";
import PropTypes from "prop-types";
import "../../stylesheets/filters/filters.scss";

const FilterByName = ({ filterName, handleFilter }) => {
  const handleChange = (ev) => {
    handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <div className="form__container">
        <label className="form__label" htmlFor="name">
          Name:
        </label>
        <input
          className="form__input"
          type="text"
          name="name"
          id="name"
          value={filterName}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

FilterByName.propTypes = {
  specie: PropTypes.string,
};

export default FilterByName;
