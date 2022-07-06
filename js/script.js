var leftPart = '';
var rightPart = '';
var selectedOperator = '';


    var numbers = document.querySelectorAll(".num");
        for (var i = 0; i < numbers.length; i++) {
          numbers[i].addEventListener("click", function() {
            if (this.value == '.') {
              return;
            }
            document.getElementById("resultInner").innerHTML += this.value;

            if (selectedOperator == '') {
              leftPart += this.value;
            } else if (selectedOperator != '') {
              rightPart += this.value;
            }

          }, false);
        }


        var operators = document.querySelectorAll(".operator");
        for (var i = 0; i < operators.length; i++) {
          operators[i].addEventListener("click", function() {
            if (document.getElementById("resultInner").innerHTML === "") {
              return;
            }
            document.getElementById("resultInner").innerHTML += this.value;

            selectedOperator = this.value;
          }, false);
        }



        document.getElementById("nokta").addEventListener("click", function() {
          if (document.getElementById("resultInner").innerHTML.indexOf('.') != -1) {
            return;
          }

          if (document.getElementById("resultInner").innerHTML === "") {
            output = document.getElementById("resultInner").innerHTML = '0.';
          } else if (document.getElementById("resultInner").innerHTML === output) {
            document.getElementById("resultInner").innerHTML = document.getElementById("result").innerHTML + '.';
          }
        }, false);


        document.getElementById("equal").addEventListener("click", function() {

          var calculationResult = 0;

					
          
          if (selectedOperator == '+') {
            calculationResult = parseFloat(leftPart) + parseFloat(rightPart);
          } else if (selectedOperator == '-') {
            calculationResult = parseFloat(leftPart) - parseFloat(rightPart);
          } else if (selectedOperator == '*') {
            calculationResult = parseFloat(leftPart) * parseFloat(rightPart);
          } else if (selectedOperator == '/') {
            calculationResult = parseFloat(leftPart) / parseFloat(rightPart);
          }


          document.getElementById("resultInner").innerHTML = calculationResult;

          leftPart = '';
          rightPart = '';
          selectedOperator = '';
        }, false);


        document.getElementById("delete").addEventListener("click", function() {
          document.getElementById("resultInner").innerHTML = '';

          leftPart = '';
          rightPart = '';
          selectedOperator = '';
        }, false);
      