# -*- coding: utf8 -*-
# 시간제한 2초(초당 1~2억 연산), 메모리 제한 128MB
# 1 <= N <= 1000

import sys
input = sys.stdin.readline

books = {}
for i in range(int(input())):
  book = input()
  
  if book not in books:
    books[book] = 1
  else: 
    books[book] += 1

max_sell = max(books.values())
bestseller = []

for book, number in books.items():
  if number == max_sell:
    bestseller.append(book)

print(sorted(bestseller)[0])
