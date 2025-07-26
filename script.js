// 음식 데이터 (기분별)
const foodOptions = {
  spicy: [
    '떡볶이',
    '불닭볶음면',
    '마라탕',
    '핵불닭',
    '아구찜',
    '닭발',
    '쭈꾸미볶음',
    '엽기떡볶이',
    '매운 갈비찜',
    '낙지볶음',
    '오돌뼈',
    '김치찌개 (매운맛)',
    '부대찌개 (매운맛)',
    '캡사이신 치킨',
    '매운 족발',
    '고추장찌개',
    '짬뽕 (매운맛)',
    '신길동 매운짬뽕',
    '동대문 엽기닭볶음탕',
    '매운 오징어볶음',
    '틈새라면',
    '불족발',
    '고추장 불고기',
    '매운 등갈비찜',
    '양념치킨 (매운맛)',
    '카레 (매운맛)',
    '칠리 콘 카르네',
    '하바네로 피자',
    '페퍼론치노 파스타',
    '사천식 두부',
    '훠궈 (매운 홍탕)',
  ],
  salty: [
    '라면',
    '순대',
    '김치볶음밥',
    '된장찌개',
    '간장게장',
    '소금구이',
    '간장치킨',
    '자반고등어구이',
    '햄버거',
    '피자',
    '프렌치프라이',
    '베이컨',
    '소시지',
    '치즈',
    '젓갈',
    '염장 고기',
    '육포',
    '명란젓 파스타',
    '간장 비빔밥',
    '콘비프',
    '소금빵',
    '멸치볶음',
    '어묵탕 (짭짤한 맛)',
    '짠 과자 (프레첼, 감자칩 등)',
    '훈제 연어',
    '장아찌',
    '김',
    '어묵볶음',
    '계란장조림',
    '간장새우',
    '김치찜',
    '스팸',
    '염장 올리브',
  ],
  sweet: [
    '팬케이크',
    '와플',
    '초콜릿 케이크',
    '빙수',
    '마카롱',
    '도넛',
    '아이스크림',
    '젤리',
    '사탕',
    '쿠키',
    '푸딩',
    '캐러멜',
    '케이크',
    '티라미수',
    '슈크림',
    '에그타르트',
    '호떡',
    '붕어빵',
    '솜사탕',
    '꿀타래',
    '약과',
    '정과',
    '과일 타르트',
    '크로플',
    '생크림 케이크',
    '초코파이',
    '딸기 쇼트케이크',
    '허니브레드',
    '고구마 맛탕',
    '시럽 팬케이크',
    '단팥빵',
    '팝콘 (카라멜맛)',
    '설탕 도넛',
  ],
  sour: [
    '냉면',
    '레몬치킨',
    '피클버거',
    '김치',
    '식초 초무침',
    '요거트',
    '사우어크라우트',
    '피시앤칩스 (식초 뿌린)',
    '타마린드 소스',
    '비빔냉면',
    '오이냉국',
    '매실청 음료',
    '석류 주스',
    '자몽',
    '키위',
    '식초 음료',
    '타르트 타탕 (사과)',
    '셔벗',
    '레몬 타르트',
    '라임 소다',
    '피클',
    '식혜 (약간 새콤한)',
    '초계국수',
    '귤',
    '산미구미',
    '오렌지 주스',
    '매실 장아찌',
    '식초 오징어무침',
    '초장 비빔밥',
    '레몬 에이드',
    '시트러스 샐러드 드레싱',
  ],
};

// 추가 필터 옵션별 예시 음식 (단순 예시용)
const mealOptions = {
  breakfast: [
    '토스트',
    '계란후라이',
    '베이글',
    '시리얼',
    '요거트',
    '과일샐러드',
  ],
  lunch: ['김치찌개', '비빔밥', '돈까스', '떡볶이', '피자', '불고기'],
  dinner: ['삼겹살', '갈비탕', '초밥', '파스타', '스테이크', '닭볶음탕'],
  snack: ['감자칩', '치즈볼', '팝콘', '초콜릿', '과일', '아이스크림'],
};

