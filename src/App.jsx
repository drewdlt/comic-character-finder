import { Routes, Route } from "react-router"
import SearchBar from "./SearchBar/SearchBar"
import HomePage from "./pages/HomePage"
import WritersPage from "./pages/WritersPage"

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="writers" element={<WritersPage />} />
    </Routes>
  )
}

export default App
