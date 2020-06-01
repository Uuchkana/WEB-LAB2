function Cs142TemplateProcessor(template) {
  console.log(template);
  this.template = template;
}
Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
  var str = this.template;
  console.log(dictionary);
  var reg = /{{[^{]*}}/g;
  var k = /_unana/g;
  console.log(reg);
  hh = str.match(k);
  str = str.replace(/}}/g, "_unana}}");
  console.log(str);
  //str = str.replace(/_unana/g, "");
  var words = str.match(reg);
  console.log(words);
  for (var i = 0; i < words.length; i++) {
    var word = words[i].replace("{{", "").replace("}}", "");
    console.log(word);
    str = str.replace(words[i], dictionary[word] || "");
  }
  console.log(str);
  return str;
};
/*
var template = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
var dateTemplate = new Cs142TemplateProcessor(template);

var dictionary = {month: 'July', day: '1', year: '2016'};
var str = dateTemplate.fillIn(dictionary);

assert(str === 'My favorite month is July but not the day 1 or the year 2016');

//Case: property doesn't exist in dictionary
var dictionary2 = {day: '1', year: '2016'};
var str = dateTemplate.fillIn(dictionary2);

assert(str === 'My favorite month is  but not the day 1 or the year 2016');*/
