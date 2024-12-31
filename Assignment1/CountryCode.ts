import countryCodeData from './CountryData.json';
interface CountryCodeData {
    [key: string]: string;
}
const countryData: CountryCodeData = countryCodeData as CountryCodeData;

let readline=require("readline");
let read= readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

read.question("Enter country code (e.g., IN, US, CA): ", (countryCode: string) => {      
    let countryName = getCountryName(countryCode.toUpperCase());
    console.log(countryName);
    read.close();
  });

function getCountryName(countryCode:string):string{
     if(countryCode in countryData)
     {
        return countryData[countryCode]
     }
     else{
         return "Please enter the valid country code";
     }  
 };





