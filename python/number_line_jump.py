k = 0
kj = 3

k1 = 4
kj1 = 2


def kangaroo(x1, v1, x2, v2):
    if x1 < x2 and v1 < v2:
        return 'NO'
    else:
        if v1 != v2 and (x2 - x1) % (v2 - v1) == 0:
            return 'YES'
        else:
            return 'NO'


print(kangaroo(k,kj, k1, kj1))