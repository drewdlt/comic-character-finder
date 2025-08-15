import { Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"
import WritersPage from "./pages/WritersPage"
import CharacterLookUpPage from "./pages/ChracterLookUpPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="lookup" element={<CharacterLookUpPage />} />
      <Route path="writers" element={<WritersPage />} />
    </Routes>
  )
}

export default App
