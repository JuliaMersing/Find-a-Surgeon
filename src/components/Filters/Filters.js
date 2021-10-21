import React from "react";
import FilterByName from "../Filters/FilterByName";
import FilterByGender from "../Filters/FilterByGender";
import FilterByCities from "../Filters/FilterByCities";
import "../../stylesheets/filters/filters.scss";

const Filters = ({
  filterName,
  handleFilter,
  filterGender,
  filterCities,
  cities,
}) => {
  return (
    <section>
      <form className="form">
        <FilterByName filterName={filterName} handleFilter={handleFilter} />
        <FilterByGender
          filterGender={filterGender}
          handleFilter={handleFilter}
        />
        <FilterByCities
          filterCities={filterCities}
          cities={cities}
          handleFilter={handleFilter}
        />
      </form>
    </section>
  );
};

export default Filters;
