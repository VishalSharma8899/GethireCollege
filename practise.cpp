#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

// Function to check if there is a path from X to Y
bool canTravel(const vector<int>& routeA, const vector<int>& routeB, int X, int Y) {
    unordered_set<int> setA(routeA.begin(), routeA.end());
    unordered_set<int> setB(routeB.begin(), routeB.end());

    // Check if both X and Y are in the same route
    if ((setA.count(X) && setA.count(Y)) || (setB.count(X) && setB.count(Y))) {
        return true;
    }

    // Check if X is in one route and Y is in the other route, with a common stop
    for (int stop : routeA) {
        if (setB.count(stop)) {
            return (setA.count(X) || setB.count(X)) && (setA.count(Y) || setB.count(Y));
        }
    }

    return false;
}

int main() {
    int N, M;
    cin >> N >> M;

    vector<int> routeA(N);
    vector<int> routeB(M);

    for (int i = 0; i < N; ++i) {
        cin >> routeA[i];
    }

    for (int i = 0; i < M; ++i) {
        cin >> routeB[i];
    }

    int X, Y;
    cin >> X >> Y;

    if (canTravel(routeA, routeB, X, Y)) {
        cout << "Yes" << endl;
    } else {
        cout << "No" << endl;
    }

    return 0;
}
