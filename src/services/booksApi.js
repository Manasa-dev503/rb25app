// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/books' }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => ``,
    }),
    addbook: builder.mutation({
      query: (newbook) => {
        return {
          url: '/',
          method: 'POST',
          body:newbook
        }
      }
    }),
    deletebook: builder.mutation({
      query: (index) =>{

        return {
          url : `/${index}`,
          method: 'DELETE'
        }
      }

    }),
    updatebook: builder.mutation({
      query: (updatedbook) =>{
        return {
          url : `/${updatedbook.id}`,
          method: 'PUT',
          body: updatedbook
        }

      }
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllBooksQuery,useAddbookMutation,useLazyGetAllBooksQuery,useDeletebookMutation,useUpdatebookMutation } = booksApi 