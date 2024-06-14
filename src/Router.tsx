import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History/History'
import { DefaultLayout } from './layouts/DeafultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
      <Route />
    </Routes>
  )
}

/* path - qual o endereço que apessoa estara acessando
element - qual componente vai carregar nesse caminho do path */
