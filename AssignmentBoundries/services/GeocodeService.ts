import axios from 'axios';
import { constant } from './constant';

export interface GeocodeResponse {
    lat: string;
    lon: string;
    display_name: string;
}

const defaultGeocodeResponse: GeocodeResponse = {
    lat: "0",
    lon: "0",
    display_name: "Unknown",
};

export class GeocodeService {
    public async getGeolocation(place: string): Promise<GeocodeResponse> {
        try {
            const response = await axios.get<GeocodeResponse[]>(constant.API_URL, {
                params: {
                    q: place,
                    api_key: constant.API_KEY,
                },
            });

            const [result] = response.data;

            if (!result) {
                console.warn(`No results found for "${place}".`);
                return defaultGeocodeResponse;
            }

            return result;
        } catch (error: any) {
            console.error(`Error fetching coordinates: ${error.message}`);
            return defaultGeocodeResponse;
        }
    }
}
