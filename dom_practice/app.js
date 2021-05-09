let header = document.querySelector('h1');
let input = document.querySelector('#username');

input.addEventListener('input', () => {
  if (input.value === '') {
    header.innerText = 'Enter Your Username';
  } else {
    header.innerText = `Welcome, ${input.value}`;
  }
});
