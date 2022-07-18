let currentVal=0;
let result=0;
let isClickSymbol=false;
let isClickNumber=false;
let selectSymbol=0;

function ClickNumber(val){

    if(isClickSymbol && !isClickNumber){
        $('#inputVal').text(0);
    }

    let inputVal=$('#inputVal').text();

    if(inputVal==0){
        $('#inputVal').text(val);
    }else{
        $('#inputVal').text(inputVal+''+val);
    }

    isClickNumber=true;
}

function ClickSymbol(val){
  let inputVal=$('#inputVal').text();
  switch (val){
    case 1:
      selectSymbol = 1;
      if(!isClickSymbol){
        currentVal=inputVal;
      }else if(isClickSymbol && isClickNumber){
        result=parseFloat(currentVal)/parseFloat(inputVal);
        currentVal=result;
        $('#inputVal').text(result);
    }
    isClickSymbol=true;
    isClickNumber=false;
    break;
    case 2:
      selectSymbol=2;
      if(!isClickSymbol){
        currentVal=inputVal;
      }else if(isClickSymbol && isClickNumber){
        result=parseFloat(currentVal)*parseFloat(inputVal);
        currentVal=result;
        $('#inputVal').text(result);
      }
      isClickSymbol=true;
      isClickNumber=false;
      break;
      case 3:
        selectSymbol = 3;
        if(!isClickSymbol){
          currentVal=inputVal;
      }else if(isClickSymbol && isClickNumber){
          result=parseFloat(currentVal)-parseFloat(inputVal);
          currentVal=result;
          $('#inputVal').text(result);
      }
      isClickSymbol=true;
      isClickNumber=false;
      break;
      case 4:
        selectSymbol = 4;
        if(!isClickSymbol){
          currentVal=inputVal;
      }else if(isClickSymbol && isClickNumber){
          result=parseFloat(currentVal)+parseFloat(inputVal);
          currentVal=result;
          $('#inputVal').text(result);
      }
      isClickSymbol=true;
      isClickNumber=false;
      break;
      case 5:
        ClickSymbol(selectSymbol);
      break;
      case 6:
        if(!inputVal.includes('.')){
          inputVal=inputVal+'.';
          $('#inputVal').text(inputVal);
      }
      break;
        

  }
}