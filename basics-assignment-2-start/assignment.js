const task3Element = document.getElementById('task-3');

function alertMessage() {
  alert('Hello World!');
}

function alertName(name) {
  alert(name);
}

alertMessage();
alertName('Max');

task3Element.addEventListener('click', alertMessage);

function concatStrings(string1, string2, string3) {
  return string1 + string2 + string3;
}

alert(concatStrings('Hello ', 'World ', 'from function!'));
