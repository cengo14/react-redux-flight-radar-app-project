import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../utils/api";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  const params = {
    bl_lat: "34.480238",
    bl_lng: "24.594651",
    tr_lat: "43.914447",
    tr_lng: "43.662137",
    limit: "300",
  };
  const res = await api.get("/flights/list-in-boundary", { params });
  console.log(res.data);

  const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
    rotation: i[4],
  }));

  return formatted;
});
export const getDetail = createAsyncThunk("/detail/getDetail", async (id) => {
  const res = await api.get(`/flights/detail?flight=${id}`);
  return res.data;
});
