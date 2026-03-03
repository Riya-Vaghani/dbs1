import { useNavigate } from "react-router-dom";

function Seats() {
  const navigate = useNavigate();

  const seats = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="container">
      <h1>Select Your Seats</h1>

      <div>
        {seats.map((seat) => (
          <button key={seat}>{seat}</button>
        ))}
      </div>

      <br />
      <button onClick={() => navigate("/booking")}>
        Confirm Booking
      </button>
    </div>
  );
}

export default Seats;
