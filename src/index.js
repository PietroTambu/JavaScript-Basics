function counter(e){
    var num = Number(e);

    var value = Number(document.getElementById('counter').innerHTML);

    document.getElementById("counter").innerHTML = value + num;
} 