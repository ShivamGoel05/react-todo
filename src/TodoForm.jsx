import ListItem from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Create from '@mui/icons-material/Create'
import { useState } from 'react'

export default function TodoForm({ addTodo }) {
    const [newTodo, setNewTodo] = useState("")

    const changeNewTodo = (e) => {
        setNewTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo("")
    }

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="New Todo"
                    variant="outlined"
                    value={newTodo}
                    onChange={changeNewTodo}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <IconButton edge="end" type='submit'>
                                    <Create />
                                </IconButton>
                            </InputAdornment>
                    }}
                />
            </form>
        </ListItem>
    )
}