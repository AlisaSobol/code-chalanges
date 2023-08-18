import ListItem from "./ListItem";

const List = ({list}) => {
  return (
    <ul>
      { list.map(item => <ListItem key={item.id} item={item}/>)}
    </ul>
  )
}

export default List
