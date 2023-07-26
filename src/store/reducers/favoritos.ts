import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionarAosFavoritos: (state, action: PayloadAction<Produto>) => {
      state.itens = [...state.itens, action.payload]
    },
    removerDosFavoritos: (state, action: PayloadAction<Produto>) => {
      const favoritosSemProduto = state.itens.filter(
        (produto) => produto.id !== action.payload.id
      )
      state.itens = [...favoritosSemProduto]
    }
  }
})

export const { adicionarAosFavoritos, removerDosFavoritos } =
  favoritosSlice.actions

export default favoritosSlice.reducer
