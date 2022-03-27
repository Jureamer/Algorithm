// 문제명: 신고 결과 받기 
// 문제설명: 신입사원 무지는 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 합니다. 무지가 개발하려는 시스템은 다음과 같습니다.(생략..)
// 링크: https://programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
    let answer = [];
    // 신고한 사람은 여러 번 할 순 있지만 한 번으로 계산해야 됨
    // 신고를 k번 만큼 받으면 제재 대상으로, 신고한 사람에게 메일이 가야됨

    // 1. report 값으로 신고한 사람을 키, 신고당한 대상 값을 배열로 저장함
    // 2. 그리고 제재 값을 별도 객체로 저장하여 신고 될 때마다 +1하여 준다.
    // 3. k만큼 신고를 당한 경우 1에서 만든 객체를 이용하여 답이 될 수 있는 배열을 만들어준다.
    const set = new Set(report);
    // report 중복제거
    report = [...set];
    const reportCountObj = {}; // 신고횟수 카운트
    const reporterReported = {}; // 신고자와 신고당한사람
    const resultObj = {}; // 결과값


    reportProcess();
    // 신고한 사람과 신고당한 사람을 객체에 넣어준다.
    function reportProcess() {
        for(const id of id_list) {
            // 각 객체에 0값으로 초기화 해준다.
            reportCountObj[id] = 0;
            resultObj[id] = 0;
        }

        for(const each of report) {
            const reporter = each.split(" ")[0];
            const reported = each.split(" ")[1];
    
            // 신고한 사람의 값이 없다면 배열로 넣어준다.
            if(!reporterReported[reporter]) {
                reporterReported[reporter] = [reported]
            } else {
                // 값이 있다면 중복여부 체크.
                reporterReported[reporter].push(reported)
            }
        }
        countingReport();
    }
    
    function countingReport() {
        Object.values(reporterReported).forEach((reported) => {
            // 신고 당한 사람들의 배열을 돌면서 값을 더해준다.
            if(reported.length > 1) {
                for(const each of reported) {
                    reportCountObj[each] = reportCountObj[each] + 1
                }
            } else {
                reportCountObj[reported] = reportCountObj[reported] + 1
            }
        })
        findTargetToRestrict();
    }

    function findTargetToRestrict() {
        Object.values(reportCountObj).forEach((reportCount, idx) => {
            // 신고 횟수가 k를 넘는 제재 대상이라면
            if(reportCount >= k) {
                const target = Object.keys(reportCountObj)[idx];
                findReporter(target);
            }
        })
    }

    function findReporter(target) {
        // 제재대상을 신고한 신고자를 찾는다.
        Object.values(reporterReported).forEach((pool, reporterIdx) => {
            // 제재 대상을 포함하고 있다면 1 더해준다.
            const reporter = Object.keys(reporterReported)[reporterIdx];
            if(pool.includes(target)) {
                resultObj[reporter] = resultObj[reporter] + 1
            }
        })
    }
    answer = Object.values(resultObj);
    return answer;
}

console.log(solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"],3));
console.log(solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo", "frodo neo", "muzi neo","apeach muzi"],2));
console.log(solution(["con", "ryan", "apeach", "neo"],["con ryan","ryan con","apeach con", "apeach ryan","ryan con","ryan neo", "neo con", "neo con"],1));

// 후기: forEach 중복사용 등으로 시간복잡도가 증가해 시간초과가 5개 떴다. 
// 시간복잡도를 줄이기 위해 다시 풀어봐야할 문제.

