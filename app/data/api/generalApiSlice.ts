import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: "https://miversity-general.onrender.com",
});

export const generalApiSlice = createApi({
    baseQuery,
    endpoints: (builder) => ({}),
})

