import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { message } from 'antd';
import { setUser } from '../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState()).logInUser.token;
        if (token) {
            headers.set('authorization', `${token}`);
        }
        return headers;
    },
});

const baseQueryWithLogoutOnError = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 401) {
        // Log out user and clear session
        api.dispatch(setUser({ user: null, token: null }));
        message.error('Session expired. Please log in again.');
        window.location.href = '/sign-in';
    }
    return result;
};

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithLogoutOnError,
    tagTypes: ['user'],
    endpoints: () => ({}),
});
