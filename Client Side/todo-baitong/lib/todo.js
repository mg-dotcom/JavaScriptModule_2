export class Todo {
  static runningId = 1

  constructor(id, desc, done = false) {
    if (id === undefined) {
      this.id = Todo.runningId++
    } else {
      this.id = id
    }
    this.description = desc
    this.done = done
  }

  getTodo() {
    return { id: this.id, description: this.description,done:this.done }
  }

  setDescription(newDescription) {
    this.description = newDescription
  }

  setDone(done) {
    this.done = done
  }
}
