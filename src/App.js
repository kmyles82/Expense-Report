import React from 'react'
import { Grid } from '@material-ui/core'

import Details from './components/Details/Details'
import Main from './components/Main/Main'
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui'
import useStyles from './styles'

const App = () => {
    const classes = useStyles()

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={2}
        alignItems='center'
        justify='center'
        style={{ height: '100vh' }}
      >
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  )
}

export default App
