import React from "react";
import "../../stylesheets/form-cities.scss";

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
    </>
  );
};

export default FilterByCities;
