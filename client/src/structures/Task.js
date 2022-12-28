import { makeAutoObservable } from "mobx";

class Task {
  constructor({
    id,
    name,
    status,
    notes,
    image,
    attachments,
    author,
    dueDate,
    startDate,
    duration,
    difficutly,
  }) {
    makeAutoObservable(this);
    this.id = id;
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
  }

  set(property, value) {
    this[property] = value;
    return this[property];
  }
}

export { Task };
