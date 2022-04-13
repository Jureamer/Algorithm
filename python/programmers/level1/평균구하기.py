# -*- coding: utf8 -*-
"""
    문제명: 평균 구하기

    문제 설명:
        정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

    제한사항
        arr은 길이 1 이상, 100 이하인 배열입니다.
        arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
    
    링크: https://programmers.co.kr/learn/courses/30/lessons/12935 
"""

# 문제 풀이
def solution(arr):
    return sum(arr) / len(arr)
    
# test case 1 => 2.5    
print(solution([1,2,3,4]))

# test case 1 => 5    
print(solution([5,5]))
