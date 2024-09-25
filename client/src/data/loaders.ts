import qs from "qs";
import { fetchAPI } from "@/lib/fetch-api";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";

const blocksQuery = {
  populate: {
    blocks: {
      on: {
        "shared.media": {
          populate: {
            file: {
              fields: ["url", "alternativeText", "name", "width", "height"],
            },
          },
        },

        "shared.slider": {
          populate: {
            files: {
              fields: ["url", "alternativeText", "name", "width", "height"],
            },
          },
        },

        "shared.quote": {
          populate: true,
        },

        "shared.rich-text": {
          populate: true,
        },
      },
    },
  },
}

export async function getHomePage() {
  const path = "/api/home";
  const url = new URL(path, BASE_URL);
  const query = qs.stringify(blocksQuery);

  url.search = query;

  const home = await fetchAPI(url.href, {
    method: "GET",
  });

  return home;
}

export async function getAboutPage() {
  const path = "/api/about";
  const url = new URL(path, BASE_URL);
  const query = qs.stringify(blocksQuery);

  url.search = query;

  const about = await fetchAPI(url.href, {
    method: "GET",
  });
  
  return about;
}
