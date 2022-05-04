
ar = [10, 5, 20, 20, 4, 5, 2, 25, 1]
n = len(ar)


def breakingRecords(scores):
    win = scores[0]
    win_count = 0

    los_score = scores[0]
    los_count = 0

    result = []

    for i in range(n):
        # find win score
        if win < scores[i]:
            win_count += 1
            win = scores[i]

        # find lose score
        if scores[i] < los_score:
            los_count += 1
            los_score = scores[i]

    print("WIN:", win_count)
    print('lose: ', los_count)

    result.append(win_count)
    result.append(los_count)
    return result


print(breakingRecords(ar))


