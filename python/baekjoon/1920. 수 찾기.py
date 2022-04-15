# 수 찾기
# 이진 탐색으로 풀이
# O(logN)
N = int(input())
A = list(map(int, input().split()))
A.sort()

def binary_search(search):
    start = 0
    end = len(A)-1
    while start <= end:
        mid = (start+end)//2
        if search == A[mid]:
            return 1
        elif search < A[mid]:
            end = mid-1
        elif search > A[mid]:
            start = mid+1
    return 0

M = int(input())
B = list(map(int, input().split()))
for i in B:
    print(binary_search(i))
