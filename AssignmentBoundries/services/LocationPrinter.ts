import { GeocodeResponse } from './GeocodeService';

export class LocationPrinter {
    public print(location: GeocodeResponse): void {
        console.log(`Place: ${location.display_name}`);
        console.log(`Latitude: ${location.lat}`);
        console.log(`Longitude: ${location.lon}`);
    }
}
