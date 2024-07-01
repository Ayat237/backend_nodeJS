const postTitle = document.getElementById("title")
const postDescription = document.getElementById("description")
const postPrice = document.getElementById("price")
let posts = []

function fetchData()
{
      fetch('http://localhost:5000/posts')
      .then(response => response.json())
      .then(data => {
            console.log(data.result)
            posts = data.result;
            display()
      })
}
fetchData() 
 
function display()
{
      let box =``
      for(let i = 0;i<posts.length; i++){
            box += `<tr>
            <td>${i+1}</td>
            <td>${posts[i].title}</td>
            <td>${posts[i].description}</td>
            <td>${posts[i].price}</td>
            <td>
                <button onclick="setData(${i})" class="btn btn-success">update</button>
                <button onclick="deleteData(${i})" class="btn btn-danger">delete</button>
            </td>
            </tr>`
      }
document.getElementById("tbody").innerHTML =box
}


function addPost()
{
      let data = {
            title : postTitle.value,
            description : postDescription.value,
            price : postPrice.value
      }
      api("POST",data)
      clear()
}
let globalId =''
function setData(i)
{
      globalId = posts[i].id
      postTitle.value = posts[i].title
      postDescription.value = posts[i].description
      postPrice.value = posts[i].price

      document.getElementById("add").style.display = "none"
      document.getElementById("update").style.display = "block"
}

function updatePost(){
      let data = {
            id : globalId,
            title : postTitle.value ,
            description : postDescription.value,
            price : postPrice.value
      }
      api("PUT",data)
      document.getElementById("add").style.display = "block"
      document.getElementById("update").style.display = "none"
      clear()
}
function deleteData(i)
{
      let data =
      {
            id : posts[i].id
      }
      api("DELETE",data)
}

function clear()
{
      postTitle.value =""
      postDescription.value =""
      postPrice.value =""
            
}
function api(method,data)
{
      fetch('http://localhost:5000/posts', {
  method,
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(res => res.json())
  .then(res =>{
      fetchData()
});
}