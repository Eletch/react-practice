import { observable, computed, autorun, action } from 'mobx'
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
}

const appState = new AppState()

autorun(() => {
  appState.add()
})

export default appState
