var sayi1 = '';
var sayi2 = '';
var secilenOperator = '';

    var numbers = document.querySelectorAll(".num");
        for (var i = 0; i < numbers.length; i++) {
            numbers[i].addEventListener("click", function(){
                if(this.value == '.'){
                    return;
                }
                document.getElementById("result").innerHTML += this.value;
                if(secilenOperator == ''){
                    sayi1 += this.value;
                }
                else if(secilenOperator != ''){
                    sayi2 += this.value;
                }
            }, false);
        }
    
    var operators = document.querySelectorAll(".operator");
    for(var i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", function(){
            if(document.getElementById("result").innerHTML === ""){
                return;
            }
            document.getElementById("result").innerHTML += this.value;
            secilenOperator = this.value;
        }, false);
    }

    document.getElementById("nokta").addEventListener("click", function(){
        if (document.getElementById("result").innerHTML.indexOf('.') != -1) {
            return;
          }

          if (document.getElementById("result").innerHTML === "") {
            output = document.getElementById("result").innerHTML = '0.';
          } else if (document.getElementById("result").innerHTML === output) {
            document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + '.';
          }
        }, false);

        document.getElementById("equal").addEventListener("click", function() {
            var calculationResult = 0;
            if (secilenOperator == '+') {
                calculationResult = parseFloat(sayi1) + parseFloat(sayi2);
              } else if (secilenOperator == '-') {
                calculationResult = parseFloat(sayi1) - parseFloat(sayi2);
              } else if (secilenOperator == '*') {
                calculationResult = parseFloat(sayi1) * parseFloat(sayi2);
              } else if (secilenOperator == '/') {
                calculationResult = parseFloat(sayi1) / parseFloat(sayi2);
              }
              document.getElementById("result").innerHTML = calculationResult;

          sayi1 = '';
          sayi2 = '';
          secilenOperator = '';
        }, false);

        document.getElementById("delete").addEventListener("click", function() {
            document.getElementById("result").innerHTML = '';
  
            sayi1 = '';
            sayi2 = '';
            secilenOperator = '';
          }, false);
        