import axios from 'axios';
import { constant } from './constant';

interface GeocodeResponse {
    lat: string;
    lon: string;
    display_name: string;
}
const defaultGeocodeResponse:GeocodeResponse={
    lat:"0",
    lon:"0",
    display_name:"unknown"
};

export async function getGeolocation(place: string): Promise<GeocodeResponse | null> {
    try {
        const response = await axios.get<GeocodeResponse[]>(constant.API_URL, {
            params: {
                q: place,
                api_key: constant.API_KEY,
            },
        });

        const [GeocodeResult] = response.data;

        if (!GeocodeResult) {
            console.warn(`No results found for "${place}".`);
            return defaultGeocodeResponse;
        }

        return GeocodeResult;
    } catch (error: any) {
        console.error(`Error fetching coordinates: ${error.message}`);
        return defaultGeocodeResponse;
    }
}