const priceOptions = {
  low: ['분식', '편의점 도시락', '패스트푸드'],
  medium: ['치킨', '피자', '한식 식당', '분식'],
  high: ['고급 일식', '양식 레스토랑', '뷔페'],
};

// 음식별 샘플 이미지/설명/특징 데이터
const foodDetails = {
  김치찌개: {
    img: 'food_kimchi.jpg',
    desc: '한국인의 소울푸드, 얼큰하고 깊은 맛!',
    kcal: 350,
    spicy: 3,
  },
  치킨: {
    img: 'food_chicken.jpg',
    desc: '바삭하고 짭짤한 국민 간식',
    kcal: 500,
    spicy: 1,
  },
  비빔밥: {
    img: 'food_bibimbap.jpg',
    desc: '채소와 고기가 어우러진 건강식',
    kcal: 420,
    spicy: 1,
  },
  불고기: {
    img: 'food_bulgogi.jpg',
    desc: '달콤짭짤한 소고기 요리',
    kcal: 480,
    spicy: 1,
  },
  떡볶이: {
    img: 'food_tteokbokki.jpg',
    desc: '매콤달콤한 국민 간식',
    kcal: 550,
    spicy: 4,
  },
  된장찌개: {
    img: 'food_dwenjang.jpg',
    desc: '구수한 전통 찌개',
    kcal: 300,
    spicy: 1,
  },
  파스타: {
    img: 'food_pasta.jpg',
    desc: '이탈리아 감성의 면 요리',
    kcal: 600,
    spicy: 1,
  },
  피자: {
    img: 'food_pizza.jpg',
    desc: '치즈 듬뿍, 모두의 사랑',
    kcal: 700,
    spicy: 1,
  },
  초밥: {
    img: 'food_sushi.jpg',
    desc: '신선한 생선과 밥의 조화',
    kcal: 350,
    spicy: 0,
  },
  햄버거: {
    img: 'food_burger.jpg',
    desc: '든든한 한 끼, 패스트푸드',
    kcal: 650,
    spicy: 1,
  },
};

// 추천 함수
function recommendFood(mood, meal, price, diets, keyword) {
  // 기분 기반 추천 후보군
  let baseOptions = foodOptions[mood] || [];

  // 식사 종류 추가 필터링
  const mealCandidates = mealOptions[meal] || [];
  // 가격대 후보군
  const priceCandidates = priceOptions[price] || [];

  // 후보군 조합(단순 합집합)
  let candidates = [
    ...new Set([...baseOptions, ...mealCandidates, ...priceCandidates]),
  ];

  // 키워드 포함 필터링 (있으면 포함된 음식만)
  if (keyword) {
    const lowerKeyword = keyword.toLowerCase();
    candidates = candidates.filter((food) =>
      food.toLowerCase().includes(lowerKeyword)
    );
    if (candidates.length === 0) {
      candidates = ['검색된 음식이 없습니다. 키워드를 변경해보세요.'];
      return candidates;
    }
  }

  // 다이어트 특성 필터링 (예시: 단순 필터링 — 실제 구현 시 DB 필요)
  // 여기서는 무시하거나, 채식일 경우 '채식' 관련 키워드 포함 음식만 필터링 가능
  if (diets.includes('vegetarian')) {
    candidates = candidates.filter(
      (food) =>
        ![
          '고기',
          '닭',
          '불고기',
          '삼겹살',
          '치킨',
          '족발',
          '육포',
          '햄버거',
          '스테이크',
        ].some((meat) => food.includes(meat))
    );
    if (candidates.length === 0)
      candidates = ['채식 옵션에 맞는 음식이 없습니다.'];
  }

  // 랜덤으로 3개 추출
  let results = [];
  const maxCount = 3;
  for (let i = 0; i < maxCount; i++) {
    if (candidates.length === 0) break;
    const idx = Math.floor(Math.random() * candidates.length);
    results.push(candidates[idx]);
    candidates.splice(idx, 1);
  }
  return results;
}

