
export function renderLoading(container) {
  container.innerHTML = `<p class="hint">Loading passage...</p>`;
}


export function renderError(container, message) {
  container.innerHTML = `<p class="error">${message} Try a format like "John 3:16".</p>`;
}

export function renderPassage(container, data) {
  const verses = data.verses
    .map(
      (verse) =>
        `<p class="verse"><span class="verse__num">${verse.verse}</span>${verse.text.trim()}</p>`,
    )
    .join("");

  container.innerHTML = `
    <header class="passage__header">
      <h2>${data.reference}</h2>
      <span class="passage__translation">${data.translation_id.toUpperCase()}</span>
    </header>
    ${verses}
  `;
}