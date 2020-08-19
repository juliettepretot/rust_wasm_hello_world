import('./rust/pkg').then(({ greet }) => {
  function handleSubmit() {
    event.preventDefault()

    const name = document.getElementById('name').value
    const greeting = greet(name)
    alert(greeting)
  }

  document
    .getElementById('greeting-form')
    .addEventListener('submit', handleSubmit)
})
