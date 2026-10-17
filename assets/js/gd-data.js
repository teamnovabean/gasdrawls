/* Everything the page shows that you might want to edit lives here. */

/* Where every "shop" button goes. Point this at the real store. */
window.GD_SHOP_URL = "https://gasdrawls.com/shop";

/* The discography, drawn as a run of comic issues.
   `art` is optional: drop an image you have the rights to into
   assets/art/ and put its path here. Without one the issue gets a
   drawn cover in its own colors. */
window.GD_ISSUES = [
  { no: 1,  title: "Operation: Doomsday", by: "MF DOOM", year: 1999, label: "Fondle 'Em",
    colors: ["#2f5d2b", "#e9c33b"], tag: "THE VILLAIN RETURNS!",
    blurb: "The first appearance. Recorded after years underground, built from Saturday-morning samples and released on a tiny New York indie. Gas Drawls lives here.", art: "" },
  { no: 2,  title: "Take Me to Your Leader", by: "King Geedorah", year: 2003, label: "Big Dada",
    colors: ["#2b3f8c", "#f0e3c3"], tag: "THREE HEADS. ONE MIND.",
    blurb: "DOOM as a three-headed golden space monster, mostly on the boards and passing the mic to the crew.", art: "" },
  { no: 3,  title: "Vaudeville Villain", by: "Viktor Vaughn", year: 2003, label: "Sound-Ink",
    colors: ["#8c1d1d", "#f2d16b"], tag: "YOUNG VIK HITS THE BLOCK",
    blurb: "A younger, brasher, time-displaced Victor running wild over other people's beats.", art: "" },
  { no: 4,  title: "Madvillainy", by: "Madvillain", year: 2004, label: "Stones Throw",
    colors: ["#e8e2d0", "#c2311f"], tag: "THE TEAM-UP OF THE CENTURY",
    blurb: "DOOM and Madlib. Short songs, no hooks, endlessly replayed. The one people hand to friends first.", art: "" },
  { no: 5,  title: "MM..FOOD", by: "MF DOOM", year: 2004, label: "Rhymesayers",
    colors: ["#d9572b", "#ffe2a8"], tag: "SERVED HOT",
    blurb: "A concept album that is, loosely, about food. Also about everything else.", art: "" },
  { no: 6,  title: "The Mouse and the Mask", by: "DANGERDOOM", year: 2005, label: "Epitaph / Lex",
    colors: ["#151515", "#5fd3e8"], tag: "LATE NIGHT CROSSOVER",
    blurb: "DOOM and Danger Mouse, with the Adult Swim cast dropping in.", art: "" },
  { no: 7,  title: "Born Like This", by: "DOOM", year: 2009, label: "Lex",
    colors: ["#3a3a3a", "#d7b14a"], tag: "ALL CAPS. NO MF.",
    blurb: "The return, credited simply to DOOM.", art: "" },
  { no: 8,  title: "Key to the Kuffs", by: "JJ DOOM", year: 2012, label: "Lex",
    colors: ["#1f4e79", "#f4f1e6"], tag: "LONDON CALLING",
    blurb: "With producer Jneiro Jarel, recorded after DOOM settled in the UK.", art: "" },
  { no: 9,  title: "NehruvianDOOM", by: "NehruvianDOOM", year: 2014, label: "Lex",
    colors: ["#5b2a86", "#f1c40f"], tag: "PASSING THE TORCH",
    blurb: "A short, sharp collaboration with a teenage Bishop Nehru.", art: "" }
];

/* The aliases, as trading cards. Stats are for fun. */
window.GD_ALIASES = [
  { name: "Zev Love X", era: "1989 to 1994", team: "KMD",
    power: "Origin story", text: "The bright-eyed MC of KMD alongside his brother DJ Subroc. Before the mask.",
    stats: { flow: 7, menace: 2, mystery: 3, beats: 6 }, color: "#3a8d4f" },
  { name: "Metal Fingers", era: "2001 to 2005", team: "Special Herbs",
    power: "Beat alchemy", text: "The producer. Instrumentals named after herbs and roots, sold as a running series.",
    stats: { flow: 3, menace: 5, mystery: 8, beats: 10 }, color: "#8a8f98" },
  { name: "King Geedorah", era: "2003", team: "Monster Island",
    power: "Three-headed command", text: "A golden space dragon studying Earth from a distance.",
    stats: { flow: 7, menace: 9, mystery: 9, beats: 9 }, color: "#d9a520" },
  { name: "Viktor Vaughn", era: "2003 to 2004", team: "Solo",
    power: "Time displacement", text: "Young, hungry and a little reckless. The villain before he was the villain.",
    stats: { flow: 10, menace: 7, mystery: 6, beats: 5 }, color: "#b8322a" },
  { name: "Madvillain", era: "2004", team: "with Madlib",
    power: "The team-up", text: "Two eccentrics, one record, a cult that keeps growing.",
    stats: { flow: 10, menace: 8, mystery: 9, beats: 10 }, color: "#c2311f" },
  { name: "DANGERDOOM", era: "2005", team: "with Danger Mouse",
    power: "Late-night crossover", text: "Mask meets mouse, with cartoon cameos.",
    stats: { flow: 9, menace: 6, mystery: 6, beats: 9 }, color: "#2aa7c0" },
  { name: "JJ DOOM", era: "2012", team: "with Jneiro Jarel",
    power: "Transatlantic", text: "Recorded from the UK. Same mask, new weather.",
    stats: { flow: 9, menace: 7, mystery: 8, beats: 8 }, color: "#1f4e79" },
  { name: "DOOM", era: "1999 onward", team: "Everyone's favorite villain",
    power: "GOD MODE", text: "Metal face. All caps. The final form.",
    stats: { flow: 10, menace: 10, mystery: 10, beats: 10 }, color: "#e9c33b" }
];

/* Shop teasers. Swap in real products, prices, links and photos. */
window.GD_PRODUCTS = [
  { name: "God Mode Tee", price: "$40", tag: "NEW", img: "" },
  { name: "Metal Face Hoodie", price: "$85", tag: "HOT", img: "" },
  { name: "Gas Drawls Cap", price: "$35", tag: "", img: "" },
  { name: "Issue #1 Print", price: "$25", tag: "LTD", img: "" }
];
