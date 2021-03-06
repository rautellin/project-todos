import { createSlice } from '@reduxjs/toolkit'

export const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [],
    options: [
      { value: 'show-all', label: 'show all' },
      { value: 'to-do', label: 'to-do' },
      { value: 'Shopping', label: 'Shopping' },
      { value: 'Work', label: 'Work' },
      { value: 'Family', label: 'Family' },
      { value: 'Personal', label: 'Personal' },
    ],
    categories: [
      { value: 'to-do', label: 'to-do' },
      { value: 'Shopping', label: 'Shopping' },
      { value: 'Work', label: 'Work' },
      { value: 'Family', label: 'Family' },
      { value: 'Personal', label: 'Personal' },
    ]
  },
  reducers: {
    addItem: (state, action) => {
      const { task, category, dueDate } = action.payload
      state.items.push({
        id: Date.now(),
        task,
        completed: false,
        category,
        startDate: Date.now(),
        dueDate,
        icon: (category === 'to-do') ? "calendar-check"
          : (category === 'Shopping') ? "shopping-cart"
            : (category === 'Work') ? "briefcase"
              : (category === 'Family') ? "heart"
                : "user"
      })
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    removeAll: (state, action) => {
      state.items = []
    },
    toggleCheckbox: (state, action) => {
      const foundItem = state.items.find((item) => item.id === action.payload)

      if (foundItem) {
        foundItem.completed = !foundItem.completed
      }
    },
  },
})
