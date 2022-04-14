# -*- coding: utf8 -*-
# 시간제한 1초(초당 1~2억 연산), 메모리 제한 256MB
# 1 <= N <= 100,000
# heapq를 이용해 풀이, 시간복잡도 O(N)
# 참고: heapq 관련 https://hocheon.tistory.com/70

# 튜플 사용 ver
import heapq
import sys

input = sys.stdin.readline
heap = []

N = int(input())

for i in range(N):
  inform = int(input())
  if inform != 0:
    heapq.heappush(heap, (abs(inform), inform))
  else:
    print(heapq.heappop(heap)[1] if heap else 0) 


# min_heap, max_heap 사용 ver
import heapq
import sys

input = sys.stdin.readline
heap = []

N = int(input())

for i in range(N):
  inform = int(input())
  if inform != 0:
    heapq.heappush(heap, (abs(inform), inform))
  else:
    print(heapq.heappop(heap)[1] if heap else 0) 