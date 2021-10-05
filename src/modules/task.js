import { title } from "process"

export default class Task {
    constructor(title, description, dueDate) {
    }

    getTitle(){
        return title;
    }

    setTitle(title) {
        this.title = title;
    } 

    getDescription() {
        return this.description;
    }

    setDescription(desc) {
        this.description = desc;
    }

    getDueDate() {
        return this.dueDate;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }
}