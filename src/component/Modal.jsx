import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../redux/actions";
import Loader from "./Loader";
import Error from "./Error";
import Info from "./Info";
import { removeRoute } from "../redux/slices/detailSlice";

const Modal = ({ id, close }) => {
  const dispatch = useDispatch();
  const { isLoading, error, info } = useSelector((store) => store.detail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [id]);
  const handleClose = () => {
    dispatch(removeRoute());
    close();
  };
  const isVIP = !info?.aircraft?.registration || !info?.airline.name;
  return (
    <div className="modal-outer">
      <div className="modal-inner">
        <div className="text-end">
          <button onClick={handleClose} className="btn btn-dark">
            X
          </button>
        </div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error error={error} />
        ) : isVIP ? (
          <p className="d-flex justify-content-center align-items-center bg-info">
            Uçuş bilgisi bulunmuyor
          </p>
        ) : (
          info && <Info info={info} />
        )}
      </div>
    </div>
  );
};

export default Modal;
