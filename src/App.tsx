import HomeTodo from "./components/HomeTodo"
import Interface from "./components/common/Interface"
import useTimeLoading from "./logic/timeLoading"
function App() {

  return (
    <>
      {
       useTimeLoading() ? <Interface/> : <HomeTodo />
      }
    </>
  )
}

export default App
