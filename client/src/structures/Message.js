import { makeAutoObservable } from "mobx";
import uuid from "react-uuid";

class Message {
    data=""
    createdAt=Date.now()
  constructor({
    data:""
    
  }) {
    this.data = data
    this.createdAt = createdAt 
    makeAutoObservable(this);
  }

  set(property, value) {
    this[property] = value;
    return this[property];
  }
}

export { Task };
