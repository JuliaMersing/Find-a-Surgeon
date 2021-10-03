import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import UserList from "./Users/UserList";
import UserDetail from "./Users/UserDetail";
import Filters from "../components/Filters/Filters";
import getApiData from "../services/api";
import ls from "../services/local-storage";
import "../stylesheets/app.scss";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const App = () => {
  const [users, setUsers] = useState(ls.get("users", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterGender, setFilterGender] = useState(ls.get("filterGender", ""));
  const [filterCities, setFilterCities] = useState(ls.get("filterCities", []));

  useEffect(() => {
    if (users.length === 0) {
      getApiData().then((usersData) => {
        setUsers(usersData);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("users", users);
  }, [users]);

  useEffect(() => {
    ls.set("users", users);
    ls.set("filterName", filterName);
    ls.set("filterGender", filterGender);
    ls.set("filterCities", filterCities);
  }, [users, filterName, filterGender, filterCities]);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "gender") {
      setFilterGender(data.value);
    } else if (data.key === "city") {
      if (filterCities.includes(data.value)) {
        const newFilterCities = filterCities.filter(
          (city) => city !== data.value
        );
        setFilterCities(newFilterCities);
      } else {
        filterCities.push(data.value);
        setFilterCities([...filterCities]);
      }
    }
  };

  const filteredUsers = users
    .filter((user) => {
      return user.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((user) => {
      if (filterGender === "") {
        return true;
      } else {
        return user.gender === filterGender;
      }
    })
    .filter((user) => {
      if (filterCities.length === 0) {
        return true;
      } else {
        return filterCities.includes(user.city);
      }
    });

  const renderUserDetail = (props) => {
    const routeUserId = props.match.params.userId;
    const foundUser = users.find((user) => {
      return user.id === routeUserId;
    });

    if (foundUser !== undefined) {
      return <UserDetail user={foundUser} />;
    } else {
      return <p>User not found</p>;
    }
  };

  const getCities = () => {
    const userCities = users.map((user) => user.city);
    let uniqueCities = [...new Set(userCities)];
    return uniqueCities;
  };

  return (
    <>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Header />
            <div className="col2">
              <Filters
                filterName={filterName}
                filterGender={filterGender}
                filterCities={filterCities}
                cities={getCities()}
                handleFilter={handleFilter}
              />
              <UserList users={filteredUsers} />
            </div>
          </Route>
          <Route path="/user/:userId" render={renderUserDetail} />
        </Switch>
        <Footer />
      </div>
    </>
  );
};

export default App;
