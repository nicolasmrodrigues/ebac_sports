import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      if (state.itens.find((produto) => produto.id === action.payload.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions

export default carrinhoSlice.reducer
