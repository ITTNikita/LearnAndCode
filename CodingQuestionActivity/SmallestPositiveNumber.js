function getSmallestPositiveNumber()
{
    let arr=[1,2,3,4];
    arr.sort();
    let positiveArr=[...new Set(arr.filter(num => num > 0))];
    positiveArr.sort((a, b) => a - b);
    console.log(positiveArr);
    let smallestPostiveNumberNotInArray=1;
    for(var i=0;i<arr.length;i++)
    {
        if (positiveArr[i] === smallestPostiveNumberNotInArray) {
            smallestPostiveNumberNotInArray++; 
        } else if (positiveArr[i] > smallestPostiveNumberNotInArray) {
            break;
        }        
    }     
    console.log(smallestPostiveNumberNotInArray)

}
getSmallestPositiveNumber();


    

