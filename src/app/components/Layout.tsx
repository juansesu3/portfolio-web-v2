'use client'
import { persistor, store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import UiChatBot from '@/app/components/ChatAgent/UiChatBot'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        {children}
        <UiChatBot/>
      </PersistGate>
    </Provider>
  )
}

export default Layout