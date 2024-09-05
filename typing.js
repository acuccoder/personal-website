function callTyping(section) {
  if (section == 2) {
  }
}

function callSectionTwo(number) {
  if (number == 1) {
    var hero_typed_p = new Typed("p#hero-typed", {
      strings: ["I'm a soccer player, programmer, and mathematician."],
      typeSpeed: 50,
      showCursor: false,
    });
  } else if (number == 2) {
    var hero_typed_p = new Typed("p#aboutme-typed", {
      strings: [
        "Hi! My name is Aaravv. I am Canadian and 11 years old. I like math, soccer, and coding. ",
      ],
      typeSpeed: 50,
      showCursor: false,
    });
  }
}
var hero_typed_h1 = new Typed("h1#hero-typed", {
  strings: ["Hi!^750 My name is Aaravv."],
  typeSpeed: 50,
  showCursor: false,
  onStringTyped: (arrayPos, self) => {
    callSectionTwo(1);
  },
});
var aboutme_typed_h1 = new Typed("h1#aboutme-typed", {
  strings: ["A Little Bit About Me"],
  typeSpeed: 50,
  showCursor: false,
  onStringTyped: (arrayPos, self) => {
    callSectionTwo(2);
  },
});
var projects_typed_h1 = new Typed("h1#projects-typed", {
  strings: ["My Notable Projects"],
  typeSpeed: 50,
  showCursor: false,
  onStringTyped: (arrayPos, self) => {
    callSectionTwo(3);
  },
});
var competitions_typed_h1 = new Typed("h1#achievements-typed", {
  strings: ["My Achievements and Competitions"],
  typeSpeed: 50,
  showCursor: false,
  onStringTyped: (arrayPos, self) => {
    callSectionTwo(4);
  },
});
var contact_typed_h1 = new Typed("h1#contactme-typed", {
  strings: ["Contact Me"],
  typeSpeed: 50,
  showCursor: false,
});
