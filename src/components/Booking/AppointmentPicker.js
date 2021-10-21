import React, { useState } from "react";
import DatePicker from "react-datepicker";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import "react-datepicker/dist/react-datepicker.css";
import "../../stylesheets/appointment.scss";

const App2 = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        injectTimes={[
          setHours(setMinutes(new Date(), 1), 0),
          setHours(setMinutes(new Date(), 5), 12),
          setHours(setMinutes(new Date(), 59), 23),
        ]}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </div>
  );
};

export default App2;
