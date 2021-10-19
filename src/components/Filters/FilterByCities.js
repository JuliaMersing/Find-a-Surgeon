import React from "react";

const FilterByCities = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "city",
    });
  };

  const renderCities = () => {
    return props.cities.map((city, index) => {
      return (
        <option key={index} value={city}>
          {city}
        </option>
      );
    });
  };

  return (
    <>
      <div className="form__container">
        <label className="form__label" htmlFor="city">
          City:
        </label>
        <select
          className="form__input"
          name="city"
          id="city"
          isClearable={true}
          value={props.FilterByCities}
          onChange={handleChange}
        >
          <option value="">All</option>
          {renderCities()}
        </select>
      </div>
    </>
  );
};

export default FilterByCities;
