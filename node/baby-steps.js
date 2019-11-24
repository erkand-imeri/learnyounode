const getsumOfParams = process.argv.filter((value, index) => {if(index !== 0 && index !== 1) return value;})
                              .reduce((acc, value) => acc + Number(value) , 0);

console.log(getsumOfParams);