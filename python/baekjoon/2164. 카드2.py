# -*- coding: utf8 -*-
# 시간제한 2초(초당 1~2억 연산), 메모리 제한 128MB
# 1 <= N <= 500,000
# queue를 이용해 풀이, 시간복잡도 O(N)
# 참고: deque 관련 https://docs.python.org/3/library/collections.html#collections.deque
import sys
from collections import deque

q = deque()
n = int(sys.stdin.readline()) 
for i in range(n):
  q.append(i+1) 

while len(q) > 1:
  q.popleft()
  q.append(q.popleft())
print(q.pop())


