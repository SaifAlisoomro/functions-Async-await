let url = "https://jsonplaceholder.typicode.com/posts/1"
let func = async() =>{
    let fetchdata = await fetch(url)
    let res = await fetchdata.json()
    console.log(res);
}
func()