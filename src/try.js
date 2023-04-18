let a = 0

const lak = new Promise((res, rej) => {
    setTimeout(() => {

        a = 10
        res(a)

        
    }, 1000)
})
.then((val) => { console.log(val) })

// console.log(a);
