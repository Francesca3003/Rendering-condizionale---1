import { useEffect, useState } from "react";

function Clock() {
  const [date, SetDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      SetDate(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Current time: {date.toLocaleTimeString()}</h2>
    </div>
  );
}
export default Clock;
