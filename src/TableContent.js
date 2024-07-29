import React from 'react'
import Table from './Table'

const TableContent = () => {
    const colRef = ["Order Number","Customer Name","Order Value"]
    const rowRef=[{},{}]
  return (
    <div>
        <Table colRef={colRef} rowRef={rowRef}></Table>
    </div>
  )
}

export default TableContent