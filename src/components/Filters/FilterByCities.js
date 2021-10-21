import React from "react";
import PropTypes from "prop-types";

const FilterByCities = ({ cities, handleFilter, FilterByCities }) => {
  const handleChange = (ev) => {
    handleFilter({
      value: ev.target.value,
      key: "city",
    });
  };

  const renderCities = () => {
    return cities.map((city, index) => {
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
          value={FilterByCities}
          onChange={handleChange}
        >
          <option value="">All</option>
          {renderCities()}
        </select>
      </div>
    </>
  );
};

FilterByCities.propTypes = {
  specie: PropTypes.string,
};

export default FilterByCities;
