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


// page functions
function choice(n,t,p) {
  if (n != '0')
    write("Option "+ n +") "+ t +"<span class='next' onclick='"+ fn(p) +"'> </span>", "choice");
  else
    write(t + "<span class='next' onclick='"+ fn(p) +"'> </span>", "choice");
}

function next(p) {
  write("Next<span class='next' onclick='"+ fn(p) +"'> </span>", "choice");
}

function yesno(t,y,n) {
  write(t, "choice");
  write("Yes<span class='next' onclick='"+ fn(y) +"'> </span> No<span class='next' onclick='"+ fn(n) +"'> </span>", "choice");
}

function fn(p) {
  return 'n.'+ p +'()';
}


// data functions
function data(v) {
  return "<span class='data'>" + player[v] + "</span>";
}

function input(v) {
  return "<input type='text' onkeyup='setinput(this,\""+ v +"\")'>";
}

function setinput(b,v) {
  player[v] = b.value;
  b.className = 'active';
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
	  msg += t.substring(b,a); // text before command

      b = t.indexOf(")",a);
	  msg += eval(t.substring(a+1,b+1)); // execute command
    }
	msg += t.substring(b+1); // text after last command
    return msg;

  } else return t;
}