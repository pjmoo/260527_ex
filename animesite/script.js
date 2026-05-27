document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const recommendations = document.getElementById('recommendations');

    // Fetch popular anime on page load
    fetchPopularAnime();

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            searchAnime(query);
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                searchAnime(query);
            }
        }
    });

    async function fetchPopularAnime() {
        try {
            const response = await fetch('https://api.jikan.moe/v4/top/anime?limit=12');
            const data = await response.json();
            displayAnime(data.data);
        } catch (error) {
            console.error('Error fetching popular anime:', error);
            recommendations.innerHTML = '<p>애니 데이터를 불러오는 중 오류가 발생했습니다.</p>';
        }
    }

    async function searchAnime(query) {
        try {
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=12`);
            const data = await response.json();
            displayAnime(data.data);
        } catch (error) {
            console.error('Error searching anime:', error);
            recommendations.innerHTML = '<p>검색 중 오류가 발생했습니다.</p>';
        }
    }

    function displayAnime(animeList) {
        if (!animeList || animeList.length === 0) {
            recommendations.innerHTML = '<p>검색 결과가 없습니다.</p>';
            return;
        }

        recommendations.innerHTML = animeList.map(anime => `
            <div class="card">
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
                <div class="card-content">
                    <h3 class="card-title">${anime.title}</h3>
                    <p class="card-score">평점: ${anime.score || 'N/A'}</p>
                </div>
            </div>
        `).join('');
    }
});