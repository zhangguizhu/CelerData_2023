$("document").ready(function($){
  const blogContent = document.getElementById('blog-content');
  const toc = document.getElementById('toc');

  const headers = blogContent.querySelectorAll('h2, h3');

  headers.forEach((header, index) => {
    if((header.textContent || '').trim() !== '') {
      const id = `header-${index}`;
      header.id = id;

      const li = document.createElement('li');
      li.innerHTML = `<a href="#${id}">${header.textContent}</a>`;
      li.classList.add(header.tagName.toLowerCase());

      toc.appendChild(li);
    }
  });

  let aClick = '';
  let lastIntersecting = ''
  toc.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      aClick = e.target.id;
      e.preventDefault();
      const targetId = e.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
  const intersectingElements = []
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      const tocLink = toc.querySelector(`a[href="#${id}"]`);
      if (entry.isIntersecting) {
        if (intersectingElements.findIndex(item => item.target.id === id) === -1) {
          intersectingElements.push(entry)
        }
      } else {
        const index = intersectingElements.findIndex(item => item.target.id === id)
        if (index > -1) {
          intersectingElements.splice(index, 1)
        }
      }
    });
    intersectingElements.sort((a, b) => {
      const aid = Number(a.target.id.replace('header-', ''))
      const bid = Number(b.target.id.replace('header-', ''))
      return aid - bid
    })
    toc.querySelectorAll('a').forEach(item => {
      item.classList.remove('active')
    })
    if (intersectingElements.length) {
      const id = intersectingElements[0].target.id;
      const tocLink = toc.querySelector(`a[href="#${id}"]`);
      if (tocLink) {
        if (aClick === id || !aClick) {
          aClick = ''
          windowWidth = $(document).width();
          if (lastIntersecting && lastIntersecting !== id && windowWidth >= 1280) {
            tocLink.scrollIntoView({ behavior: 'smooth' });
          }
          lastIntersecting = id
        }
        tocLink.classList.add('active');
      }
    }
  }, { rootMargin: '-100px 0px 0px 0px' });

  headers.forEach((header) => observer.observe(header));

});