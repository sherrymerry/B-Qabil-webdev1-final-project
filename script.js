const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestions');

const suggestions = ['Psldeal', 'Deal', 'Starter', 'Bbq', 'Karahi', 'Mocktails'];

function showSuggestions() {
  const inputValue = searchInput.value.toLowerCase();
  suggestionsList.innerHTML = '';

  if (inputValue.length === 0) {
    suggestionsList.style.display = 'none';
    return;
  }

  suggestions.forEach(suggestion => {
    if (suggestion.toLowerCase().includes(inputValue)) {
      const li = document.createElement('li');
      li.textContent = suggestion;
      li.onclick = function() {
        displayContent(suggestion);
      };
      suggestionsList.appendChild(li);
    }
  });

  suggestionsList.style.display = 'block';
}


function displayContent(keyword) {
  // Example: Redirect to a specific URL based on the keyword
  if (keyword === 'Psldeal') {
    window.location.href = '#psldeal';
  }
  if (keyword === 'Deal') {
    window.location.href = '#deal';
  }
  if (keyword === 'Starter') {
    window.location.href = '#starter';
  }
  if (keyword === 'Bbq') {
    window.location.href = '#bbq';
  }
  if (keyword === 'Karahi') {
    window.location.href = '#karahi';
  }
  if (keyword === 'Mocktails') {
    window.location.href = '#mocktails';
  }
}