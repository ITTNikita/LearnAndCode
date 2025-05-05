import readlineSync from 'readline-sync';
import { getGeolocation } from './geocodeService';

function userInput(): string {
    return readlineSync.question('Enter a place name: ');
}

async function main(): Promise<void> {
    const place = userInput().trim();

    if (!place) {
        console.log('Place name cannot be empty.');
        return;
    }

    const location = await getGeolocation(place);

    if (location) {
        console.log(`\nPlace: ${location.display_name}`);
        console.log(`Latitude: ${location.lat}`);
        console.log(`Longitude: ${location.lon}`);
    }
}   

main();
