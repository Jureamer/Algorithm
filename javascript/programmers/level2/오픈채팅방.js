// 문제명:오픈채팅방
// 문제설명: 카카오톡 오픈채팅방에서는 친구가 아닌 사람들과 대화를 할 수 있는데, 본래 닉네임이 아닌 가상의 닉네임을 사용하여 채팅방에 들어갈 수 있다.
// 신입사원인 김크루는 카카오톡 오픈 채팅방을 개설한 사람을 위해, 다양한 사람들이 들어오고, 나가는 것을 지켜볼 수 있는 관리자창을 만들기로 했다. 채팅방에 누군가 들어오면 다음 메시지가 출력된다.
// "[닉네임]님이 들어왔습니다." 채팅방에서 누군가 나가면 다음 메시지가 출력된다. "[닉네임]님이 나갔습니다."..(생략)
// 링크: https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  var answer = [];
  let userInfo = [];
  let nicknameInfo = {};
  
  record.forEach((each) => {
      const [action, userId, nickname] = each.split(" ");
      const recordInfo = {};
  
      // "Enter"일 경우 action과 userId를 저장
      // nicknameInfo에는 닉네임 정보 저장
      if(action === "Enter") {
          recordInfo.action = action;
          recordInfo.userId = userId;
          nicknameInfo[userId] = nickname;
          userInfo.push(recordInfo)
      // action이 change일 경우 userId와 닉네임만 바꿔준다.
      } else if(action === "Leave") {
          recordInfo.action = action
          recordInfo.userId = userId
          userInfo.push(recordInfo)
      } else if(action === "Change") {
          nicknameInfo[userId] = nickname;
      } 
  })
  
  userInfo.forEach((each) => {
      const {action, userId} = each;
      const nickname = nicknameInfo[userId];
      
      let message = "";
      switch(action) {
          case "Enter" :
              message = nickname + "님이 들어왔습니다.";
              break;
          case "Leave" :
              message = nickname + "님이 나갔습니다."
              break;
      }
      
      answer.push(message);
  })
  
  return answer;
}