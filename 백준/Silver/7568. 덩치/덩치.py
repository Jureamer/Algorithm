N = int(input())

li = [];
for _ in range(N):
  weight, height= map(int, input().split())
  li.append((weight, height))

rank = []
for i in range(N):
  count = 1
  for j in range(N):
    if i == j:
      continue
    elif li[i][0] < li[j][0] and li[i][1] < li[j][1]:
      count += 1
      
  rank.append(count)
  
print(*rank)