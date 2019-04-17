class RandomAdjective {

  constructor() {
    this.adjectives = [
      'beautiful',
      'fabulous',
      'good',
      'magic',
      'top-notch',
      'wonderful',
    ];
  }

  get() {
    const randomIndex = Math.floor(Math.random() * this.adjectives.length);
    return this.adjectives[randomIndex];
  }

}

module.exports = RandomAdjective;
