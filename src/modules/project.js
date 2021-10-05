export default class Project {
    constructor(name) { }
    taskList = [];

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getTaskList() {
        return this.taskList;
    }

    addTask(task) {
        this.taskList.push(task);
    }

    removeTask(task) {
        this.taskList = this.taskList.filter(t=> t !== task);
    }
}