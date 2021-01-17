import './style.css';

window.onload = () => {
    document.getElementById("counter").innerHTML = localStorage.getItem('counter');

    document.getElementById("decrease").addEventListener("click", () => {
        var value = Number(localStorage.getItem('counter'));
        document.getElementById("counter").innerHTML = --value;
        localStorage.setItem('counter',Number(value--));
    });
        
        
        document.getElementById("increase").addEventListener("click", () => {
        var value = Number(localStorage.getItem('counter'));
        document.getElementById("counter").innerHTML = ++value;
        localStorage.setItem('counter',Number(value++));
    });
        
        document.getElementById("reset").addEventListener("click", () => {
        localStorage.setItem('counter',Number(0));
        document.getElementById("counter").innerHTML = 0 ;
    });
}

