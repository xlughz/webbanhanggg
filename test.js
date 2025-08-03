const suggestions = [
  "Bàn phím cơ RGB",
  "Chuột gaming không dây",
  "Tai nghe HyperX",
  "Card đồ họa RTX",
  "Màn hình 240Hz",
  "Ghế gaming",
  "Tay cầm PS5",
  "Laptop gaming",
  "Tản nhiệt nước AIO",
  "Case máy tính RGB"
];

const searchBox = document.getElementById('search-box');
const suggestionList = document.getElementById('suggestions');

searchBox.addEventListener('input', () => {
  const query = searchBox.value.toLowerCase();
  suggestionList.innerHTML = '';

  if (query.length === 0) {
    suggestionList.style.display = 'none';
    return;
  }

  const matched = suggestions.filter(item =>
    item.toLowerCase().includes(query)
  );

  matched.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => {
      searchBox.value = item;
      suggestionList.style.display = 'none';
    });
    suggestionList.appendChild(li);
  });

  suggestionList.style.display = matched.length ? 'block' : 'none';
});

document.addEventListener('click', (e) => {
  if (!searchBox.contains(e.target) && !suggestionList.contains(e.target)) {
    suggestionList.style.display = 'none';
  }
});
