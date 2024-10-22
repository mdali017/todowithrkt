import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "todoapi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getAllTodo: builder.query({
      query: () => ({
        url: "/api/tasks/all-todos",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => {
        // console.log(data)
        return {
          url: "/api/tasks/todo",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetAllTodoQuery, useAddTodoMutation } = baseApi;
