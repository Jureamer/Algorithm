K, L = map(int, input().split())
holes = list(map(int, input().split()))
holes.sort()

### 풀이 1
stack = [] # 구멍 stack
n = 0 # 테이프 갯수
need = 0 # 현재 이어지는 길이
start = holes[0]
for i in holes:
  print(f'start = {start}, i = {i}, 길이 = {L}')
  if stack:
    if start + L > i and start - L < i:
      stack.append(i)
      need += 1
    else:
      stack.clear()
      stack.append(i)
      start = i
      need = 1
      n += 1
  else:
    stack.append(i)
    start = i
    need += 1
  
  if need == L:
    stack.clear()
    need = 0;
    n += 1
  
if stack: 
  n += 1
print(n)


### 풀이 2
K, L = map(int, input().split())

coord = [False] * 1001
for i in map(int, input().split()):
  coord[i] = True

ans = 0   
x = 0
while x < 1001:
  if coord[x]:
    ans += 1
    x += L
  else:
    x += 1 