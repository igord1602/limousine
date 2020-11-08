/*const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}*/

const ancors = $("html, body");
$('a[href*="#"]').click(function () {
  ancors.stop();
  ancors.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1700
  );
  return false;
});
