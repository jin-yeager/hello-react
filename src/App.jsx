// App.jsx
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import MyState from './MyState'

function App() {
    return (
        <Provider store={store}>
            <MyState />
            <MyState />
        </Provider>
    )
}

export default App
