
const Tab = ({value, tab, setTab}) => {
  return (
    <label className={tab === value ?  "tab active" : "tab"}>
      <input 
        className="radio-btn" 
        name="tab" 
        type="radio" 
        checked={tab === value}
        onChange={()=> setTab(value)}
      />
      {value}
    </label>
  )
}

export default Tab
