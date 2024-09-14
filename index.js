// console.log("hello")

// setTimeout(()=>{
//     console.log('hello');
// },2000)

function setout(getid, nextis){
    setTimeout(()=>{
        console.log("data =",getid)
        if(nextis){
            nextis();
        }
    },2000)
}

setout(1,()=>{
    setout(2,()=>{
        setout(3)
    })
})