import { createApi } from "@reduxjs/toolkit/query/react";
import { HttpMethod } from "../../constants/httpMethods";
import { baseUrl } from "../../constants";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const apiSlices = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: () => ({
        url: "/about",
        method: HttpMethod.GET,
      }),
    }),
  }),
});

export const { useGetAboutQuery } = apiSlices;
