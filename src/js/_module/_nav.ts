export function nav() {
  // 要素の取得
  const html = document.documentElement;
  const menuBtn = document.querySelectorAll('.js-nav');
  const nav = document.querySelector('.l-nav');

  if(!menuBtn || !html || !nav) return
  menuBtn.forEach((element)=>{
    element.addEventListener('click', function() {
    if (!html.classList.contains('-fixed')) {
        element.classList.add('-active');
        html.classList.add('-fixed');
        nav.classList.add('-active');
      } else {
        element.classList.remove('-active');
        html.classList.remove('-fixed');
        nav.classList.remove('-active');
      }
    });
  })
}
