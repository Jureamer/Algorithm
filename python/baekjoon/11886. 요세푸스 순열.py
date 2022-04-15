from collections import deque
dq = deque()

N, K = map(int, input().split())
for i in range(N):
  dq.append(i+1)
  
result = []

for i in range(N):
  if(i == N-1):
    result.append(dq.popleft())
    break
  for j in range(K):
    if j + 1 == K:
      result.append(dq.popleft())
    else:
      dq.append(dq.popleft())

print("<", end="")
for i in range(len(result)):
  if i == N - 1:
    print("%d" %result[i], end="")  
  else:
    print("%d, " %result[i], end="")
print(">", end="")