var input = document.getElementsByTagName('input')[0];
var select = document.getElementById('sel1');
var button = document.getElementsByTagName('button')[0];

console.log(input);


button.addEventListener('click',function() {
    if(validateDate(input.value)){;
    generatePesel(input.value)
    }
    else{
      console.log(input);
      alert("Write correct date");
      
    }
})

function validateDate(date) {
  var path = /^[12][0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/g;
  if (path.test(date)) {
    var year = date.slice(0, 4);
    var month = date.slice(5, 7);
    var day = date.slice(8, 10);
    if (month == "02" || month == "04" || month == "06" || month == "09" || month == "11") {
      if (month == "02") {
        //przypadek  roku przestepnego
        if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
          if (day > 28) {
            alert("zla data");
            return false;
          }
        }
        else{
          if (day > 29) {
            alert("zla data");
            return false;
          }
        }
      }
      else if(day>30) {
        return false;
      }
      else{
        return true;
      }
    }
    else {
      return true;
    }
  }
}

function generatePesel(date) {
  var pesel = "";
  var year = date.slice(0, 4);
  var m = date.slice(5, 7);
  var month = year>=2000? parseInt(m)+20 :m;
  var day = date.slice(8, 10);
  pesel += year.slice(2,4)+month+day;

  for (i =0; i < 3 ; i++){
    pesel += Math.floor(Math.random() * 10);
  }

  pesel += (select == 'K' ? Math.floor(Math.random() * 5) * 2 : Math.floor(Math.random() * 5) * 2 + 1);

  var control = pesel[0] * 1 + pesel[1] * 1 + pesel[2] * 7 + pesel[3] * 9 + pesel[4] * 1 + pesel[5] * 3 + pesel[6] * 7 + pesel[7] * 9 + pesel[8] * 1 + pesel[9] * 3;
  control = (10 - (control % 10)) % 10;
  pesel += control;

  return alert("pesel " +pesel);
}

