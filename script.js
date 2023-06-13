document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("cta-button");
  const paragraphs = document.querySelectorAll("#animated-text p");

  button.addEventListener("click", function() {
    paragraphs.forEach(function(paragraph, index) {
      setTimeout(function() {
        paragraph.classList.add("appear");
      }, (index + 1) * 1000);
    });
  });
});

var isOverflowHidden = true;

function toggleOverflow() {
  var body = document.body;
  
  if (isOverflowHidden) {
    body.classList.remove('overflow-hidden');
    body.classList.add('overflow-auto');
  } else {
    body.style.overflow = 'auto';
  }
  
  isOverflowHidden = !isOverflowHidden;
}


