import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import tw from "date-fns/locale/zh-TW";
import "react-datepicker/dist/react-datepicker.css";
registerLocale("zh-Tw", tw);
setDefaultLocale("zh-Tw");
const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      locale={"zh-TW"}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default Calendar;
