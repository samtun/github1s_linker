var pageHead = document.getElementsByClassName('pagehead-actions')[0];
if (pageHead !== null) {
  var li = document.createElement("li");
  var span = document.createElement("span");
  span.className = "btn btn-sm";
  span.innerText = "github1s";
  li.appendChild(span);
  pageHead.appendChild(li);

  span.addEventListener('click', function() {
    var url1s = window.location.href.replace("github", "github1s");
    window.open(url1s);
  });
}