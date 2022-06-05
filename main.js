document.addEventListener('mousemove', parallax);
function parallax(e){
  document.querySelectorAll('.object').forEach(function(move){
    let moving_val = move.getAttribute('data-value')
    let x = e.clientX * moving_val / 250
    let y = e.clientY * moving_val / 250

    move.style.transform = `translate(${x}px, ${y}px)`
  })
}