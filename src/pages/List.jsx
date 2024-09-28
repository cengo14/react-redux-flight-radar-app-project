import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../component/Loader";
import Error from "../component/Error";
import ReactPaginate from "react-paginate";

const List = ({ setDetailId }) => {
  const { isLoading, error, flights } = useSelector((store) => store.flight);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = flights.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(flights.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % flights.length;

    setItemOffset(newOffset);
  };
  if (isLoading)
    return (
      <div className="my-5 list-loader">
        <Loader />
      </div>
    );
  if (error)
    return (
      <div className="my-5">
        <Error error={error} />
      </div>
    );
  return (
    <div className="p-3 p-md-4 w-100">
      <table className="table table-dark table-striped table-hover table-responsive mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          {currentItems.map((flight) => (
            <tr>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button
                  onClick={() => setDetailId(flight.id)}
                  className="btn btn-info"
                >
                  Detay
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="İleri>"
        onPageChange={handlePageClick}
        className="pagination"
        pageRangeDisplayed={15}
        pageCount={pageCount}
        previousLabel="<Geri"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default List;
