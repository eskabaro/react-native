import { ContextProvider } from '@/components/context-provider/ContextProvider'
import { Navigator } from '@/components/navigation/Navigator'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from '@/store/store'

function App(): JSX.Element {
  return (
    <ContextProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <StatusBar translucent={false} />
            <Navigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ContextProvider>
  )
}

export default App
