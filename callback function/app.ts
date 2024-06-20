function callback(callback:(name:string) => void , newName:string){
    callback(newName)
}
let arrowFunc = (name:string) => {
    console.log(` hellow , mr / mrs : ${name}`);
    
}
callback(arrowFunc,"Ali")
