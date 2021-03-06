def findTrailingZeros(n):
    div = 5
    count = 0
    a = n // div
    while(a != 0):
        count += a
        div *= 5
        a = n // div
    return count


# Read the number of test cases.
T = int(input())
for tc in range(T):
    n = int(input())
    count = findTrailingZeros(n)
    print(count)
