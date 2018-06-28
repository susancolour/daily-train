function outfun () {
    this.num = 10;
    function infun() {
        console.log(this);
        var num = 100;
        alert(this.num);
        alert(num);
    }
    return infun;
}
var out = new outfun();
console.log(out.num);

function outfun () {
    this.num = 10;
    var a = 99;
    function infun() {
        var num = 100;
        console.log(this.num);
        console.log(num);
        console.log(a);
        console.log(this);
    }
    return infun;
}

outfun()();

function outfun () {
    this.num = 10;
}
var out = new outfun();
console.log(out.num);


function outfun () {
    this.num = 10;
    function infun() {
        console.log(this);
        var num = 100;
        alert(this.num);
        alert(num);
    }
    return infun;
}
outfun()();
