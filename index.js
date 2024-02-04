// Write your code below:
// Write your code below:
function handleFormSubmit(event){
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
 const newLi = document.createElement('li');
    newLi.innerHTML = username + ' - ' + email + ' - ' + phone + '<button class="delete-btn">delete</button>';
 const userList = document.querySelector('#userList');
    userList.appendChild(newLi);
  const obj = {
        username: username,
        email: email,
        phone: phone
    };
 const newobj = JSON.stringify(obj);
 localStorage.setItem(email, newobj);
   const deleteButton = newLi.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
        // Remove the user's details from local storage
        localStorage.removeItem(email);
        // Remove the entire list item from the user list
        userList.removeChild(newLi);
    });
}
module.exports = handleFormSubmit;
