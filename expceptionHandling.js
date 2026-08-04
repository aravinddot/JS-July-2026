

const name = "automation";


try {
    console.log(name)
} catch(err) {

   console.log(err.message)
//    console.log(err.name)
//    console.log(err.stack)
} finally {
    console.log("this block will always execute")
}