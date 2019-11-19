import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table table-striped table-bordered">
      <caption>React.JS application</caption>
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={data} columns={columns} sortColumn={sortColumn} />
    </table>
  );
};

export default Table;
