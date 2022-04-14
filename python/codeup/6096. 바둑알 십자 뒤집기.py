# 기본 맵 0 초기화 세팅
map = [[0 for j in range(19)] for i in range(19)]

# 입력 리스트 int로 삽입
for i in range(19):
  n = input().split()
  for j in range(19):
    map[i][j] = int(n[j])
    

# 풀이
for i in range(n):
    x, y = input().split()
    x = int(x) - 1
    y = int(y) - 1
    count = 1
    while x-count >= 0 or x+count <= 18 or y-count >= 0 or y+count <= 18:
        if(x-count >= 0):
            if map[x-count][y] == 0:
                map[x-count][y] = 1
            else:
                map[x-count][y] = 0
        if(x+count <= 18):
            if map[x+count][y] == 0:
                map[x+count][y] = 1
            else:
                map[x+count][y] = 0
        if(y-count >= 0):
            if map[x][y-count] == 0:
                map[x][y-count] = 1
            else:
                map[x][y-count] = 0
        if(y+count <= 18):
            if map[x][y+count] == 0:
                map[x][y+count] = 1
            else:
                map[x][y+count] = 0
        count += 1
      
# 출력문
for i in range(19):
  for j in range(19):
    print(map[i][j], end=" ")
  print()