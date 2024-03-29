import { makeAutoObservable } from "mobx";
import uuid from "react-uuid";

class User {
    id= new uuid()
    firstName = ""
    lastName = ""
    roles = ""
    image = ""
    attachments = ""
    avatar = ""
    dueDate = ""
    startDate = ""
    department = ""
    location = ""
  constructor({
    id,
    firstName = "",
    lastName = "",
    roles = "",
    image = "",
    attachments = "",
    avatar = "",
    dueDate = "",
    startDate = "",
    department = "",
    location = "",
  }) {
   this.firstName = firstName
   this.lastName = lastName
   this.roles = roles
   this.image = image
   this.attachments = attachments
   this.avatar = avatar
   this.dueDate = dueDate
   this.startDate = startDate
   this.department = department
   this.location = location
    makeAutoObservable(this);
  }

  set(property, value) {
    this[property] = value;
    return this[property];
  }
}

export { User };
