map = [[0 for i in range(10)] for j in range(10)]

for i in range(10):
    n = input().split()
    for j in range(10):
        map[i][j] = int(n[j])
    
isntStuck = True
# 출발 좌표
x = 1 
y = 1
# 출발 지점
map[x][y] = 9 
while isntStuck:

  
  # 오른쪽 길이 뚫려있다면
  if map[x][y+1] == 0:
    y += 1
    map[x][y] = 9
  elif map[x][y+1] == 2:
    y += 1
    map[x][y] = 9
    isntStuck = False
  # 아랫길이 뚫려있다면
  elif map[x+1][y] == 0:
    x += 1
    map[x][y] = 9
  elif map[x+1][y] == 2:
    x += 1
    map[x][y] = 9
    isntStuck = False
  elif map[x][y+1] == 1 and map[x][y+1] == 1:
    # 2를 찾거나, 둘 다 벽일 경우
    isntStuck = False
    
for i in range(10):
    for j in range(10):
        print(map[i][j], end = " ")
    print()


