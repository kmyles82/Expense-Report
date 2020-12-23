import React, { useState, useContext } from 'react'
import {
  FormControl,
  TextField,
  Select,
  Typography,
  Grid,
  Button,
  InputLabel,
  MenuItem,
} from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid'
import { ExpenseTrackerContext } from '../../../context/context'

import useStyles from './styles'

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  data: new Date(),
}

const Form = () => {
  const classes = useStyles()
  const [formData, setFormData] = useState(initialState)
  const { addTransaction } = useContext(ExpenseTrackerContext)

  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    }

    addTransaction(transaction)
    setFormData(initialState)
  }

  console.log(formData)

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align='center' variant='subtitle2' gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth onSubmit=''>
          <InputLabel>Type</InputLabel>
          <Select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <MenuItem value='Income'>Income</MenuItem>
            <MenuItem value='Expense'>Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <MenuItem value='business'>Busness</MenuItem>
            <MenuItem value='salary'>Salary</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <TextField
            type='number'
            label='Amount'
            fullWidth
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <TextField
            type='date'
            label='Date'
            fullWidth
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
        </FormControl>
      </Grid>
      <Button
        className={classes.button}
        variant='outlined'
        color='primary'
        fullWidth
        onClick={createTransaction}
      >
        Create
      </Button>
    </Grid>
  )
}

export default Form
