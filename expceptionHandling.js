

const name = "automation";


try {
    console.log(name)
} catch(err) {

   console.log(err.message)
//    console.log(err.name)
//    console.log(err.stack)

// throw new Error("this is a custom error")
} finally {
    console.log("this block will always execute")
}