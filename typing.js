function callSectionTwo(number) {
  console.log(number);
}
var hero_typed_h1 = new Typed("#hero-typed", {
  strings: ["Hi!^750 My name is Aaravv."],
  typeSpeed: 50,
  showCursor: false,
  onStringTyped: (arrayPos, self) => {
    callSectionTwo(1);
  },
});
var hero_typed_h1 = new Typed("#aboutme-typed", {
  strings: ["About Me"],
  typeSpeed: 50,
  showCursor: false,
  onStringTyped: (arrayPos, self) => {
    callSectionTwo(2);
  },
});
var hero_typed_h1 = new Typed("#projects-typed", {
  strings: ["My Notable Projects"],
  typeSpeed: 50,
  showCursor: false,
  onStringTyped: (arrayPos, self) => {
    callSectionTwo(3);
  },
});
var hero_typed_h1 = new Typed("#achievements-typed", {
  strings: ["My Achievements and Competitions"],
  typeSpeed: 50,
  showCursor: false,
  onStringTyped: (arrayPos, self) => {
    callSectionTwo(4);
  },
});
var hero_typed_h1 = new Typed("#contactme-typed", {
  strings: ["Contact Me"],
  typeSpeed: 50,
  showCursor: false,
  onStringTyped: (arrayPos, self) => {
    callSectionTwo(5);
  },
});
