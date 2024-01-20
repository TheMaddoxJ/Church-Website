function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
      if (tab.id === tabId) {
        tab.classList.add('active-tab');
      } else {
        tab.classList.remove('active-tab');
      }
    });

    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      if (link.getAttribute('href') === `#${tabId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }