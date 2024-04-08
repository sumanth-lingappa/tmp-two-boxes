function runPythonScript() {
  var inputText = document.getElementById('input').value;

  // Send input to Python script
  fetch('your_python_script.py', {
    method: 'POST',
    body: JSON.stringify({ input: inputText }),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('output').innerText = data.output;
  })
  .catch(error => console.error('Error:', error));
}
