
var userlog = document.getElementById('users');

document.getElementById('my-form').addEventListener('submit', function (e) {
  e.preventDefault();
  var username = document.getElementById('name').value.trim();
  var usermail = document.getElementById('email').value.trim();

  var userDetail = {
    name: username,
    email: usermail,
  };

    // localStorage.setItem(userDetail.name, JSON.stringify(userDetail));

  /*network call */

  axios.post('https://crudcrud.com/api/99e06aab6d6144cd9e50ed688312361f/appointmentdata',userDetail)
        .then((response) => {
          displayList(response.user); /*displaying the user details onto screen */
          console.log(response);
        })
        .catch((err) => console.log(err));
  displayList(userDetail);
  document.getElementById('my-form').reset();
  document.getElementById('name').focus();
});
window.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    Object.keys(localStorage).forEach((key) => {
      const user = JSON.parse(localStorage.getItem(key));
      displayList(user);
    });
  });

function displayList(user) {
    document.getElementById('name').value.trim();
    document.getElementById('email').value.trim();  

    if(localStorage.getItem(user.name) !== null){
        removeUserFromScreen(user.name)
    }

    const parentNode = document.getElementById('users');
    const childHTML = `<li id=${user.name}> ${user.name} - ${user.email}
                            <button onclick=deleteUser('${user.name}')> Delete User </button>
                            <button onclick=editUserDetails('${user.name}','${user.email}')>Edit User </button>
                         </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUserDetails( name, emailId){
    document.getElementById('name').value = name;
    document.getElementById('email').value = emailId;
    deleteUser(name)
 }
 function deleteUser(name){
    console.log(name)
    localStorage.removeItem(name);
    removeUserFromScreen(name);

}
function removeUserFromScreen(name){
    const parentNode = document.getElementById('users');
    const childNodeToBeDeleted = document.getElementById(name);
    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }
}