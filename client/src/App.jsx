import Menu from "./pages/Menu"
import { Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import PublicRoutes from "./components/PublicRoutes"
import PrivateRoutes from "./components/PrivateRoutes"
import Registro from "./pages/Registro"
import SocketEjemplo from "./pages/SocketEjemplo"

const App = () => {


  return (
    <>
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          } />
          <Route path="/registro" element={
            <PublicRoutes>
              <Registro />
            </PublicRoutes>
          } />
          <Route path="/" element={
            <PrivateRoutes>
              <Menu />
              <Inicio />
            </PrivateRoutes>
          }/>
          <Route path="/socket" element={
            <PrivateRoutes>
              <Menu />
              <SocketEjemplo />
            </PrivateRoutes>
          }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App