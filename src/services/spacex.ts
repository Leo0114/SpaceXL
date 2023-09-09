import { type Doc, type APISpaceXResponse } from "../types/api";

export const getLatestLaunches = async () => {
  const rest = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 12,
      },
    }),
  });
  const { docs: launches } = (await rest.json()) as APISpaceXResponse;
  return launches;
};

export const getLaunchBy = async ({ id }: { id: string }) => {
  const rest = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);
  const launch = (await rest.json()) as Doc;
  return launch;
};
