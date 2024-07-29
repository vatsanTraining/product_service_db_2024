import React from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'
const Table = ({colRef,rowRef,handleChange}) => {
  return (
    <>
    <label>Search by Customer Name</label>
    <input type='search' name="custName" onChange={handleChange}></input>

    <table>
        <TableHead colRef={colRef}></TableHead>
        <TableBody rowRef={rowRef}></TableBody>
    </table>
    </>
  )
}

export default Table