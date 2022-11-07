const war = {
  darah : 100,
  log() {
    console.log(`👾 ${this.darah}`)
  },
  damage() {
    this.darah -= 5
    this.log()
    return this
  },
  heal() {
    this.darah += 3
    this.log()
    return this
  },
}
war.log()
war.damage()
war.damage()
war.heal()
