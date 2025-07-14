import { baseApi } from "../../api/baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        register: builder.mutation({
            query: (data) => ({
                url: '/users/sign-up',
                method: 'POST',
                body: data,
            }),
        }),

        logIn: builder.mutation({
            query: (LogInData) => ({
                url: '/auth/sign-in',
                method: 'POST',
                body: LogInData,
            }),
        }),


    }),
});

export const { useRegisterMutation, useLogInMutation } = authApi;