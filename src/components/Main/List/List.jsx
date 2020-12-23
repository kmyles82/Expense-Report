import React, { useContext } from 'react'
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'

import useStyles from './styles'
import { ExpenseTrackerContext } from '../../../context/context'

let List = () => {
    const classes = useStyles()
    const {deleteTransaction} = useContext(ExpenseTrackerContext)

    // console.log(globalState)
    
    const transactions = [
        { id: 1, type: "Income",  category: "Salary", amount: 50, date: "Wed Dec 23"},
        { id: 2, type: "Expense",  category: "Business", amount: 50, date: "Wed Dec 24"},
        { id: 3, type: "Income",  category: "Business", amount: 50, date: "Wed Dec 25"},
        { id: 4, type: "Expense",  category: "Salary", amount: 50, date: "Wed Dec 26"},
    ]

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={deleteTransaction(transaction.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List
