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
