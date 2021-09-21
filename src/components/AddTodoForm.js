import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlice'

const AddTodoForm = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onSubmit = (event) => {
    event.preventDefault()
    if (value) {
      dispatch(
        addTodo({
          title: value
        })
      )
    }
    setValue('')
  }

  return (
    <form 
      onSubmit={onSubmit}
      className="form"
    >
      <input 
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="form-input"
      />
      <button
        type='submit'
        className="form-button"
      >
				Submit
			</button>
    </form>
  )
}

export default AddTodoForm;