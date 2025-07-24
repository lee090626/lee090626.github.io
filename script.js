const foods = [
    // 한식
    { name: "김치찌개", type: "한식", flavor: "매운맛" },
    { name: "불닭볶음면", type: "한식", flavor: "매운맛" },
    { name: "제육볶음", type: "한식", flavor: "매운맛" },
    { name: "닭갈비", type: "한식", flavor: "매운맛" },
    { name: "매운 떡볶이", type: "한식", flavor: "매운맛" },
  
    { name: "된장찌개", type: "한식", flavor: "짠맛" },
    { name: "갈비찜", type: "한식", flavor: "짠맛" },
    { name: "갈비탕", type: "한식", flavor: "짠맛" },
    { name: "김밥", type: "한식", flavor: "짠맛" },
    { name: "오징어볶음", type: "한식", flavor: "짠맛" },
  
    { name: "불고기", type: "한식", flavor: "단맛" },
    { name: "잡채", type: "한식", flavor: "단맛" },
    { name: "호박전", type: "한식", flavor: "단맛" },
    { name: "계란찜", type: "한식", flavor: "단맛" },
    { name: "식혜", type: "한식", flavor: "단맛" },
  
    { name: "삼계탕", type: "한식", flavor: "담백한맛" },
    { name: "콩나물국", type: "한식", flavor: "담백한맛" },
    { name: "미역국", type: "한식", flavor: "담백한맛" },
    { name: "배추김치", type: "한식", flavor: "담백한맛" },
    { name: "두부조림", type: "한식", flavor: "담백한맛" },
  
    { name: "비빔냉면", type: "한식", flavor: "새콤한맛" },
    { name: "오이무침", type: "한식", flavor: "새콤한맛" },
    { name: "무생채", type: "한식", flavor: "새콤한맛" },
    { name: "초고추장 무침", type: "한식", flavor: "새콤한맛" },
    { name: "김치", type: "한식", flavor: "새콤한맛" },
  
    // 중식
    { name: "마파두부", type: "중식", flavor: "매운맛" },
    { name: "고추잡채", type: "중식", flavor: "매운맛" },
    { name: "마라탕", type: "중식", flavor: "매운맛" },
    { name: "깐풍기", type: "중식", flavor: "매운맛" },
    { name: "훠궈", type: "중식", flavor: "매운맛" },
  
    { name: "짜장면", type: "중식", flavor: "짠맛" },
    { name: "볶음밥", type: "중식", flavor: "짠맛" },
    { name: "양장피", type: "중식", flavor: "짠맛" },
    { name: "깐풍기", type: "중식", flavor: "짠맛" },
    { name: "찹쌀탕수육", type: "중식", flavor: "짠맛" },
  
    { name: "탕수육", type: "중식", flavor: "단맛" },
    { name: "춘권", type: "중식", flavor: "단맛" },
    { name: "고구마맛탕", type: "중식", flavor: "단맛" },
    { name: "꽃빵", type: "중식", flavor: "단맛" },
    { name: "호두과자", type: "중식", flavor: "단맛" },
  
    { name: "유산슬", type: "중식", flavor: "담백한맛" },
    { name: "계란탕", type: "중식", flavor: "담백한맛" },
    { name: "토마토계란볶음", type: "중식", flavor: "담백한맛" },
    { name: "오이냉채", type: "중식", flavor: "담백한맛" },
    { name: "부추무침", type: "중식", flavor: "담백한맛" },
  
    // 일식
    { name: "라멘", type: "일식", flavor: "짠맛" },
    { name: "돈카츠", type: "일식", flavor: "짠맛" },
    { name: "가츠동", type: "일식", flavor: "짠맛" },
    { name: "오코노미야키", type: "일식", flavor: "짠맛" },
    { name: "우동", type: "일식", flavor: "짠맛" },
  
    { name: "스시", type: "일식", flavor: "담백한맛" },
    { name: "오니기리", type: "일식", flavor: "담백한맛" },
    { name: "가리비구이", type: "일식", flavor: "담백한맛" },
    { name: "연어초밥", type: "일식", flavor: "담백한맛" },
    { name: "모둠회", type: "일식", flavor: "담백한맛" },
  
    { name: "오므라이스", type: "일식", flavor: "단맛" },
    { name: "카레라이스", type: "일식", flavor: "단맛" },
    { name: "타코야키", type: "일식", flavor: "단맛" },
    { name: "쿠키", type: "일식", flavor: "단맛" },
    { name: "다이후쿠", type: "일식", flavor: "단맛" },
  
    // 양식
    { name: "피자", type: "양식", flavor: "짠맛" },
    { name: "스테이크", type: "양식", flavor: "짠맛" },
    { name: "햄버거", type: "양식", flavor: "짠맛" },
    { name: "감자튀김", type: "양식", flavor: "짠맛" },
    { name: "리조또", type: "양식", flavor: "짠맛" },
  
    { name: "파스타 알리오 올리오", type: "양식", flavor: "담백한맛" },
    { name: "시저 샐러드", type: "양식", flavor: "담백한맛" },
    { name: "그릴드 치킨", type: "양식", flavor: "담백한맛" },
    { name: "연어 스테이크", type: "양식", flavor: "담백한맛" },
    { name: "토마토 수프", type: "양식", flavor: "담백한맛" },
  
    { name: "크림파스타", type: "양식", flavor: "단맛" },
    { name: "치즈케이크", type: "양식", flavor: "단맛" },
    { name: "애플파이", type: "양식", flavor: "단맛" },
    { name: "팬케이크", type: "양식", flavor: "단맛" },
    { name: "푸딩", type: "양식", flavor: "단맛" },
  
    // 분식
    { name: "떡볶이", type: "분식", flavor: "매운맛" },
    { name: "매운 순대볶음", type: "분식", flavor: "매운맛" },
    { name: "매운 김밥", type: "분식", flavor: "매운맛" },
    { name: "매운 오뎅볶음", type: "분식", flavor: "매운맛" },
    { name: "매운 라면", type: "분식", flavor: "매운맛" },
  
    { name: "순대", type: "분식", flavor: "짠맛" },
    { name: "김말이 튀김", type: "분식", flavor: "짠맛" },
    { name: "라면", type: "분식", flavor: "짠맛" },
    { name: "오뎅", type: "분식", flavor: "짠맛" },
    { name: "튀김만두", type: "분식", flavor: "짠맛" },
  
    { name: "치즈볼", type: "분식", flavor: "단맛" },
    { name: "호떡", type: "분식", flavor: "단맛" },
    { name: "붕어빵", type: "분식", flavor: "단맛" },
    { name: "찐빵", type: "분식", flavor: "단맛" },
    { name: "찹쌀떡", type: "분식", flavor: "단맛" },
  
    { name: "김밥", type: "분식", flavor: "담백한맛" },
    { name: "떡꼬치", type: "분식", flavor: "담백한맛" },
    { name: "어묵탕", type: "분식", flavor: "담백한맛" },
    { name: "어묵", type: "분식", flavor: "담백한맛" },
    { name: "달걀빵", type: "분식", flavor: "담백한맛" },
  
    // 디저트
    { name: "마카롱", type: "디저트", flavor: "단맛" },
    { name: "푸딩", type: "디저트", flavor: "단맛" },
    { name: "치즈케이크", type: "디저트", flavor: "단맛" },
    { name: "초콜릿 무스", type: "디저트", flavor: "단맛" },
    { name: "크레이프", type: "디저트", flavor: "단맛" },
  
    { name: "빙수", type: "디저트", flavor: "새콤한맛" },
    { name: "요거트볼", type: "디저트", flavor: "새콤한맛" },
    { name: "레몬타르트", type: "디저트", flavor: "새콤한맛" },
    { name: "체리파이", type: "디저트", flavor: "새콤한맛" },
    { name: "라임샤베트", type: "디저트", flavor: "새콤한맛" },
  ];
  
  
  
  
  
  const resultEl = document.getElementById("result");
  const button = document.getElementById("recommendBtn");
  
  button.addEventListener("click", () => {
    const type = document.getElementById("type").value;
    const flavor = document.getElementById("flavor").value;
  
    const filtered = foods.filter(
      (food) =>
        (type === "" || food.type === type) &&
        (flavor === "" || food.flavor === flavor)
    );
  
    if (filtered.length === 0) {
      resultEl.textContent = "조건에 맞는 음식이 없어요 😢";
      return;
    }
  
    // 회전 애니메이션
    let index = 0;
    let interval;
    let startTime = Date.now();
  
    interval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;
  
      resultEl.textContent = filtered[index % filtered.length].name;
      index++;
  
      if (elapsed > 3000) {
        clearInterval(interval);
        const final = filtered[Math.floor(Math.random() * filtered.length)];
        resultEl.textContent = `🎉 ${final.name}!`;
      }
    }, 100);
  });
  