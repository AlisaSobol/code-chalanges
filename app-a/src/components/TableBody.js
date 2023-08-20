
const TableBody = ({entry}) => {
  const entryValues = Object.values(entry);
  
  return (
    <tbody>
      <tr>
        {
          entryValues.map( (value, index) => 
            <td key={index}>
              { typeof value === 'object' ? JSON.stringify(value) : value}
            </td>
          )
        }
      </tr> 
    </tbody>
  )
}

export default TableBody
