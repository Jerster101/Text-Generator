const fillers = {
    player: ["Friend", "Hobbit", "Adventurer", "Knight", "Golem", "Druid", "Wizard", "Underling"],
    story: ["story", "tale", "fiction", "legend", "epic", "record", "sequel", "romance"],
    time: ["Long ago", "Yesterday", "Thousands of years ago", "This morning", "In the old times", "During the Cretaceous period"],
    distance: ["far", "distant", "close", "not so far", "far-off", "backwoods", "remote", "nearby"],
    area: ["$biome", "civilization"],
    biome: ["forest", "swamp", "mountain", "lake", "desert"],
    civilization: ["village", "town", "city", "metropolis", "community", "commune", "kingdom", "hut", "$biome $civilization"],
    descriptor: ["young", "charming", "handsome", "beautiful", "arrogant", "old", "obnoxious", "attractive", "defined", "$descriptor and $descriptor"],
    action: ["slay", "befriend", "annoy", "paint", "petition", "convert", "wound"],
    beast: ["$color dragon", "ogre", "troll", "demon", "owlbear"],
    color: ["red", "blue", "green", "purple", "bronze", "gold", "steel", "yellow"],
    reward: ["ribbons", "awards", "gold", "a fortune", "jewels", "appreciation", "a participation award", "a pet monkey", "influence"],
  };
  
  const template = `$player, allow me to regale you with a $story!

  $time, in a $distance $area, there was a $descriptor $player.  Now, this person would be the one to $action a $beast.
  of course, this would earn them $reward as well as cause them to build a $civilization.  These actions continued for...
  
  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
