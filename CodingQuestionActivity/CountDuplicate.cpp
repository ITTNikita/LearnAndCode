/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>
#include <bits/stdc++.h>
#include<string.h>
using namespace std;

int main()
{
    int n;
    cout<<"enter the length of the string:";
    cin>>n;
     char s[n+1];
    for(int i=0;i<n+1;i++)
    {
        char c;
        cin>>c;
        s[i]=c;
    }
   
    map<char,int> resultCount;
    for(int i=0;i<n+1;i++)
    {
        resultCount[s[i]]++;
    }
    for(auto& i:resultCount)
    {
        if(i.second>1)
        {
            cout<<i.first<<":"<<i.second<<"\n";
        }
    }
    return 0;
}