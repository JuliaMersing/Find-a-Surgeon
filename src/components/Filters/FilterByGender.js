import React from "react";

const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "gender",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="gender">
        Gender:
      </label>

      <select
        className="form__input"
        name="gender"
        id="gender"
        value={props.filterGender}
        onChange={handleChange}
      >
        <option value="">All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="no-binary">No-binary</option>
      </select>
    </>
  );
};

export default FilterByGender;
