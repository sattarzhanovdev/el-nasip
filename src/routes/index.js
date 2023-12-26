import { Route, Routes } from "react-router-dom"
import { PUBLIC_ROUTES } from "../utils"

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        {
          PUBLIC_ROUTES.map(item => (
            <Route
              key={item.id}
              path={item.route}
              element={item.page}
            />
          ))
        }
      </Routes>
    </div>
  )
}