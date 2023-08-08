import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter";
import { pokemonSlice } from "./slices/pokemons/";
import { todosApi } from "./apis";

export const store = configureStore({
  reducer: {
    // AL USARLO ASI NOS AHORRAMOS LA EXPORTACION DEFAULT QUE ESTABA EN EL COUNTERSELICE
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    [todosApi.reducerPath]: todosApi.reducer, // ESTE ES EL ESPACIO DONDE VOY A COLOCAR LOS RESULTADOS DE LOS QUERY QUE SE VAN A ESTAR DISPARANDO
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware), // UN MIDDLEWARE ES UNA FUNCION QUE SE EJECUTA ANTES DE OTRA
});

/* // Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch; */
