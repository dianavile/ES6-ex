// Reemplaça en el següent bloc de codi la promesa per aync/await:
// 
// function b() {
//    // ...
// }
// funtion a() {
//    b().then() = > {
//    doMoreWork();
//    }
// }

//OPTION 1
function b() {
   // 
}
async function a() {
   let c = await b();
   doMoreWork();
}
a();
//Promise {<fulfilled>: undefined}

//OPTION 2
function b() {
    // ...
}
async function a() {
   try{
        const c = await b();
   } catch{
        alert(err);
   }
}
a();
//Promise {<fulfilled>: undefined}


