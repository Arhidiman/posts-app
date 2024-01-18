import {AppRouter} from "@/app/router/AppRouter.tsx";
import {ReduxProvider} from "@/app/providers";

function App() {
  return (
      <ReduxProvider>
        <AppRouter/>
      </ReduxProvider>
  )
}

export default App
