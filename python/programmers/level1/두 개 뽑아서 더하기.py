# -*- coding: utf8 -*-
def solution(numbers):
    answer = []
    sum = 0
    print("len(numbers)", len(numbers))
    for i in range(0, len(numbers)-1):
        for j in range(i + 1, len(numbers)):
            print("i", i, "j = ", j)
            sum = numbers[i]
            sum += numbers[j]
            print("sum", sum)
            if sum not in numbers:
              return "없다!"
            else: 
              return "있다!"
                # answer.append(sum)
              # answer.append(sum)
    return sorted(answer)
  

# 테스트 케이스 1 => 	[2,3,4,5,6,7]
print(solution([2,1,3,4,1]))
        
# 테스트 케이스 1 => [2,5,7,9,12]
# print(solution([2,1,3,4,1]))