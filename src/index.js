window.onload = () => {
    counter('0');
}

function counter(e){
    var num = Number(e);

    if(localStorage.getItem('counter')){
        var value = Number(localStorage.getItem('counter'));
        document.getElementById("counter").innerHTML = value;
    }else{
        value = Number(document.getElementById('counter').innerHTML);
        localStorage.setItem('counter', value);
    }

    localStorage.setItem('counter',Number(value + num));
    document.getElementById("counter").innerHTML = value + num;
} 

function reset() {
    localStorage.setItem('counter', 0);
    document.getElementById("counter").innerHTML = localStorage.getItem('counter');
}
