const form = document.getElementById('regForm');
const fields = ['name', 'email', 'password'];

function setError(field, msg){
  document.getElementById(field + 'Error').textContent = msg;
  document.getElementById(field).classList.toggle('invalid', !!msg);
}

function validate(){
  let ok = true;

  const name = document.getElementById('name').value.trim();
  if(!name){ setError('name', 'Name cannot be empty.'); ok = false; }
  else setError('name', '');

  const email = document.getElementById('email').value.trim();
  if(!email){ setError('email', 'Email cannot be empty.'); ok = false; }
  else setError('email', '');

  const password = document.getElementById('password').value;
  if(password.length < 8){ setError('password', 'Password must be at least 8 characters.'); ok = false; }
  else setError('password', '');

  return ok;
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('successMsg').style.display = 'none';
  if(validate()){
    document.getElementById('successMsg').style.display = 'block';
    form.reset();
  }
});

// clear a field's error as soon as the user fixes it
fields.forEach(f => {
  document.getElementById(f).addEventListener('input', () => {
    if(document.getElementById(f + 'Error').textContent) validate();
  });
});