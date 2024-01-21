export const CompleteTodos = (props) => {
  const { todos, onClickCancel } = props;
  return (
    <>
      <div className="complete-area">
        <p className="title">Completed Todo</p>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickCancel(index)}>Cancel</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
