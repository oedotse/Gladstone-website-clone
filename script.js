document.addEventListener('DOMContentLoaded', () => {
    // Carousel (only initialize if carousel elements exist)
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const arrows = document.querySelectorAll('.carousel-arrow');

    if (slides.length > 0 && indicators.length > 0) {
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.style.display = 'none');
            indicators.forEach(dot => dot.classList.remove('active'));

            // guard index
            if (index < 0) index = 0;
            if (index >= slides.length) index = slides.length - 1;

            slides[index].style.display = 'block';
            indicators[index].classList.add('active');
        }

        showSlide(currentIndex);

        if (arrows.length >= 2) {
            // right arrow (next)
            arrows[1].addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
            });

            // left arrow (previous)
            arrows[0].addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                showSlide(currentIndex);
            });
        }

        // Dot navigation
        indicators.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                showSlide(currentIndex);
            });
        });
    }

    // ===== SUBSCRIBE POPUP SCRIPT =====
    const openSubscribe = document.getElementById('open-subscribe');
    const closeSubscribe = document.getElementById('close-subscribe');
    const subscribeModal = document.getElementById('subscribe-modal');
    const subscribeForm = document.getElementById('subscribe-form');

    if (openSubscribe && subscribeModal) {
        openSubscribe.addEventListener('click', () => {
            subscribeModal.style.display = 'flex';
        });
    }

    if (closeSubscribe && subscribeModal) {
        closeSubscribe.addEventListener('click', () => {
            subscribeModal.style.display = 'none';
        });
    }

    // Click outside closes modal
    if (subscribeModal) {
        window.addEventListener('click', (e) => {
            if (e.target === subscribeModal) {
                subscribeModal.style.display = 'none';
            }
        });
    }

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing!');
            if (subscribeModal) subscribeModal.style.display = 'none';
        });
    }
});

