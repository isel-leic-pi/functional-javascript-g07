const  args = process.argv
var i, sum = 0
for(i = 2; i<args.length; ++i){
    sum +=Number(args[i])
}
console.log(sum)