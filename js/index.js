const userList = document.getElementById('user-list')
const li = document.createElement('li')

function fetchGithubByValue(value){
    fetch( `https://api.github.com/search/users?q=${value}`, {
        headers: {
          "Accept": "application/vnd.github.v3+json"
        }
      })
      .then(res => res.json())

      .then(json => {
        userList.innerHTML = '';
        json.items.forEach(user => {
          appendLi(createLi(user));
      })
      });
    }
      
     

const submitBtn = document.getElementById('submit-button')
const searchBox = document.getElementById('search')

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  fetchGithubByValue(searchBox.value)
})

function createLi(user) {
  li.innerHTML = user.login;
  return li;
}

function appendLi(li) {
  userList.append(li);
}