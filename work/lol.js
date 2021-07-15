
window.onload = function() {
    let ol = document.querySelector('ol')
    const sorted = [... new Set(ol.innerHTML.split(/\n/).filter(s => s.length > 1))]
    ol.innerText = ''

    for(let i = 0; i < sorted.length; i++ ) {
      const li = document.createElement("li");
      li.insertAdjacentHTML(
        "beforeend",
        sorted[i]
      )
      ol.appendChild(li);
    }
  };