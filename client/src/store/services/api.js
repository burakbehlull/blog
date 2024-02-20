import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:80/api";
export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/allPosts",
        }),
    }),
});
export const { useGetPostsQuery } = postApi;