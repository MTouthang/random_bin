a = [5, 6, 7]
b = [3, 6, 10]


def compareTriplets(a, b):
    a_points = 0
    b_points = 0
    for i in range(len(a)):
        if a[i] > b[i]:
            a_points += 1
        elif a[i] < b[i]:
            b_points += 1
    print(a_points, b_points)
    

compareTriplets(a, b)