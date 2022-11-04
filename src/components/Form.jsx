function Form(props) {
  function submit(e) {
    e.preventDefault();
    props.addTask(e.target.elements.task.value);
  }

  return (
    <form onSubmit={submit}>
      <label>New Task</label>
      <input type="text" name="task" />
      <button>Add Task</button>
    </form>
  );
}

export default Form;
