document
.getElementById('my-form')
.addEventListener('submit',async function submit(e){
    try {
      e.preventDefault();

      const amount = document.getElementById('amount').value;
      const description = document.getElementById('description').value;
      const category = document.getElementById('category').value;

      const user = {
        amount,
        description,
        category,
      };

      const response = await axios.post(
        `https://crudcrud.com/api/025e3f4441c7424e896baa0b7c955e2d/expensetrack`,user);

      if (response.status === 201) {
        console.log(response.data);
        displayUserLog(response.data);

        document.getElementById('my-form').reset();
        document.getElementById('amount').focus();
      } else {
        window.alert(`Error in saving data`);
      }
    } catch (error) {
      console.log('Check with the url. Something is wrong..');
      alert('Unable to save the data.... Try again');
    }
  });

window.onload = async function () {
  try {
    const response = await axios.get('https://crudcrud.com/api/025e3f4441c7424e896baa0b7c955e2d/expensetrack');

    for (var i = 0; i < response.data.length; i++) {
      displayUserLog(response.data[i]);
    }
  } catch (err) {
    alert(`Oops something went wrong `);
  }
};

function displayUserLog(user) {
  document.getElementById('amount').value.trim();
  document.getElementById('description').value.trim();

  const parentNode = document.getElementById('listOfExpenses');
  const childHTML = `<li id=${user._id}> ${user.amount} - ${user.description} - ${user.category}
                            <button onclick=deleteExistingUser('${user._id}')> Delete User </button> 
                            <button onclick=editUserDetails('${user.amount}','${user.description}','${user._id}')> Edit User </button>
                         </li>`;

  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editUserDetails(amount, description, user_id) {
  document.getElementById('amount').value = amount;
  document.getElementById('description').value = description;
  deleteExistingUser(user_id);
}

async function deleteExistingUser(user_id) {
  try {
    const reqId = await axios.delete(
      `https://crudcrud.com/api/025e3f4441c7424e896baa0b7c955e2d/expensetrack/${user_id}`
    );

    deleteUser(user_id);
  } catch (error) {
    console.log('Unable to delete');
  }
}

function deleteUser(id) {
  const parentNode = document.getElementById('listOfExpenses');
  const childNodeToBeDeleted = document.getElementById(id);

  if (childNodeToBeDeleted) {
    parentNode.removeChild(childNodeToBeDeleted);
  }
}