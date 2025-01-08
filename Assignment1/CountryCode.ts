import adjacencyData from './CountryData.json';
interface CountryAdjacencyData {
  [key: string]: string[];
}
const countryAdjacency: CountryAdjacencyData = adjacencyData as CountryAdjacencyData;
function getAdjacentCountryListByCountryCode(countryCode: string): string[] | string {
  if (countryAdjacency[countryCode]) {
    return countryAdjacency[countryCode];
  }
  return "Invalid country code or no adjacent countries found.";
}

const readline = require("readline");
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

read.question("Enter a country code (e.g., IN, US, NZ): ", (countryCode: string) => {
  countryCode = countryCode.trim().toUpperCase();
  const result = getAdjacentCountryListByCountryCode(countryCode);
  
  if (Array.isArray(result)) {
    console.log(`Adjacent countries for ${countryCode}:`);
    result.forEach((country) => console.log(`${country}`));
  } else {
    console.log(result);
  }  
  read.close();
});
