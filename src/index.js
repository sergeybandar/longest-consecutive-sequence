module.exports = function longestConsecutiveLength(array) {
  // your solution here
var c = 1;
var d = 1;
  array.sort(com);
if (array.length == 0) {
return 0;
}
function com(a,b){
if(a>b) return 1;
if(a<b) return -1;
}
for (var i=0; i<array.length; i++){
if(array[i]+1 == array[i+1]){
c++;
if(c>d){
d=c;
}
}
else if(array[i] == array[i+1]){
c=c;
}
else c=1;
}
return d;
}
