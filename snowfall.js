// Snow
document.addEventListener("DOMContentLoaded", function () {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const snowToggle = document.getElementById('snowToggle');
  
    let isSnowing = snowToggle.checked;
  
    for (let i = 0; i < 50; i++) {
        createSnowflake();
    }
  
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        snowflake.style.animationDelay = `-${Math.random()}s`;
        snowflakesContainer.appendChild(snowflake);
  
        snowflake.addEventListener('animationiteration', () => {
            snowflakesContainer.removeChild(snowflake);
            createSnowflake();
        });
    }
  
    function toggleSnow() {
        isSnowing = snowToggle.checked;
        if (isSnowing) {
            for (let i = 0; i < 50; i++) {
                createSnowflake();
            }
        } else {
            snowflakesContainer.innerHTML = '';
        }
    }
  
    snowToggle.addEventListener('change', toggleSnow);
  });
  