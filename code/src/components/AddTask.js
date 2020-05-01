import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todo } from '../reducers/todo'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'
import { Button } from '../styles/Button'
import { Subtitle } from '../styles/Text'

export const AddTask = () => {
  const [task, setTask] = useState('')
  const [category, setCategory] = useState('')
  const [dueDate, setDueDate] = useState()

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(todo.actions.addItem({ task, category, dueDate })) // name, category, duedate as payload
    setTask('')
    setCategory('')
    setDueDate('')
  }

  const enabled = task.length > 0 && dueDate > 0 && category.length > 0

  const Container = styled.form`
    display: flex;
    flex-direction: column;
  `;

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <Subtitle>Add a new task</Subtitle>
        <label>
          Category:
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value='' selected>select...</option>
            <option value='To-Do' selected>To-Do</option>
            <option value='Shopping'>Shopping</option>
            <option value='Work'>Work</option>
            <option value='Family'>Family</option>
            <option value='Personal'>Personal</option>
          </select>
        </label>

        <label>
          Task:
          <input
            type='text'
            value={task}
            placeholder='+ add a new task'
            onChange={(event) => setTask(event.target.value)}
          />
        </label>

        <label>
          Due date:
          <DatePicker onChange={(date) => setDueDate(date)} selected={dueDate} />
        </label>

        <Button type='submit' disabled={!enabled}>Add task</Button>
      </Container>
    </>
  )
}
