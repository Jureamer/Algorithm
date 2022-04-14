# -*- coding: utf8 -*-

n = int(input())
for i in range(n):
  input_data = input()
  stack = []
  for j in input_data:
    if j == "(":
      stack.append("(")
    elif j == ")":
      if len(stack) == 0 or stack[-1] == ")" :
        stack.append(")")
      else:
        stack.pop(-1)
  
  if len(stack) > 0:
    print("NO")
  else:
    print("YES")

      




""""
6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(
""""