const trigger = document.querySelector('.trigger')
const body = document.querySelector('body')
trigger.addEventListener('click', toggle)
function toggle() {
  body.classList.toggle('is-menu-visible')
}
