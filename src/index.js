import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from './context/context'
import { SpeechProvider } from '@speechly/react-client'

import App from './App'
import './index.css'

ReactDom.render(
  <SpeechProvider
    appId='f66cae28-d4ec-428e-b187-dd25e270c939'
    language='en-US'
  >
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
)
