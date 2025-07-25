const foodOptions = {
  spicy: ['불닭볶음면', '떡볶이', '매운 치킨', '마라탕'],
  salty: ['짜장면', '감자튀김', '삼겹살', '라면'],
  sweet: ['팬케이크', '허니버터칩', '초콜릿 케이크', '팥빙수'],
  sour: ['김치', '양념게장', '레몬에이드', '피클'],
  mild: ['비빔국수', '죽', '두부조림', '순두부찌개']
};

function recommendFood() {
  const taste = document.getElementById('taste').value;
  const options = foodOptions[taste];
  const resultElement = document.getElementById('result');

  let i = 0;
  const interval = setInterval(() => {
    resultElement.textContent = options[Math.floor(Math.random() * options.length)];
    i++;
    if (i > 20) {
      clearInterval(interval);
      const finalChoice = options[Math.floor(Math.random() * options.length)];
      resultElement.textContent = finalChoice + ' 어때요? 😋';
    }
  }, 100);
}
