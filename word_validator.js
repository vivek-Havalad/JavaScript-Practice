const fs = require("fs");
class WordValidator{
  constructor(fileName) {
    try{
      this.file = fs.readFileSync(fileName, 'utf8');
      this.file = this.file.replace(/\n/g, " ");
      console.log(this.file);

    }catch (e) {
      this.file = "";
    }
    this.valid_patterns = ["employee", "taskPro", "simple", "effect", "name"];
  }
  async readFile(getType){
    if(getType === "word"){
      return this.file.split(" ")
    } else {
      return this.file.split("");
    }
  }
  async matchEachCharacter() {
    let chars = await this.readFile();
    let invalid_patterns = [], valid_patterns = [];
    let init_stack = [];
    let pattern = new RegExp(/^\$\{[a-zA-Z]+\}{1}[^\}\{]*$/)
    for(let i = 0 ; i < chars.length; i++ ){
      if(chars[i] === "$" && (chars[i+1] && chars[i+1] === "{")) {
        init_stack.push(chars[i]);
        i++;
        init_stack.push(chars[i]);
        i++;
        while(chars[i] !== "}" && chars[i] !== " "){
          init_stack.push(chars[i]);
          i++;
        }
        while(chars[i] !== " " && chars[i] === "}"){
          init_stack.push(chars[i]);
          i++;
        }
      }
      let finalLst = init_stack.join("");
      if(pattern.test(finalLst)){
        if(this.valid_patterns.find(x => finalLst.includes(x))) {
          valid_patterns.push(finalLst);
        } else {
          invalid_patterns.push(finalLst);
        }
      } else if(finalLst.length) {
        invalid_patterns.push(finalLst);
      }
      init_stack = [];
    }
    valid_patterns = valid_patterns.filter((e) => this.valid_patterns.find(x => e.includes(x)));
    return [invalid_patterns, valid_patterns];
  }
  async matchEachWord(){
    let words = await this.readFile("word");
    let invalid_patterns = [], valid_patterns = [];
    let pattern = new RegExp(/^\$\{[a-zA-Z]+\}{1}[^\}\{]*$/);
    let invalid_match = new RegExp(/^\$.*\{.*[a-zA-Z]+\}.*/);
    for(let i = 0; i < words.length; i++){
      const each_word = words[i];
      if(pattern.test(each_word)){
        if(this.valid_patterns.find(x => each_word.includes(x))) {
          valid_patterns.push(each_word);
        } else {
          invalid_patterns.push(each_word);
        }
      } else if (invalid_match.test(each_word)) {
        invalid_patterns.push(each_word);
      }
    }
    return [invalid_patterns, valid_patterns]
  }
}

setTimeout(async() => {
  const obj = new WordValidator("./sample.txt");
  console.log("char---->",await obj.matchEachCharacter());
  console.log("word---->",await obj.matchEachWord());
})
