/* EL RTK QUERY TAL VEZ ES UN POCO TEDIOSO CONFIGURAR PERO AYUDA MUCHO AL MOMENTO DE HACER PETICIONES HTTP YA QUE NOS PERMITE CONTROLAR LAS PETICIONES HTTP, TAMBIEN NOS PERMITE CONTROLAR LA CACHE DE LAS PETICIONES */
// PODRIAMOS CREAR UN SNIPET DE ESTO
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
    getTodo: builder.query({
      query: (todoId) => `/todos/${todoId}`, // SI HAGO ESTO YA TENGO A MI DISPOSICION EL useGetTodoQuery
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoQuery } = todosApi; // ESTO ME CREA UN CUSTOM HOOK
