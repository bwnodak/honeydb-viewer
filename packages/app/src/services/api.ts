export type BadHostsApiResponse = Array<{
  count: string;
  last_seen: string;
  remote_host: string;
}>;

export const getBadHosts = async (): Promise<BadHostsApiResponse> => {
  return get("/bad-hosts") as Promise<BadHostsApiResponse>;
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

export const getGeo = async (ip: string): Promise<GeoApiResponse> => {
  return get(`/netinfo/geolocation/${ip}`) as Promise<GeoApiResponse>;
};

export type ApiResponse = BadHostsApiResponse | GeoApiResponse;

const get = async (endpoint: string): Promise<ApiResponse> => {
  const url = `https://honeydb.io/api${endpoint}`;
  const headers = new Headers({
    "X-HoneyDb-ApiId": process.env.REACT_APP_API_ID as string,
    "X-HoneyDb-ApiKey": process.env.REACT_APP_API_KEY as string,
    "Content-Type": "application/json",
  })
  const response = await fetch(url, {
    headers,
    method: "GET",
    redirect: 'follow'
  });

  if (response.status === 200) {
    return await response.json();
  } else {
    throw new Error("Problem with API request");
  }
};
