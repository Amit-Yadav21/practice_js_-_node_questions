const factorial = 1
num = 4
for (let i=num; i>=1; i--){
    factorial *=i
}
// console.log(factorial);

var n = 4
var ans = 1;
for (var i = 2; i <= n; i++)
    ans = ans * i;
// console.log(ans);

function Factorial(n) {
    var ans=1;
    for (var i = 2; i <= n; i++)
        ans = ans * i;
    return ans;
}
// console.log(Factorial(5));

