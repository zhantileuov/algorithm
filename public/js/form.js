var stepInput = document.getElementById('step-input');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');

add_more_fields.onclick = function(){
  var div = document.createElement('div')
  div.setAttribute('class', 'step')
  var newField = document.createElement('input')
  newField.setAttribute('type', 'text')
  newField.setAttribute('size',50);
  newField.setAttribute('name',"step "  + stepInput.childElementCount);
  newField.setAttribute('placeholder','Step ' + stepInput.childElementCount);
  var newSelect = document.createElement('select')
  newSelect.setAttribute('name', 'step '+ stepInput.childElementCount)
  var array = ['critical', 'not critical']
  var option = document.createElement("option");
  var point = document.createElement("input")
  point.setAttribute('type', 'number')
  point.setAttribute('name',"step "  + stepInput.childElementCount);

  for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    newSelect.appendChild(option);
}
  newSelect.appendChild(option)
  div.appendChild(newField)
  div.appendChild(newSelect)
  div.appendChild(point)
  stepInput.appendChild(div)

}
remove_fields.onclick = function(){
  var divs = document.getElementsByClassName('step')
  stepInput.removeChild(divs[(divs.length) - 1]);

}
