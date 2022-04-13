# -*- coding: utf8 -*- 
"""
문제명: 행렬의 덧셈

문제설명: 
        행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 
        2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

링크: https://programmers.co.kr/learn/courses/30/lessons/12950
"""

# 문제풀이
def solution(a, b):
    month = a
    day = b
    dayOfWeek = {
        "0": "THU",
        "1": "FRI",
        "2": "SAT",
        "3": "SUN",
        "4": "MON", 
        "5": "TUE", 
        "6": "WED", 
    }
    
    # 월마다 일수가 몇일인 지 알 수 있다. 
    # 7로 나눈 나머지가 0이면 목요일 ~ 수요일순으로 
    def getDay(month) :
        if month == 4 or month == 6 or month == 9 or month == 11:
            return 30
        elif month == 2:
                return 29
        else:
            return 31

    sumOfDays = day

    for i in range(1, month) :
        sumOfDays += getDay(i)
    return dayOfWeek[(str(sumOfDays % 7))]

# Test case 1 => "TUE"

print(solution(5, 24))