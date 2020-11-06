const API = "https://honeydb.io/api";
const API_KEY = process.env.REACT_APP_API_KEY as string;
const AUTH_HEADER = "X-HoneyDb-ApiId";

export type BadHostsApiResponse = Array<{
  count: string;
  last_seen: string;
  remote_host: string;
}>;

export const getBadHosts = async (): Promise<{}> => {
  return get("/bad-hosts");
};

export interface GeoApiResponse {
  city: string;
  country_iso: string;
  country_name: string;
  latitude: number;
  longitude: number;
  postal_code: string;
  region_iso: string;
  region_name: string;
}

export const getGeo = async (ip: string): Promise<{}> => {
  return get(`/netinfo/geolocation/${ip}`);
};

export type ApiResponse = BadHostsApiResponse | GeoApiResponse;

const get = async (endpoint: string): Promise<ApiResponse> => {
  const url = `${API}${endpoint}`;
  const response = await fetch(url, {
    headers: {
      [AUTH_HEADER]: API_KEY,
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  if (response.status === 200) {
    return await response.json();
  } else {
    throw new Error("Problem with API request");
  }
};
