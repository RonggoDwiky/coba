
const door = document.getElementById('door');


door.addEventListener('click', () => {
    
    door.style.transition = 'transform 0.5s ease'; 
    door.style.transform = 'scale(5)'; 
    
    
    setTimeout(() => {
        window.location.href = '3D Model.html'; 
    }, 500); // 
});
