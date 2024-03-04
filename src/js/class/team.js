export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (!this.members.has(obj)) {
      this.members.add(obj)
    } else {
      throw new Error('Такой игрок уже есть в комаде!');
    }
    
  }

  addAll(...players) {
    players.forEach(player => {
      if (!this.members.has(player)) {
        this.members.add(player)
      }
    })
  }

  toArray() {
    return [...this.members]
  }

  * [Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}

