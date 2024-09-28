import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./pages/Map";
import List from "./pages/List";
import Header from "./component/Header";
import Buttons from "./component/Buttons";
import { useDispatch } from "react-redux";
import { getFlights } from "./redux/actions/index";
import Modal from "./component/Modal";

const App = () => {
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
    const timer = setInterval(() => {
      dispatch(getFlights());
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Buttons />
      <Routes>
        <Route path="/" element={<Map setDetailId={setDetailId} />} />
        <Route path="/list" element={<List setDetailId={setDetailId} />} />
      </Routes>
      {detailId && <Modal id={detailId} close={() => setDetailId(null)} />}
    </BrowserRouter>
  );
};

export default App;
