import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);
  return (
    <header>
      <Link to="/">
        <img src="/flightradar.png" alt="logo" />
        <h2>Flight Radar</h2>
      </Link>
      <h4>
        {isLoading
          ? "Uçuşlar aranıyor..."
          : error
          ? "Hata Oluştu"
          : `${flights.length} Uçuş Bulundu`}
      </h4>
    </header>
  );
};

export default Header;
