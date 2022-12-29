import { makeAutoObservable } from "mobx";
import uuid from "react-uuid";

class Task {
  constructor({
    id,
    name = "",
    status = "",
    notes = "",
    image = "",
    attachments = "",
    author = "",
    dueDate = "",
    startDate = "",
    duration = "",
    difficutly = "",
    description = "",
    assignedTo = "",
  }) {
    this.id = id || uuid();
    this.name = name;
    this.status = status;
    this.notes = notes;
    this.image = image;
    this.attachments = attachments;
    this.author = author;
    this.dueDate = dueDate;
    this.startDate = startDate;
    this.duration = duration;
    this.difficutly = difficutly;
    this.description = description;
    this.assignedTo = assignedTo;

    makeAutoObservable(this);
  }

  set(property, value) {
    this[property] = value;
    return this[property];
  }
}

export { Task };
