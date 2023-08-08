import { createSlice } from "@reduxjs/toolkit";
/* THUNKS: SON ACCIONES ASINCRONAS QUE DISPARAN OTRAS ACCIONES QUE PUEDEN SER POSITIVAS O EN CASO DE QUE LA PETICION GENERE UN ERROR */
const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
