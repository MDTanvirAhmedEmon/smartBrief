import { baseApi } from "../../api/baseApi";


const summaryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        createSummary: builder.mutation({
            query: (data) => ({
                url: '/summary/create',
                method: 'POST',
                body: data,
            }),
        }),

        getMySummary: builder.query({
            query: () => ({
                url: `/summary/my-summary`,
                method: "GET",
            }),
        }),

        getAllSummary: builder.query({
            query: (params) => ({
                url: `/summary`,
                method: "GET",
                params,
            }),
        }),

        deleteSummary: builder.mutation({
            query: (id) => ({
                url: `/summary/${id}`,
                method: 'DELETE',
            }),
        }),

        updateSummary: builder.mutation({
            query: ({ data, id }) => ({
                url: `/summary/${id}`,
                method: 'PATCH',
                body: data,
            }),
        })

    }),
});

export const { useCreateSummaryMutation, useGetMySummaryQuery, useGetAllSummaryQuery, useDeleteSummaryMutation, useUpdateSummaryMutation } = summaryApi;