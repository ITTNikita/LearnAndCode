function subArrayMeanValue(N:number,Q:number,arr:number[],queries:[number,number][]):void{
    let sumOfSubArray:number[]=new Array(N+1).fill(0);
    for(let i=1;i<=N;i++)
    {
        sumOfSubArray[i]=sumOfSubArray[i-1]+arr[i-1];
    }
    for( let [L,R] of queries)
    {
        let sum=sumOfSubArray[R]-sumOfSubArray[L-1];    
        let length = R - L + 1;
        console.log(Math.floor(sum / length)); 
    }

}
const N = 5, Q = 3;
const arr = [1, 2, 3, 4, 5];
const queries: [number, number][] = [
    [1, 3],
    [2, 4],
    [2, 5]
];
subArrayMeanValue(N,Q,arr,queries);

