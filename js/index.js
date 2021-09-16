var op = 2,p1,p2,p3,p4,p5,p6,p7,p8,p9, flag = 1;
p1=p2=p3=p4=p5=p6=p7=p8=p9=1;
document.getElementById("b1").disabled = true;
document.getElementById("b2").disabled = true;
document.getElementById("b3").disabled = true;
document.getElementById("b4").disabled = true;
document.getElementById("b5").disabled = true;
document.getElementById("b6").disabled = true;
document.getElementById("b7").disabled = true;
document.getElementById("b8").disabled = true;
document.getElementById("b9").disabled = true;

document.querySelector(".Reset").addEventListener("click", function() {
  location.reload();
  document.getElementById("b1").value = '';
  document.getElementById("b2").value = '';
  document.getElementById("b3").value = '';
  document.getElementById("b4").value = '';
  document.getElementById("b5").value = '';
  document.getElementById("b6").value = '';
  document.getElementById("b7").value = '';
  document.getElementById("b8").value = '';
  document.getElementById("b9").value = '';
});
document.querySelector(".x").addEventListener("click", function() {
  op = 1;
});
document.querySelector(".o").addEventListener("click", function() {
  op = 0;
});
document.querySelector(".Play-button").addEventListener("click", function() {
  if (op != 1 && op != 0) {
    alert('Please choose X or Y then click Play');
  } else {
    document.querySelector(".text").textContent ="Let's Play!!";
    document.getElementById("b1").disabled = false;
    document.getElementById("b2").disabled = false;
    document.getElementById("b3").disabled = false;
    document.getElementById("b4").disabled = false;
    document.getElementById("b5").disabled = false;
    document.getElementById("b6").disabled = false;
    document.getElementById("b7").disabled = false;
    document.getElementById("b8").disabled = false;
    document.getElementById("b9").disabled = false;


    document.getElementById("b1").addEventListener("click", func1);
    document.getElementById("b2").addEventListener("click", func2);
    document.getElementById("b3").addEventListener("click", func3);
    document.getElementById("b4").addEventListener("click", func4);
    document.getElementById("b5").addEventListener("click", func5);
    document.getElementById("b6").addEventListener("click", func6);
    document.getElementById("b7").addEventListener("click", func7);
    document.getElementById("b8").addEventListener("click", func8);
    document.getElementById("b9").addEventListener("click", func9);
  }
});



function print(){
  if (op == 0) {
    document.querySelector(".text").style.color="#C2FFD9";
    document.querySelector(".text").style.textShadow=" 0 0 10px #C2FFD9";
    document.querySelector(".text").style.fontFamily = "Dancing Script";
    document.querySelector(".text").style.fontSize="3rem";
    document.querySelector(".text").innerHTML = "Player X won !!";

  } else {
    document.querySelector(".text").style.color="#C2FFD9";
    document.querySelector(".text").style.textShadow="0 0 10px #C2FFD9";
    document.querySelector(".text").style.fontFamily = "Dancing Script";
    document.querySelector(".text").style.fontSize="3rem";
    document.querySelector(".text").innerHTML = "Player O won!!";

  }
}
function func() {
  var bx1, bx2, bx3, bx4, bx5, bx6, bx7, bx8, bx9;
  bx1 = document.getElementById("b1").textContent;
  bx2 = document.getElementById("b2").textContent;
  bx3 = document.getElementById("b3").textContent;
  bx4 = document.getElementById("b4").textContent;
  bx5 = document.getElementById("b5").textContent;
  bx6 = document.getElementById("b6").textContent;
  bx7 = document.getElementById("b7").textContent;
  bx8 = document.getElementById("b8").textContent;
  bx9 = document.getElementById("b9").textContent;

  if (((bx1 == 'X' && bx2 == 'X') && (bx3 == 'X')) || ((bx1 == 'O' && bx2 == 'O') && (bx3 == 'O'))) {

    document.getElementById("b1").style.backgroundColor = "#F35588";
    document.getElementById("b2").style.backgroundColor = "#F35588";
    document.getElementById("b3").style.backgroundColor = "#F35588";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    print();
    flag = 0;
  } else if (((bx1 == 'X') && (bx4 == 'X') && (bx7 == 'X')) || ((bx1 == 'O') && (bx4 == 'O') && (bx7 == 'O'))) {

    document.getElementById("b1").style.backgroundColor = "#F35588";
    document.getElementById("b4").style.backgroundColor = "#F35588";
    document.getElementById("b7").style.backgroundColor = "#F35588";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    print();
    flag = 0;
  } else if (((bx7 == 'X') && (bx8 == 'X') && (bx9 == 'X')) || ((bx7 == 'O') && (bx8 == 'O') && (bx9 == 'O'))) {

    document.getElementById("b7").style.backgroundColor = "#F35588";
    document.getElementById("b8").style.backgroundColor = "#F35588";
    document.getElementById("b9").style.backgroundColor = "#F35588";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    print();
    flag = 0;
  } else if (((bx3 == 'X') && (bx6 == 'X') && (bx9 == 'X')) || ((bx3 == 'O') && (bx6 == 'O') && (bx9 == 'O'))) {

    document.getElementById("b3").style.backgroundColor = "#F35588";
    document.getElementById("b6").style.backgroundColor = "#F35588";
    document.getElementById("b9").style.backgroundColor = "#F35588";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    print();
    flag = 0;

  } else if (((bx1 == 'O') && (bx5 == 'O') && (bx9 == 'O')) || ((bx1 == 'X') && (bx5 == 'X') && (bx9 == 'X'))) {

    document.getElementById("b1").style.backgroundColor = "#F35588";
    document.getElementById("b5").style.backgroundColor = "#F35588";
    document.getElementById("b9").style.backgroundColor = "#F35588";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    print();
    flag = 0;

  } else if (((bx3 == 'O') && (bx5 == 'O') && (bx7 == 'O')) || ((bx3 == 'X') && (bx5 == 'X') && (bx7 == 'X'))) {

    document.getElementById("b3").style.backgroundColor = "#F35588";
    document.getElementById("b5").style.backgroundColor = "#F35588";
    document.getElementById("b7").style.backgroundColor = "#F35588";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    print();
    flag = 0;
  } else if (((bx2 == 'O') && (bx5 == 'O') && (bx8 == 'O')) || ((bx2 == 'X') && (bx5 == 'X') && (bx8 == 'X'))) {

    document.getElementById("b2").style.backgroundColor = "#F35588";
    document.getElementById("b5").style.backgroundColor = "#F35588";
    document.getElementById("b8").style.backgroundColor = "#F35588";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
    print();
    flag = 0;
  } else if (((bx4 == 'O') && (bx5 == 'O') && (bx6 == 'O')) || ((bx4 == 'X') && (bx5 == 'X') && (bx6 == 'X'))) {

    document.getElementById("b4").style.backgroundColor = "#F35588";
    document.getElementById("b5").style.backgroundColor = "#F35588";
    document.getElementById("b6").style.backgroundColor = "#F35588";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
    print();
    flag = 0;

  } else if ((bx1 == 'X' || bx1 == 'O') && (bx2 == 'X' || bx2 == 'O') && (bx3 == 'X' || bx3 == 'O') && (bx4 == 'X' || bx4 == 'O') && (bx5 == 'X' || bx5 == 'O') && (bx6 == 'X' || bx6 == 'O') && (bx7 == 'X' || bx7 == 'O') && (bx8 == 'X' || bx8 == 'O') && (bx9 == 'X' || bx9 == 'O')) {
    document.querySelector(".text").innerHTML = "Match Tie";
    window.alert('Match Tie');
    flag = 0;
  } else {
    if (flag == 1) {
      if (op == 1)
        document.querySelector(".text").textContent = "Player X turn";
      else
        document.querySelector(".text").textContent = "Player O turn";
    }
  }

}

