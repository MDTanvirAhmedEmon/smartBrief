import { baseApi } from "../../api/baseApi";


const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllUsers: builder.query({
            query: (params) => ({
                url: `/users`,
                method: "GET",
                params,
            }),
        }),

    }),
});

export const { useGetAllUsersQuery } = userApi;