document.addEventListener('DOMContentLoaded', function() {
    const redSlider = document.getElementById('redSlider');
    const greenSlider = document.getElementById('greenSlider');
    const blueSlider = document.getElementById('blueSlider');
    
    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');
    
    const colorDisplay = document.getElementById('colorDisplay');
    
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
    
    
    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);
    
    updateColor();
});