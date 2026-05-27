document.addEventListener('DOMContentLoaded', () => {
  const recommendations = document.getElementById('recommendations');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const genreChips = document.getElementById('genreChips');

  const animeData = [
    {
      title: 'Frieren: Beyond Journey\'s End',
      genre: 'fantasy',
      rating: '9.3',
      status: 'New',
      note: '서정적인 판타지',
      poster: 'linear-gradient(160deg, #6f5bd6 0%, #1d3557 45%, #00161d 100%)'
    },
    {
      title: 'Jujutsu Kaisen',
      genre: 'action',
      rating: '8.7',
      status: 'Live',
      note: '에너지 높은 배틀',
      poster: 'linear-gradient(160deg, #3f2b96 0%, #a8c0ff 50%, #00161d 100%)'
    },
    {
      title: 'Your Name',
      genre: 'romance',
      rating: '8.4',
      status: 'Classic',
      note: '감정선 중심',
      poster: 'linear-gradient(160deg, #ff7b54 0%, #5f2c82 46%, #00161d 100%)'
    },
    {
      title: 'Spy x Family',
      genre: 'slice',
      rating: '8.2',
      status: 'Top',
      note: '편안한 코미디',
      poster: 'linear-gradient(160deg, #00dbe7 0%, #735a9d 44%, #00161d 100%)'
    },
    {
      title: 'Attack on Titan',
      genre: 'thriller',
      rating: '9.0',
      status: 'Final',
      note: '긴장감 강한 서사',
      poster: 'linear-gradient(160deg, #fe6b00 0%, #281e5d 46%, #00161d 100%)'
    },
    {
      title: 'Haikyuu!!',
      genre: 'action',
      rating: '8.9',
      status: 'Boost',
      note: '스포츠 열혈 감성',
      poster: 'linear-gradient(160deg, #00dbe7 0%, #004f54 42%, #00161d 100%)'
    }
  ];

  let activeGenre = 'all';

  function renderCards(list) {
    const filtered = list.filter(item => {
      const query = searchInput.value.trim().toLowerCase();
      const matchesQuery = !query || [item.title, item.genre, item.note].some(v => v.toLowerCase().includes(query));
      const matchesGenre = activeGenre === 'all' || item.genre === activeGenre;
      return matchesQuery && matchesGenre;
    });

    recommendations.innerHTML = filtered.map(item => `
      <article class="card" style="--poster:${item.poster}">
        <div class="card-meta">
          <span class="tag">${item.status}</span>
          <h3 class="card-title">${item.title}</h3>
          <div class="card-row">
            <span>${item.note}</span>
            <strong>★ ${item.rating}</strong>
          </div>
        </div>
      </article>
    `).join('');

    if (!filtered.length) {
      recommendations.innerHTML = '<p class="lead">조건에 맞는 작품이 없습니다. 다른 장르나 키워드로 다시 시도해 보세요.</p>';
    }
  }

  searchBtn.addEventListener('click', () => renderCards(animeData));
  searchInput.addEventListener('input', () => renderCards(animeData));

  genreChips.addEventListener('click', (event) => {
    const button = event.target.closest('[data-genre]');
    if (!button) return;

    activeGenre = button.dataset.genre;
    genreChips.querySelectorAll('.chip').forEach(chip => chip.classList.toggle('is-active', chip === button));
    renderCards(animeData);
  });

  renderCards(animeData);
});
