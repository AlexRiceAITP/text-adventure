function query(s) {
  let q = document.querySelectorAll(s);
  if (q.length != 1) return q;
  else return q[0];
}

function clear() {
  query('#screen').innerHTML = "";
}

function message(t) {
  write(t,"message");
}


// functions that get and set data
function input(v) {
  return "<input type='text' onkeyup='setinput(this,\""+ v +"\")'>";
}

function setinput(q,v) { // support for input
  player[v] = q.value;
  q.className = 'active';
}

function data(v) {
  console.log("v: " + v);
  return "<span class='data'>" + player[v] + "</span>";
}


// functions that call pages
function next(l) {
  write("Next<span class='next' onclick='"+ fn(l) +"'> </span>", "choice");
}

function yesno(t,y,n) {
  write(t, "choice");
  write("Yes<span class='next' onclick='"+ fn(y) +"'> </span> No<span class='next' onclick='"+ fn(n) +"'> </span>", "choice");
}

function choice(n,t,l) {
  if (n != '0')
    write("Option "+ n +") "+ t +"<span class='next' onclick='"+ fn(l) +"'> </span>", "choice");
  else
    write(t + "<span class='next' onclick='"+ fn(l) +"'> </span>", "choice");
}

function fn(x) {
  return 'n.'+ x +'()';
}





function write(t,c) {
  if (Array.isArray(t))
    for (var i in t)
	query('#screen').innerHTML += '<p class="' + c + '">' + seek(t[i]) + '</p>';
  else
    query('#screen').innerHTML += '<p class="' + c + '">' + seek(t) + '</p>';
}

function seek(t) {
  if (t.includes("$")) {
    let a = -1, b = 0, msg = "";

    while (t.includes("$",a+1)) {
      a = t.indexOf("$",b);
	  msg += t.substring(b,a); // text before chunk

      b = t.indexOf(")",a);
	  msg += eval(t.substring(a+1,b+1)); // evaluate chunk
    }
	msg += t.substring(b+1); // text after last chunk
    return msg;

  } else return t;
}

