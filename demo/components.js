function query(s) {
  if (document.querySelectorAll(s).length > 1)
    return document.querySelectorAll(s);
  else
    return document.querySelector(s);
}

function clear() {
  query('#screen').innerHTML = "";
}

function write(t,c) {
  if (Array.isArray(t))
    for (var i in t)
	query('#screen').innerHTML += '<p class="' + c + '">' + seek(t[i]) + '</p>';
  else
    query('#screen').innerHTML += '<p class="' + c + '">' + seek(t) + '</p>';
}

function message(t) {
  write(t,"message");
}

function input(v) {
  return "<input type='text' onchange='setinput(this,\""+ v +"\")'>";
}

function setinput(q,v) { // support for input
  player[v] = q.value;
  q.className += 'active';
}

function data(v) {
  console.log("v: " + v);
  return "<span class='data'>" + player[v] + "</span>";
}

function next(l) {
  write("Next<span class='next' onclick='"+ l +"()'> </span>", "choice");
}

function yesno(t,y,n) {
  write(t, "choice");
  write("Yes<span class='next' onclick='"+ y +"()'> </span> No<span class='next' onclick='"+ n +"()'> </span>", "choice");
}

function seek(t) {
  if (t.includes("$")) {
    let a = -1, b = 0, msg = "";

    while (t.includes("$",a + 1)) {
      a = t.indexOf("$",b);
	  msg += t.substring(b,a); // text before chunk

      b = t.indexOf(")",a);
	  msg += eval(t.substring(a+1,b+1)); // evaluate chunk
    }
	msg += t.substring(b+1); // text after last chunk
    return msg;

  } else return t;
}

function choice(n,t,l) {
  if (n != '0')
    write("Option "+ n +") "+ t +"<span class='next' onclick='"+ l +"()'> </span>", "choice");
  else
    write(t + "<span class='next' onclick='"+ l +"()'> </span>", "choice");
}