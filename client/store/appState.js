import { observable, computed, action } from 'mobx'
// import { computed } from 'mobx/lib/api/computed';

class AppState {
  @observable count = 0
  @observable name = 'Letch'
  @computed get msg() {
    return `${this.name} say count is ${this.count}`
  }
  @action add() {
    this.count += 1
  }
  @action changeName(name) {
    this.name = name
  }
}

const appState = new AppState()

export default appState
