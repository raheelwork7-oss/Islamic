function toggleMenu() {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.toggle("active");
    }



   window.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader-wrapper");
    
    // Check karein ke kya 'loaderShown' pehle se memory mein hai?
    if (!sessionStorage.getItem("loaderShown")) {
        
        // Agar nahi hai, toh loader dikhao
        loader.style.display = "flex";
        document.body.style.overflow = "hidden"; // Scrolling band

        setTimeout(() => {
            loader.classList.add("loader-hidden");
            document.body.style.overflow = "auto"; // Scrolling shuru
            
            // Memory mein save karlo ke loader dikha diya gaya hai
            sessionStorage.setItem("loaderShown", "true");
        }, 3000); // 3 seconds ka time

    } else {
        // Agar loader pehle dikh chuka hai, toh seedha hide rakho
        loader.style.display = "none";
        document.body.style.overflow = "auto";
    }
});




const cursor = document.querySelector('.islamic-cursor');

document.addEventListener('mousemove', (e) => {
    // Cursor ko mouse ke sath move karna
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Interactive elements par hover effect
const targets = document.querySelectorAll('a, button, .special-card, input');

targets.forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-grow');
        // Hover par rotation tez ho sakti hai
        document.querySelector('.star-icon').style.animationDuration = '2s';
    });
    
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-grow');
        document.querySelector('.star-icon').style.animationDuration = '10s';
    });
});

// Click effect
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
});
document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});