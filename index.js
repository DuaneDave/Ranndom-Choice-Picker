const tag = document.getElementById('tag');
const textarea = document.querySelector('.textarea');

// to focus on textarea on load
textarea.focus();

function removeHighlight(tag) {
  tag.classList.remove('highlight');
}

function pickrandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlight(tag) {
  tag.classList.add('highlight');
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickrandomTag();
    highlight(randomTag);

    setTimeout(() => {
      removeHighlight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const random = pickrandomTag();

      highlight(random);
    });
  }, times * 100);
}

function createTags(input) {
  // we wanna put our inputs in an array and once a comma
  // is pressed we increase the items in the array

  const tags = input.split(',').filter((tag) => tag.trim() !== '').map((tag) => tag.trim());
  // the filter will not allow tags to show if there is no text

  tag.innerHTML = '';

  tags.forEach((n) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = n;

    tag.appendChild(tagEl);
  });
}

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);
    randomSelect();
  }
});