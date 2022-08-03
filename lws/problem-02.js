let sentence = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. dipu Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap dipu into electronic typesetting, remaining essentially unchanged. It was popularised dipu in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";


let matchSen = sentence.match(/dsipu/gi);

let matchSenResult = matchSen ? matchSen.length : 0;

let searchSen = sentence.search(/dispu/i);

let searchSenResult = searchSen >= 0 ? searchSen : "Not Found";

console.log(searchSenResult);



