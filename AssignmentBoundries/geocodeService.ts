import axios from 'axios';
import { constant } from './constant';

interface GeocodeResponse {
    lat: string;
    lon: string;
    display_name: string;
}

export async function getGeolocation(place: string): Promise<GeocodeResponse | null> {
    try {
        const response = await axios.get<GeocodeResponse[]>(constant.API_URL, {
            params: {
                q: place,
                api_key: constant.API_KEY,
            },
        });

        const [firstResult] = response.data;

        if (!firstResult) {
            console.warn(`No results found for "${place}".`);
            return null;
        }

        return firstResult;
    } catch (error: any) {
        console.error(`Error fetching coordinates: ${error.message}`);
        return null;
    }
}
