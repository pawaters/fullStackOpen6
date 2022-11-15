import React from 'react'
import { useDispatch } from 'react-redux' //to get "dispatch"
import { createAnecdote } from '../reducers/anecdoteReducer' // access to reducers to impact state
import { setNotification } from '../reducers/notificationReducer'

// new component to add a note via form, the front end
const NewAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(setNotification(`Anecdote '${content}' successfully added`, 5))
    }

    return (
        <form onSubmit={addAnecdote}>
            <input name="anecdote" />
            <button type="submit">add</button>
        </form>
    )

}

export default NewAnecdote