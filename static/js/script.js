// 原來的particles設定...
particlesJS.load('particles-js', '{{ url_for("static", filename="particles.json") }}', function() {
    console.log('particles.js loaded');
  });
  
  // 新增打字機效果
  const typingElement = document.querySelector('.typing');
  const texts = ['Justin', '全端開發者', '技術愛好者'];
  let index = 0;
  let charIndex = 0;
  
  function type() {
      if (charIndex < texts[index].length) {
          typingElement.textContent += texts[index].charAt(charIndex);
          charIndex++;
          setTimeout(type, 100);
      } else {
          setTimeout(erase, 2000);
      }
  }
  
  function erase() {
      if (charIndex > 0) {
          typingElement.textContent = texts[index].substring(0, charIndex - 1);
          charIndex--;
          setTimeout(erase, 50);
      } else {
          index = (index + 1) % texts.length;
          setTimeout(type, 500);
      }
  }
  
  // 初始化
  document.addEventListener('DOMContentLoaded', function() {
      if (typingElement) {
          type();
      }
  });