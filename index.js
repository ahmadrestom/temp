fetch('https://quiet-journey-86159.herokuapp.com/data')
  .then(response => response.json())
  .then(json => console.log(json))