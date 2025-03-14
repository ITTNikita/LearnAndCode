#include <iostream>
#include <vector>
using namespace std;

int main() {
    int arr[7] = {8, 2, 7, 5, 5, 3, 8};
    vector<pair<int, int>> result;
    for (int i = 0; i < 7; i++) {
        for (int j = i + 1; j < 7; j++) {
            if (arr[i] + arr[j] == 10) {
                result.push_back({arr[i], arr[j]});
            }
        }
    }

    for (const auto& p : result) {
        cout <<  p.first << ", " << p.second <<"\n";
    }
    cout << endl;

    return 0;
}
