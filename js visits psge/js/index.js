function visitLink(path) {
  if (!localStorage.getItem(path)) {
    localStorage.setItem(path, 0)
  }
  let quantityCount = +localStorage.getItem(path)
  if(localStorage.getItem(path)) {
    localStorage.setItem(path,++quantityCount)  
  }
  let getValue = localStorage.getItem(path)
  return getValue
}

function viewResults() {
  let ul = document.createElement('ul')
  let value = Object.keys(localStorage)
  for (let key of value) {
    let li = document.createElement('li')
    document.body.appendChild(ul)
    ul.appendChild(li)
    li.innerHTML = `You visited ${key} ${localStorage.getItem(key)} time(s)`
    console.log(key + ' :' + localStorage.getItem(key))
  }

  let fs = 10000;
setTimeout(function () {
document.body.removeChild(ul)
localStorage.clear()
}, fs)  
}