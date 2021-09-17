function TodoFilter({ filterItems }) {
  return (
    <div>
      <button
        onClick={() => filterItems('all')}
      >
        All
      </button>
      <button
        onClick={() => filterItems('done')}
      >
        Done
      </button>
      <button
        onClick={() => filterItems('undone')}
      >
        Undone
      </button>
    </div>
  )
}

export default TodoFilter;