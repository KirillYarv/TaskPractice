function ranomColor(box) 
{
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    box.style.backgroundColor = `rgb(${r},${g},${b})`;
}


const box = document.querySelector(".box");

const randomColorButton = document.querySelector(".interaction__random-color-button");
randomColorButton.addEventListener('click', () => 
    {
        ranomColor(box);
    }
);

const heightBoxInput = document.querySelector(".interaction__height-input");
heightBoxInput.addEventListener('input', () => 
    {
        box.style.height = event.target.value+"px";
    }
);

const widthBoxInput = document.querySelector(".interaction__width-input");
widthBoxInput.addEventListener('input', () => 
    {
        box.style.width = event.target.value+"px";
    }
);
