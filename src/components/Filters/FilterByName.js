import React from "react";
import "../../stylesheets/filters/filters.scss";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
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
          value={props.filterName}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default FilterByName;
