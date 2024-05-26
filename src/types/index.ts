export interface Result {
  formatted: string;
  components: {
    city?: string;
    state?: string;
    country?: string;
    postcode?: string;
    suburb?: string;
  };
  geometry: {
    lat: number;
    lng: number;
  };
}
