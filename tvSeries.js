window.onload = function(){ 
    var bfs = document.getElementById("friendss");
    var bhs = document.getElementById("himyms");
    var bts = document.getElementById("tbbts");

    var bfc = document.getElementById("friendsch");
    var bhc = document.getElementById("himymch");
    var btc = document.getElementById("tbbtch");


    bfs.onclick=function(){
        alert("I will be there for you...")
    }

    bhs.onclick=function(){
        alert("Have you met Ted?")
    }
    bts.onclick=function(){
        alert("Knock, knock, knock, Penny!")
    }

    bfc.onclick=function(){
        window.open("https://www.youtube.com/watch?v=Xs-HbHCcK58")
    }
    bhc.onclick=function(){
        window.open("https://www.youtube.com/watch?v=TL-vDBGer24")
    }
    btc.onclick=function(){
        window.open("https://www.youtube.com/watch?v=EhoYKLIcTLM")
    }
};

