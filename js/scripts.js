const openBtn = document.querySelector('.search-button');
      const modal = document.querySelector('.modal-container ');

      if (openBtn) {
        openBtn.addEventListener('click', (e) => {
          e.preventDefault();
          modal.classList.remove('modal-container-close');
        });

        const closeBtn = document.querySelector('.modal-close-button');

        closeBtn.addEventListener('click', () => {
          modal.classList.add('modal-container-close');
        });
      }
