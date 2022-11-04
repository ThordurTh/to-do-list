function ListItem(props) {
  //props.deleteTask
  return (
    <li>
      <p>{props.task}</p>
      <button onClick={() => props.deleteTask(props.id)}>Complete</button>
    </li>
  );
}

export default ListItem;
