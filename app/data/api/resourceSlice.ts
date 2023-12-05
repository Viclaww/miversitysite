import build from "next/dist/build";
import { generalApiSlice } from "./generalApiSlice";

export const resourceSlice = generalApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    requestResource: builder.mutation({
      query: (body) => ({
        url: "/api/v1/request",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRequestResourceMutation } = resourceSlice;
