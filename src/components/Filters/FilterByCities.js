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
        <li key={index}>
          <label className="form__label">
            <input
              className="form__inputCity"
              type="checkbox"
              name="city"
              value={city}
              checked={props.filterCities.includes(city)}
              onChange={handleChange}
            />
            {city}
          </label>
        </li>
      );
    });
  };

  return (
    <>
      <label className="form__label display-block" htmlFor="city">
        City:
      </label>
      <ul className="filterCities">{renderCities()}</ul>
    </>
  );
};

export default FilterByCities;
