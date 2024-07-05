document.addEventListener('DOMContentLoaded', function () {
  /* Hiệu ứng cho nút Back to Top */
  const backToTopButton = document.querySelector('.button-top');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  document
    .querySelector('.btn-back-top .Btop')
    .addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });

  /* Hiệu ứng cho bốn skill */
  const icons = document.querySelectorAll('.txt-icon');

  function checkIconsVisibility() {
    icons.forEach((icon) => {
      const rect = icon.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        icon.classList.add('animate');
      }
    });
  }

  window.addEventListener('scroll', checkIconsVisibility);
  checkIconsVisibility();

  /* Hiệu ứng cho ngôi sao */
  const courses = document.querySelectorAll('.a-course');

  courses.forEach((course) => {
    const voteStars = course.querySelectorAll('.vote-star');
    const hidenStar = course.querySelector('.hiden-star');

    voteStars.forEach((star, index) => {
      const originalSrc = star.src; // Lưu lại đường dẫn hình ảnh ban đầu

      star.addEventListener('mouseenter', function () {
        hidenStar.style.display = 'inline'; // Hiển thị hiden-star
        hidenStar.textContent = getStarText(index + 1); // Cập nhật nội dung hiden-star
        star.src = 'img/star-4.png'; // Thay đổi hình ảnh khi hover
      });

      star.addEventListener('mouseleave', function () {
        hidenStar.style.display = 'none'; // Ẩn hiden-star khi di chuột ra
        star.src = originalSrc; // Đổi lại hình ảnh ban đầu
      });
    });
  });

  // Hàm để lấy nội dung của hiden-star dựa trên số sao
  function getStarText(starCount) {
    if (starCount === 1) {
      return '1 Stars';
    } else {
      return starCount + ' Stars';
    }
  }

  /* Hiệu ứng cho about-course */
  const aboutPlace = document.querySelector('.about-course');

  function checkAboutPlaceVisibility() {
    const rect = aboutPlace.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Kiểm tra khi phần tử about-course xuất hiện trong viewport
    if (rect.top < windowHeight && rect.bottom >= 0) {
      aboutPlace.classList.add('animate');
    }
  }

  window.addEventListener('scroll', checkAboutPlaceVisibility);
  checkAboutPlaceVisibility();

  /* Hiệu ứng cho btn-scroll */
  const scrollCourseBtn = document.querySelector('.btn-scroll');

  function checkScrollCourseVisibility() {
    const rect = scrollCourseBtn.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Kiểm tra khi phần tử btn-scroll xuất hiện trong viewport
    if (rect.top < windowHeight && rect.bottom >= 0) {
      scrollCourseBtn.classList.add('animate');
    }
  }

  window.addEventListener('scroll', checkScrollCourseVisibility);
  checkScrollCourseVisibility();

  /* Hiệu ứng cho swiper-slide */
  const viewCourse = document.querySelector('.view-course');

  function checkViewCourseVisibility() {
    const rect = viewCourse.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      viewCourse.classList.add('animate');
    }
  }

  window.addEventListener('scroll', checkViewCourseVisibility);
  checkViewCourseVisibility();

  /* Hiệu ứng cho scroll-course và hai button */
  const scrollCourse = document.querySelector('.scroll-course');
  const prevButton = document.querySelector('.Bprev');
  const nextButton = document.querySelector('.Bnext');

  // Xác định chiều rộng của một mục a-course
  const courseWidth = document.querySelector('.a-course').offsetWidth;

  nextButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (
      scrollCourse.scrollLeft + scrollCourse.clientWidth >=
      scrollCourse.scrollWidth - courseWidth
    ) {
      // Cuộn về đầu nếu đến cuối
      scrollCourse.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      scrollCourse.scrollBy({
        top: 0,
        left: courseWidth * 1, // Cuộn qua một mục a-course
        behavior: 'smooth',
      });
    }
  });

  prevButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (scrollCourse.scrollLeft <= 0) {
      // Cuộn về cuối nếu đến đầu
      scrollCourse.scrollTo({
        top: 0,
        left: scrollCourse.scrollWidth,
        behavior: 'smooth',
      });
    } else {
      scrollCourse.scrollBy({
        top: 0,
        left: -courseWidth * 1, // Cuộn qua một mục a-course
        behavior: 'smooth',
      });
    }
  });

  // Kéo bằng chuột để xem các a-course
  let isDragging = false;
  let startX;
  let scrollLeft;

  scrollCourse.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - scrollCourse.offsetLeft;
    scrollLeft = scrollCourse.scrollLeft;
    scrollCourse.classList.add('active'); // Thêm lớp CSS khi kéo
  });

  scrollCourse.addEventListener('mouseleave', () => {
    if (!isDragging) return;
    isDragging = false;
    scrollCourse.classList.remove('active');

    // Tính toán khoảng cách đã kéo
    const endX = e.pageX - scrollCourse.offsetLeft;
    const distance = endX - startX;
    if (distance > courseWidth / 2) {
      // Kéo qua bên phải
      scrollCourse.scrollBy({
        top: 0,
        left: courseWidth,
        behavior: 'smooth',
      });
    } else if (distance < -courseWidth / 2) {
      // Kéo qua bên trái
      scrollCourse.scrollBy({
        top: 0,
        left: -courseWidth,
        behavior: 'smooth',
      });
    }
  });

  scrollCourse.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    scrollCourse.classList.remove('active');

    // Tính toán khoảng cách đã kéo
    const endX = e.pageX - scrollCourse.offsetLeft;
    const distance = endX - startX;
    if (distance > courseWidth / 2) {
      // Kéo qua bên phải
      scrollCourse.scrollBy({
        top: 0,
        left: courseWidth,
        behavior: 'smooth',
      });
    } else if (distance < -courseWidth / 2) {
      // Kéo qua bên trái
      scrollCourse.scrollBy({
        top: 0,
        left: -courseWidth,
        behavior: 'smooth',
      });
    }
  });

  scrollCourse.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollCourse.offsetLeft;
    const walk = (x - startX) * 2; // Tốc độ kéo
    scrollCourse.scrollLeft = scrollLeft - walk;
  });

  /* Kéo bằng chuột để xem các content-img trong view-course */
  const swiperSlide = document.querySelector('.swiper-slide');

  let isSwiperDragging = false;
  let swiperStartX;
  let swiperScrollLeft;

  swiperSlide.addEventListener('mousedown', (e) => {
    isSwiperDragging = true;
    swiperStartX = e.pageX - swiperSlide.offsetLeft;
    swiperScrollLeft = swiperSlide.scrollLeft;
    swiperSlide.classList.add('active'); // Thêm lớp CSS khi kéo
  });

  swiperSlide.addEventListener('mouseleave', () => {
    isSwiperDragging = false;
    swiperSlide.classList.remove('active');
  });

  swiperSlide.addEventListener('mouseup', () => {
    isSwiperDragging = false;
    swiperSlide.classList.remove('active');
  });

  swiperSlide.addEventListener('mousemove', (e) => {
    if (!isSwiperDragging) return;
    e.preventDefault();
    const x = e.pageX - swiperSlide.offsetLeft;
    const walk = (x - swiperStartX) * 2; // Tốc độ kéo
    swiperSlide.scrollLeft = swiperScrollLeft - walk;
  });
});
