import React from "react";
import FilterByName from "../Filters/FilterByName";
import FilterByGender from "../Filters/FilterByGender";
import FilterByCities from "../Filters/FilterByCities";

const Filters = (props) => {
  return (
    <section>
      <form className="form">
        <FilterByName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
        />
        <FilterByGender
          filterGender={props.filterGender}
          handleFilter={props.handleFilter}
        />
        <FilterByCities
          filterCities={props.filterCities}
          cities={props.cities}
          handleFilter={props.handleFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
