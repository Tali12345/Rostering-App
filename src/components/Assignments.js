import React, { useMemo } from 'react';
import { useTable, useRowSelect } from 'react-table';
import './table.css';
import DATA_TASKS from './tasks.json';
import DriverCell from './DriverCell';


export const Assignments = () => {

  const COLUMNS_TASKS = [
    {
      Header: "Driver",
      accessor: "",
      Cell: ({ row }) => <DriverCell row={row} ></DriverCell>
    },
    {
      Header: "Task id",
      accessor: "lineDisplayId"
    },
    {
      Header: "Day 1",
      accessor: "tasks[0].type",

    },
    {
      Header: "Day 2",
      accessor: "tasks[1].type",
    },
    {
      Header: "Day 3",
      accessor: "tasks[2].type",
    },
    {
      Header: "Day 4",
      accessor: "tasks[3].type",
    },
    {
      Header: "Day 5",
      accessor: "tasks[4].type",
    },
    {
      Header: "Day 6",
      accessor: "tasks[5].type",
    },
    {
      Header: "Day 7",
      accessor: "tasks[6].type",
    }
  ]
  const columns = COLUMNS_TASKS;
  const data = useMemo(() => DATA_TASKS, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  },
    useRowSelect,
  )

  return (
    <>
      <h1>Assignments</h1>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}