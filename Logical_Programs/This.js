//Arrow Functions Don’t Have this Binding


const person = {
    name: 'Nathan',
    skills: ['HTML', 'CSS', 'JavaScript'],
  
    showSkills() {
      this.skills.forEach(function (skill) {
        console.log(`${this.name} is skilled in ${skill}`);
      });
    },
  };
  
  person.showSkills();
  /*
undefined is skilled in HTML
undefined is skilled in CSS
undefined is skilled in JavaScript
  */


const person2 = {
    name: 'Nathan',
    skills: ['HTML', 'CSS', 'JavaScript'],
  
    showSkills2() {
      this.skills.forEach( (skill) => {
        console.log(`${this.name} is skilled in ${skill}`);
      });
    },
  };
  
  person2.showSkills2();
  /*
Nathan is skilled in HTML
Nathan is skilled in CSS
Nathan is skilled in JavaScript

  */