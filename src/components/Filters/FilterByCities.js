import React from "react";
import "../../stylesheets/form-cities.scss";

const FilterByCities = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "city",
    });
  };

  /*  
 FILTRO COMO FILTER BY NAME

 return (
    <>
      <label className="form__label" htmlFor="city">
        City:
      </label>
      <input
        className="form__input"
        type="text"
        name="city"
        id="city"
        value={props.FilterByCities}
        onChange={handleChange}
      />
    </>
  );

FILTRO COMO GENDER

 return (
    <>
      <label className="form__label" htmlFor="city">
        City:
      </label>
      <select
        className="form__input"
        name="city"
        id="city"
        value={props.FilterByCities}
        onChange={handleChange}
      >
        <option value="">All</option>
        <option value="Lille">Lille</option>
        <option value="Vikersund">Vikersund</option>
        <option value="Vitry-sur-Seine">Vitry-sur-Seine</option>
      </select>
    </>

}; */

  /*const renderCities = () => {
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
  };*/

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

  /*return (
    <>
      <label className="form__label display-block" htmlFor="city">
        City:
      </label>
      <ul className="filterCities">{renderCities()}</ul>
    </>
  );*/
};

export default FilterByCities;
