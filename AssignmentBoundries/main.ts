// app.ts
import { UserInputService } from './services/UserInputService';
import { LocationPrinter } from './services/LocationPrinter';
import { GeocodeService } from './services/GeocodeService';

class GeoCodeLocation {
    private userInputService: UserInputService;
    private geocodeService: GeocodeService;
    private locationPrinter: LocationPrinter;

    constructor() {
        this.userInputService = new UserInputService();
        this.geocodeService = new GeocodeService();
        this.locationPrinter = new LocationPrinter();
    }

    public async main(): Promise<void> {
        try {
            const place = this.userInputService.getUserInput();
            if (!place) {
                console.log('Place name cannot be empty.');
                return;
            }
            const location = await this.geocodeService.getGeolocation(place);
            this.locationPrinter.print(location);
        } catch (error: any) {
            console.error('An unexpected error occurred while running the application.');
            console.error(`Error: ${error.message}`);
        }
    }
}

const geolocationService = new GeoCodeLocation();
geolocationService.main();
