$("document").ready(function($){
  const blogContent = document.getElementById('blog-content');
  const toc = document.getElementById('toc');

  if (!blogContent || !toc) {
    return;
  }

  const headers = blogContent.querySelectorAll('h2, h3');

  headers.forEach((header, index) => {
    if((header.textContent || '').trim() !== '') {
      const id = `header-${index}`;
      header.id = id;

      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${id}`;
      a.textContent = header.textContent;
      a.setAttribute('data-header-id', id);
      li.appendChild(a);
      li.classList.add(header.tagName.toLowerCase());

      toc.appendChild(li);
    }
  });

  let clickedHeaderId = '';
  let lastIntersectingId = '';
  let isUserScrolling = false;
  let scrollTimeout = null;

  // 监听用户滚动
  let scrollTimer = null;
  window.addEventListener('scroll', function() {
    isUserScrolling = true;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function() {
      isUserScrolling = false;
    }, 150);
  });

  toc.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      const headerId = e.target.getAttribute('data-header-id');
      clickedHeaderId = headerId || '';
      e.preventDefault();
      const targetId = e.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // 标记这是用户点击，不是自动滚动
        isUserScrolling = true;
        setTimeout(() => {
          isUserScrolling = false;
        }, 1000);
        
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  const intersectingElements = [];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.id;
      if (entry.isIntersecting) {
        if (intersectingElements.findIndex(item => item.target.id === id) === -1) {
          intersectingElements.push(entry);
        }
      } else {
        const index = intersectingElements.findIndex(item => item.target.id === id);
        if (index > -1) {
          intersectingElements.splice(index, 1);
        }
      }
    });
    
    intersectingElements.sort((a, b) => {
      const aid = Number(a.target.id.replace('header-', ''));
      const bid = Number(b.target.id.replace('header-', ''));
      return aid - bid;
    });
    
    toc.querySelectorAll('a').forEach(item => {
      item.classList.remove('active');
    });
    
    if (intersectingElements.length) {
      const id = intersectingElements[0].target.id;
      const tocLink = toc.querySelector(`a[href="#${id}"]`);
      if (tocLink) {
        // 只有在用户没有主动滚动，且不是用户点击的链接时才自动滚动 TOC
        if (!isUserScrolling && clickedHeaderId !== id) {
          const windowWidth = $(document).width();
          if (lastIntersectingId && lastIntersectingId !== id && windowWidth >= 1280) {
            // 只滚动 TOC 容器内的链接，不影响页面滚动
            const tocContainer = toc.closest('.toc-container');
            if (tocContainer) {
              const linkRect = tocLink.getBoundingClientRect();
              const containerRect = tocContainer.getBoundingClientRect();
              
              // 只有当链接不在可视区域内时才滚动
              if (linkRect.top < containerRect.top || linkRect.bottom > containerRect.bottom) {
                tocLink.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'nearest',
                  inline: 'nearest'
                });
              }
            }
          }
        }
        
        // 清除点击标记（延迟清除，避免立即触发自动滚动）
        if (clickedHeaderId === id) {
          setTimeout(() => {
            clickedHeaderId = '';
          }, 500);
        }
        
        lastIntersectingId = id;
        tocLink.classList.add('active');
      }
    }
  }, { rootMargin: '-100px 0px 0px 0px' });

  headers.forEach((header) => observer.observe(header));

});