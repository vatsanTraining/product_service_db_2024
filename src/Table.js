import React from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'
const Table = ({colRef,rowRef}) => {
  return (
    <table>
        <TableHead colRef={colRef}></TableHead>
        <TableBody rowRef={rowRef}></TableBody>
    </table>
  )
}

export default Table