function func1() {
  if (flag && p1) {
    if (op == 1) {
      document.getElementById("b1").innerHTML = "<h2>X</h2>";
      document.getElementById("b1").disabled = true;
      op = 0;
    } else {
      document.getElementById("b1").innerHTML = "<h2>O</h2>";
      document.getElementById("b1").disabled = true;
      op = 1;
    }
    p1=0;
    func();
  }
}

function func2() {
  if (flag && p2) {
    if (op == 1) {
      document.getElementById("b2").innerHTML = "<h2>X</h2>";
      document.getElementById("b2").disabled = true;
      op = 0;
    } else {
      document.getElementById("b2").innerHTML = "<h2>O</h2>";
      document.getElementById("b2").disabled = true;
      op = 1;
    }
    func();
  }
 p2=0;
}

function func3() {
  if (flag && p3) {
    if (op == 1) {
      document.getElementById("b3").innerHTML = "<h2>X</h2>";
      document.getElementById("b3").disabled = true;
      op = 0;
    } else {
      document.getElementById("b3").innerHTML = "<h2>O</h2>";
      document.getElementById("b3").disabled = true;
      op = 1;
    }
    func();
    p3=0;
  }
}

function func4() {
  if (flag && p4) {
    if (op == 1) {
      document.getElementById("b4").innerHTML = "<h2>X</h2>";
      document.getElementById("b4").disabled = true;
      op = 0;
    } else {
      document.getElementById("b4").innerHTML = "<h2>O</h2>";
      document.getElementById("b4").disabled = true;
      op = 1;
    }
    func();
    p4=0;
  }
}

function func5() {
  if (flag && p5) {
    if (op == 1) {
      document.getElementById("b5").innerHTML = "<h2>X</h2>";
      document.getElementById("b5").disabled = true;
      op = 0;
    } else {
      document.getElementById("b5").innerHTML = "<h2>O</h2>";
      document.getElementById("b5").disabled = true;
      op = 1;
    }
    func();
    p5=0;
  }
}

function func6() {
  if (flag && p6) {
    if (op == 1) {
      document.getElementById("b6").innerHTML = "<h2>X</h2>";
      document.getElementById("b6").disabled = true;
      op = 0;
    } else {
      document.getElementById("b6").innerHTML = "<h2>O</h2>";
      document.getElementById("b6").disabled = true;
      op = 1;
    }
    func();
    p6=0;
  }
}

function func7() {
  if (flag && p7) {
    if (op == 1) {
      document.getElementById("b7").innerHTML = "<h2>X</h2>";
      document.getElementById("b7").disabled = true;
      op = 0;
    } else {
      document.getElementById("b7").innerHTML = "<h2>O</h2>";
      document.getElementById("b7").disabled = true;
      op = 1;
    }
    func();
    p7=0;
  }
}

function func8() {
  if (flag && p8) {
    if (op == 1) {
      document.getElementById("b8").innerHTML = "<h2>X</h2>";
      document.getElementById("b8").disabled = true;
      op = 0;
    } else {
      document.getElementById("b8").innerHTML = "<h2>O</h2>";
      document.getElementById("b8").disabled = true;
      op = 1;
    }
    func();
    p8=0;
  }
}

function func9() {
  if (flag && p9) {
    if (op == 1) {
      document.getElementById("b9").innerHTML = "<h2>X</h2>";
      document.getElementById("b9").disabled = true;
      op = 0;
    } else {
      document.getElementById("b9").innerHTML = "<h2>O</h2>";
      document.getElementById("b9").disabled = true;
      op = 1;
    }
    func();
    p9=0;
  }
}
