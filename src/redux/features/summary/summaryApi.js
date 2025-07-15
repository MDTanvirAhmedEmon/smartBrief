import { baseApi } from "../../api/baseApi";


const summaryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        createSummary: builder.mutation({
            query: (data) => ({
                url: '/summary/create',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['summary']
        }),

        getMySummary: builder.query({
            query: () => ({
                url: `/summary/my-summary`,
                method: "GET",
            }),
            providesTags: ['summary']
        }),

        getSingleSummary: builder.query({
            query: (id) => ({
                url: `/summary/${id}`,
                method: "GET",
            }),
        }),

        getAllSummary: builder.query({
            query: (params) => ({
                url: `/summary`,
                method: "GET",
                params,
            }),
            providesTags: ['summary']
        }),

        deleteSummary: builder.mutation({
            query: (id) => ({
                url: `/summary/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['summary']
        }),

        updateSummary: builder.mutation({
            query: ({ data, id }) => ({
                url: `/summary/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['summary']
        })

    }),
});

export const { useCreateSummaryMutation, useGetSingleSummaryQuery, useGetMySummaryQuery, useGetAllSummaryQuery, useDeleteSummaryMutation, useUpdateSummaryMutation } = summaryApi;