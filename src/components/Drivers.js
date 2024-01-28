import React, { useMemo } from 'react';
import { useTable, useRowSelect } from 'react-table';
import './table.css';
import DATA_DRIVERS from './drivers.json';
import Actions from './Actions';


export const Drivers = () => {

  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "name"
    },
    {
      Header: "Id",
      accessor: "id"
    }
  ], []);
  const data = useMemo(() => DATA_DRIVERS, []);

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
    hooks => {
      hooks.visibleColumns.push(columns => [...columns,
      {
        id: 'selection',
        Cell: ({ row }) =>
          <Actions row={row}></Actions>
      },
      ])
    }
  )

  return (
    <>
      <h1>Drivers</h1>
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