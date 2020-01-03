tests = int(input())

for test in range(tests):
    n = int(input())
    matrix = [int(i) for i in input().strip().split(' ')]
    sums = 0
    for num in matrix:
        sums += num
    print(sums)