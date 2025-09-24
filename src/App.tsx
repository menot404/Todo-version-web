import HomeTodo from "./components/HomeTodo"
import Interface from "./components/common/Interface"
import useTimeLoading from "./logic/timeLoading"
import { ThemeProvider } from "./components/Theme-provider"

function App() {

  return (
    <>
      {
        useTimeLoading() ? <Interface/> 
          :
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <HomeTodo />
      </ThemeProvider>
        
      }
    </>
  )
}

export default App
