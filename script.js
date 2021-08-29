window.addEventListener('DOMContentLoaded', function(event) {
    'use strict';
  
    const testimonialBlock = (trigger) => {
        try {
            const block = document.querySelector(trigger),
                  liTags = block.querySelectorAll('.sppb-carousel-indicators li'),
                  messageTags = block.querySelectorAll('.sppb-item'),
                  autoTimer = block.getAttribute('data-interval');
                  
            let paused = false,
                slideIndex = 0;
            
            liTags.forEach((item, key) => {
                item.addEventListener('click', () => {
                    removeActive(liTags);
                    removeActive(messageTags);
                    
                    slideIndex = key;
                    
                    messageTags[slideIndex].classList.add('active');
                    item.classList.add('active');
                });
            });
            
            function showSlides(key) {
                if (key > messageTags.length - 1) {
                    slideIndex = 0;
                }
        
                if (key < 0) {
                    slideIndex = messageTags.length - 1;
                }
        
                messageTags.forEach((item, key) => {
                    removeActive(liTags);
                    removeActive(messageTags);
                    
                    liTags[slideIndex].classList.add('active');
                    messageTags[slideIndex].classList.add('active');
                });
            }
        
            showSlides(slideIndex);
            
            function removeActive(tag) {
                tag.forEach(item => {
                    item.classList.remove('active');
                });
            }
            
            function plusSlides(n) {
                showSlides(slideIndex += n);
            }
            
            function activateAnimation() {
                paused = setInterval(function() {
                plusSlides(1);
                }, autoTimer);
            }
            
            activateAnimation();
    
            block.addEventListener('mouseenter', () => {
                clearInterval(paused);
            });
            
            block.addEventListener('mouseleave', () => {
                activateAnimation();
            });
        } catch(e){}
    }

    testimonialBlock('#sppb-testimonial');
});
