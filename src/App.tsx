import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { Provider } from 'react-redux'
import { store } from './store'

import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [carrinho, setCarrinho] = useState<Produto[]>([])
  const [favoritos, setFavoritos] = useState<Produto[]>([])

  function adicionarAoCarrinho(produto: Produto) {
    if (carrinho.find((p) => p.id === produto.id)) {
      alert('Item já adicionado')
    } else {
      setCarrinho([...carrinho, produto])
    }
  }

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
      setFavoritos(favoritosSemProduto)
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </Provider>
  )
}

export default App
