import React, { Component } from "react";
import { AppointmentPicker } from "react-appointment-picker";
import "../../stylesheets/appointment.scss";

export default class App extends Component {
  state = {
    loading: false,
    continuousLoading: false,
  };

  addAppointmentCallback = ({
    addedAppointment: { day, number, time, id },
    addCb,
  }) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(
          `Added appointment ${number}, day ${day}, time ${time}, id ${id}`
        );
        addCb(day, number, time, id);
        this.setState({ loading: false });
      }
    );
  };

  removeAppointmentCallback = ({ day, number, time, id }, removeCb) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(
          `Removed appointment ${number}, day ${day}, time ${time}, id ${id}`
        );
        removeCb(day, number);
        this.setState({ loading: false });
      }
    );
  };

  render() {
    const days = [
      [
        { id: 9, number: 1, periods: 4 },
        { id: 10, number: 2, periods: 4 },
        { id: 11, number: 3, isReserved: true, periods: 4 },
        { id: 12, number: "4", periods: 4 },
      ],
      [
        { id: 9, number: 1, periods: 4 },
        { id: 10, number: 2, periods: 4 },
        { id: 11, number: 3, isReserved: true, periods: 4 },
        { id: 12, number: "4", periods: 4 },
      ],
      [
        { id: 9, number: 1, periods: 4 },
        { id: 10, number: 2, periods: 4 },
        { id: 11, number: 3, isReserved: true, periods: 4 },
        { id: 12, number: "4", periods: 4 },
      ],
      [
        { id: 13, number: 1, periods: 4 },
        { id: 14, number: 2, periods: 4 },
        { id: 15, number: 3, isReserved: true, periods: 4 },
        { id: 16, number: "4", periods: 4 },
      ],
      [
        { id: 9, number: 1, periods: 4 },
        { id: 10, number: 2, periods: 4 },
        { id: 11, number: 3, isReserved: true, periods: 4 },
        { id: 12, number: "4", periods: 4 },
      ],
      [
        { id: 21, number: 1, isReserved: true, periods: 4 },
        { id: 22, number: 2, isReserved: true, periods: 4 },
        { id: 23, number: "3", isReserved: true, periods: 4 },
        { id: 24, number: "4", isReserved: true, periods: 4 },
      ],
    ];
    const { loading } = this.state;
    return (
      <div className="App">
        <h1 className="App__title">Book a consultation</h1>
        <AppointmentPicker
          addAppointmentCallback={this.addAppointmentCallback}
          removeAppointmentCallback={this.removeAppointmentCallback}
          initialDay={new Date("2021-02-01")}
          days={days}
          maxReservableAppointments={3}
          alpha
          visible
          selectedByDefault
          loading={loading}
        />
      </div>
    );
  }
}
