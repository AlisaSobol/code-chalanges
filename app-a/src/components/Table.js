import TableHeader from "./TableHeader";
import TableBody from "./TableBody";


const Table = ({entries}) => {
  return (
    <>
      { entries.length ? 
        <table>
          <TableHeader entry={entries[0]}/>
          {entries.map(entry => <TableBody key={entry.id} entry={entry}/>)}
        </table>
        : null  
      }
    </>


    
  )
}

export default Table
