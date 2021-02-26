function sub(btnId, menuId) {
  const button = document.getElementById(btnId);
  button.addEventListener('click', function() {
    const target = document.getElementById(menuId);
    target.classList.toggle('hidden')
  })
}
sub('btnId', 'menuId')