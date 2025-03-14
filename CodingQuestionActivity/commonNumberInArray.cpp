#include <iostream>
#include <map>
using namespace std;

int main() {
    map<int, int> hashmap;
    int arr1[] = {1, 2, 3, 4, 5, 6};
    int arr2[] = {1, 3, 4, 6, 7, 6};
    int arr3[] = {3, 6, 4, 5, 6, 7};
    for (int i = 0; i < 6; i++) {
        hashmap[arr1[i]]++;
    }
    for (int i = 0; i < 6; i++) {
        hashmap[arr2[i]]++;
    }
    for (int i = 0; i < 6; i++) {
        hashmap[arr3[i]]++;  
    }


    for (auto& i : hashmap) {
        if (i.second == 3) {
            cout << i.first << " "; 
        }
    }

    return 0;
}
