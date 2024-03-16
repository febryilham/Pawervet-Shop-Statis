// Create scroll to top button
const ScrollButton = () => {
    const scrollToTopButton = document.createElement('span');
    scrollToTopButton.className = 'to-top';
    scrollToTopButton.addEventListener('click', (e) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
    window.onscroll = (e) => {
        scrollToTopButton.classList.toggle('show', this.scrollY > 500)
    }
    const main = document.querySelector('body');
    main.appendChild(scrollToTopButton);
}
ScrollButton();

//promo
let slideIndex = 0;
            const slides = document.getElementsByClassName("slider");

            function showSlides() {
                let i;
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) { slideIndex = 1 }
                slides[slideIndex - 1].style.display = "block";
                setTimeout(showSlides, 5000); // Change slide every 5 seconds
            }

            showSlides();

            function currentSlide(n) {
                slideIndex = n;
                showSlides();
            }

// Prevent default event of anchors in the navbar and smoothly scroll to the target section
const smoothScroll = (target) => {
    const [...links] = document.querySelectorAll('.navbar a');
    const goDown = document.querySelector('.go-down');
    links.push(goDown);
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href');
            if (id) {
                const section = document.querySelector(id);
                section.scrollIntoView({ behavior: "smooth" });
            }
        })
    })
}
smoothScroll();

// Function to update the countdown for each promo
    function updateCountdown(promoId, endDateKey) {
        const promoEndDate = localStorage.getItem(endDateKey);
        if (!promoEndDate) {
            // Set promo end date to one month from now if it doesn't exist
            const currentDate = new Date();
            const endDate = new Date(currentDate);
            endDate.setMonth(endDate.getMonth() + 1);
            localStorage.setItem(endDateKey, endDate);
        }

        // Calculate time difference
        const currentTime = new Date().getTime();
        const endTime = new Date(localStorage.getItem(endDateKey)).getTime();
        let timeDifference = endTime - currentTime;

        // Ensure time difference is positive
        if (timeDifference < 0) {
            timeDifference = 0;
        }

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Display the countdown for the specific promo
        document.querySelector(`#${promoId} .days`).textContent = days < 10 ? '0' + days : days;
        document.querySelector(`#${promoId} .hours`).textContent = hours < 10 ? '0' + hours : hours;
        document.querySelector(`#${promoId} .minutes`).textContent = minutes < 10 ? '0' + minutes : minutes;
        document.querySelector(`#${promoId} .seconds`).textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    // Update countdown every second for each promo
    setInterval(() => {
        updateCountdown('promo1', 'promo1EndDate');
        updateCountdown('promo2', 'promo2EndDate');
        updateCountdown('promo3', 'promo3EndDate');
    }, 1000);

    // Call updateCountdown initially to avoid delay
    updateCountdown('promo1', 'promo1EndDate');
    updateCountdown('promo2', 'promo2EndDate');
    updateCountdown('promo3', 'promo3EndDate');


//video
const videos = document.querySelectorAll('.preview');

    function playVideo(videoId) {
        // Pause all videos
        videos.forEach(video => {
            video.querySelector('video').pause();
            video.style.display = 'none';
        });

        // Show selected video
        const selectedVideo = document.getElementById(videoId);
        selectedVideo.style.display = 'block';
        selectedVideo.querySelector('video').play();
    }

    // Function to show only the first video and hide the rest
    function showFirstVideo() {
        // Hide all videos except the first one
        for (let i = 1; i < videos.length; i++) {
            videos[i].style.display = 'none';
        }

        // Play the first video
        videos[0].style.display = 'block';
        videos[0].querySelector('video').play();
    }

    // Event listeners for video list items
    document.getElementById('video1').addEventListener('click', function () {
        playVideo('preview1');
    });
    document.getElementById('video2').addEventListener('click', function () {
        playVideo('preview2');
    });
    document.getElementById('video3').addEventListener('click', function () {
        playVideo('preview3');
    });
    document.getElementById('video2').addEventListener('click', function () {
        playVideo('preview2');
    });
    document.getElementById('video2').addEventListener('click', function () {
        playVideo('preview2');
    });
    document.getElementById('video2').addEventListener('click', function () {
        playVideo('preview2');
    });
    // Show only the first video when the page loads
    window.addEventListener('load', showFirstVideo);
