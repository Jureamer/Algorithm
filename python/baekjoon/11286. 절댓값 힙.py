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
min_heap = [] # 양수 저장
max_heap = [] # 음수 저장

N = int(input())

for i in range(N):
  inform = int(input())
  if inform: 
    if inform > 0:
        heapq.heappush(min_heap, inform)
    else:
      heapq.heappush(max_heap, inform)
  else:
    if min_heap:
      if max_heap: 
        if min_heap[0] < abs(max_heap[0]): 
          print(heapq.heappop(min_heap))
        else: 
          print(heapq.heappop(max_heap))
      else: 
          print(heapq.heappop(min_heap))
    else: 
        if max_heap:
          print(heapq.heappop(max_heap))
        else:
          print(0)
    