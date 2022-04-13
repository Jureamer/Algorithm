function solution(n) {
  var answer = 0;
  var tenaryScale = '';
  if(n === 1) return 1;
  
  while(n >= 3) {
      const rest = n % 3;
      tenaryScale = rest + tenaryScale;
      n = Math.floor(n / 3)
      if(n < 3) {
        tenaryScale = n + tenaryScale
      }
  }
  
  let inversion = '';
  for(let i = 0; i < tenaryScale.length; i++) {
    inversion = tenaryScale[i] + inversion;
  }
  for(let i = 1; i <= inversion.length; i++) {
    answer = answer + Math.pow(3, i-1) * Number(inversion[inversion.length-i]);
  }

  return answer;
}

console.log(solution(1));



19
0


6
10

3
2
2010


3 + 54


1200



