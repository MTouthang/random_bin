
data = [1, 2, 2, 3, 3, 3, 4, 5, 5]
# data = [1, 2, 3]
# data = [5, 10, 15, 10, 7]
n = 1


def solution(data, n):
    res = []
    for i in data:
        freq = data.count(i)
        if freq <=n:
            res.append(i)
    print(res)


solution(data, n)