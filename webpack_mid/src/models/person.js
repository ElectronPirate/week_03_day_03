const TextFormat = require('../helpers/text_format.js');

class Person {

  constructor(name, favouriteColour) {
    this.name = name;
    this.favouriteColour = favouriteColour;
  }

  formatName() {
    const names = this.name.split(' ');
    const capitalisedNames = names.map((name) => TextFormat.capitalise(name));
    this.name = capitalisedNames.join(' ');
  }

  formatColour() {
    this.favouriteColour = TextFormat.capitalise(this.favouriteColour);
  }

}

module.exports = Person;
