# test0
n = 9
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

# test1
n1 = 10
ar1 = [1,1, 3, 1, 2, 1, 3, 3, 3, 3]


def sockMerchant(n, ar):
    # unique array
    ar_unique = []
    ar_item_counts = []
    res = 0
    count =0
    ar_max = max(ar)
    print(ar_max)

    for i in range(ar_max+1):
        if i in ar:
            ar_unique.append(i)
    print(ar_unique)

    # searching for pairs
    for i in ar_unique:
        ar_item_counts.append(ar.count(i))
    print("Numbers of pairs", ar_item_counts)

    for i in ar_item_counts:
            res += i//2
    print(res)

sockMerchant(n, ar)