// DOMContentLoaded 이후 이벤트 연결
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('recommendForm');
  const resultList = document.getElementById('resultList');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 입력값들 추출
    const mood = form.elements['mood'].value;
    const meal = form.elements['meal'].value;
    const price = form.elements['price'].value;
    const dietChecks = Array.from(
      form.querySelectorAll('input[name="diet"]:checked')
    );
    const diets = dietChecks.map((input) => input.value);
    const keyword = form.elements['keyword'].value.trim();

    // 추천 중 애니메이션 효과
    let count = 0;
    resultList.innerHTML = '';
    const loadingText = document.createElement('p');
    loadingText.textContent = '🤔 추천 중...';
    resultList.appendChild(loadingText);

    const interval = setInterval(() => {
      if (count >= 10) {
        clearInterval(interval);
        // 실제 추천 실행
        const recommendations = recommendFood(
          mood,
          meal,
          price,
          diets,
          keyword
        );
        // 추천 결과 표시
        resultList.innerHTML = '';
        recommendations.forEach((food) => {
          const detail = foodDetails[food] || {};
          const card = document.createElement('div');
          card.className = 'food-card';
          card.innerHTML = `
            <div class="food-info">
              <h3>${food}</h3>
              <p class="desc">${detail.desc || '맛있는 음식이에요!'}</p>
              <ul class="food-meta">
                <li>칼로리: <strong>${
                  detail.kcal ? detail.kcal + 'kcal' : '?'
                }</strong></li>
                <li>맵기: <span class="spicy">${
                  '🌶️'.repeat(detail.spicy || 0) || '순함'
                }</span></li>
              </ul>
            </div>
          `;
          resultList.appendChild(card);
        });
        return;
      }
      loadingText.textContent = `🤔 추천 중... ${
        count % 4 === 0
          ? '🍜'
          : count % 4 === 1
          ? '🍕'
          : count % 4 === 2
          ? '🍣'
          : '🍰'
      }`;
      count++;
    }, 100);
  });

  // 인기 음식 툴팁
  const popularList = document.querySelectorAll('.popular-list li');
  popularList.forEach((li) => {
    li.addEventListener('mouseenter', (e) => {
      const desc = li.getAttribute('data-desc');
      let tooltip = document.createElement('div');
      tooltip.className = 'food-tooltip';
      tooltip.textContent = desc;
      li.appendChild(tooltip);
    });
    li.addEventListener('mouseleave', (e) => {
      const tooltip = li.querySelector('.food-tooltip');
      if (tooltip) tooltip.remove();
    });
  });

  // 리뷰 별점 저장/표시, 최근 5개만
  const reviewForm = document.getElementById('reviewForm');
  const reviewsDiv = document.getElementById('reviews');
  let reviewList = [];
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textArea = document.getElementById('reviewText');
    const reviewText = textArea.value.trim();
    const rating = reviewForm.elements['rating'].value;
    if (!reviewText) {
      alert('리뷰를 입력해주세요.');
      return;
    }
    reviewList.unshift({ text: reviewText, rating: rating });
    if (reviewList.length > 5) reviewList = reviewList.slice(0, 5);
    renderReviews();
    textArea.value = '';
  });
  function renderReviews() {
    reviewsDiv.innerHTML = '';
    reviewList.forEach((r) => {
      const div = document.createElement('div');
      div.className = 'review-item';
      div.innerHTML = `<span class="review-stars">${'★'.repeat(
        r.rating
      )}${'☆'.repeat(5 - r.rating)}</span> <span>${r.text}</span>`;
      reviewsDiv.appendChild(div);
    });
  }

  // FAQ 문의하기 버튼
  const faqContactBtn = document.getElementById('faqContactBtn');
  if (faqContactBtn) {
    faqContactBtn.addEventListener('click', () => {
      window.location.href = 'contact.html';
    });
  }

  // FAQ 토글
  const faqItems = document.querySelectorAll('.faq-section dt');
  faqItems.forEach((dt) => {
    dt.addEventListener('click', () => {
      dt.classList.toggle('open');
      const dd = dt.nextElementSibling;
      if (dd.classList.contains('open')) {
        dd.classList.remove('open');
      } else {
        dd.classList.add('open');
      }
    });
  });
});
