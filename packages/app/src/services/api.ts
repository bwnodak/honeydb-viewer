export interface BadHost {
  count: number;
  last_seen: string;
  remote_host: string;
}

export const getBadHosts = async (): Promise<BadHost[]> => {
  const data = await get("/bad-hosts") as BadHost[];
  return data.map((host) => ({
    ...host,
    count: parseInt(`${host.count}`, 10)
  }));
};

export interface Geolocation {
  city: string;
  country_iso: string;
  country_name: string;
  latitude: number;
  longitude: number;
  postal_code: string;
  region_iso: string;
  region_name: string;
}

export const getGeo = async (ip: string): Promise<Geolocation> => {
  return get(`/netinfo/geolocation/${ip}`) as Promise<Geolocation>;
};

export type ApiResponse = BadHost[] | Geolocation;

const get = async (endpoint: string): Promise<ApiResponse> => {
  const url = `${process.env.REACT_APP_API_URL}${endpoint}`;
  const headers = new Headers({
    "Authorization": `Bearer ${process.env.REACT_APP_API_SECRET}`,
    "Content-Type": "application/json",
  })
  const response = await fetch(url, {
    headers,
    method: "GET",
    redirect: 'follow'
  });

  if (response.status === 200) {
    let json = await response.json();
    return json.data;
  } else {
    throw new Error("Problem with API request");
  }
};
