
const TableHeader = ({entry}) => {  
  const entryKeys = Object.keys(entry);

  return (
    <thead>
      <tr>
        {
          entryKeys.map((value, index) => <th key={index}>{value}</th>)
        }
      </tr>
    </thead>
  )
}

export default TableHeader
