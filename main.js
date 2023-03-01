document.querySelector('.switcher-btn').onclick = () => {
    document.querySelector('.color-switcher').classList.toggle("active")
    };
    
    let theme_btn = document.querySelectorAll('.theme-buttons');
    
    theme_btn.forEach(color =>{
      color.addEventListener('click', () =>{
        let dataColor = color.getAttribute('data-color');
        document.querySelector(":root").style.setProperty('--main-color', dataColor);
      });
    })    