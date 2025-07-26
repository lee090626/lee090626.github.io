const foodOptions = {
  spicy: ["떡볶이", "불닭볶음면", "마라탕", "핵불닭"],
  salty: ["라면", "순대", "김치볶음밥"],
  sweet: ["팬케이크", "와플", "초콜릿 케이크", "빙수"],
  sour: ["냉면", "레몬치킨", "피클버거"]
};

function recommend() {
  const mood = document.getElementById("mood").value;
  const options = foodOptions[mood];
  const result = document.getElementById("result");

  let i = 0;
  const interval = setInterval(() => {
    result.innerHTML = `🤔 추천 중... ${options[i % options.length]}`;
    i++;
    if (i > 10) {
      clearInterval(interval);
      const selected = options[Math.floor(Math.random() * options.length)];
      result.innerHTML = `🍽️ 추천 메뉴는 <strong>${selected}</strong>입니다!`;
    }
  }, 100);
}
