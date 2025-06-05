document.addEventListener('DOMContentLoaded', function() {
    const redSlider = document.getElementById('redSlider');
    const greenSlider = document.getElementById('greenSlider');
    const blueSlider = document.getElementById('blueSlider');
    
    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');
    
    const colorDisplay = document.getElementById('colorDisplay');
    const presetButtons = document.querySelectorAll('.preset-btn');
    
    function updateColor() {
        const r = parseInt(redSlider.value);
        const g = parseInt(greenSlider.value);
        const b = parseInt(blueSlider.value);
        
        redValue.textContent = r;
        greenValue.textContent = g;
        blueValue.textContent = b;
        
        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        colorDisplay.style.backgroundColor = rgbColor;
    }
    
    function setColor(r, g, b) {
        redSlider.value = r;
        greenSlider.value = g;
        blueSlider.value = b;
        updateColor();
    }
    
    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);
    
    presetButtons.forEach(button => {
        button.addEventListener('click', function() {
            const r = parseInt(this.dataset.r);
            const g = parseInt(this.dataset.g);
            const b = parseInt(this.dataset.b);
            setColor(r, g, b);
        });
    });
    
    updateColor();
});