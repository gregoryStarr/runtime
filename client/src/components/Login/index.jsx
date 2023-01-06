import { action } from "mobx";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import {
  Button,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Input,
  Segment,
} from "semantic-ui-react";
import { APIService } from "../../services/APIService";
import { TaskStoreContext } from "stores/TaskStoreContext";
import "./index.scss";
import { User } from "structures/User";
const Greeting = observer(() => {
    const taskStore = useContext(TaskStoreContext)

  return (
    <div>
<div class="container">

  <div class="h1Container">

    <div class="cube h1 w1 l1">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h1 w1 l2">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h1 w1 l3">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h1 w2 l1">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h1 w2 l2">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h1 w2 l3">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h1 w3 l1">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h1 w3 l2">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h1 w3 l3">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>
  </div>
  
  <div class="h2Container">

    <div class="cube h2 w1 l1">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h2 w1 l2">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h2 w1 l3">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h2 w2 l1">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h2 w2 l2">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h2 w2 l3">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h2 w3 l1">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h2 w3 l2">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h2 w3 l3">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>
  </div>
  
  <div class="h3Container">

    <div class="cube h3 w1 l1">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h3 w1 l2">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h3 w1 l3">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h3 w2 l1">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h3 w2 l2">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h3 w2 l3">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h3 w3 l1">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h3 w3 l2">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>

    <div class="cube h3 w3 l3">
      <div class="face top"></div>
      <div class="face left"></div>
      <div class="face right"></div>
    </div>
  </div>
  
</div>
      <div
        className={`bounceOutUp  ${taskStore.CURRENTUSER ? "bounceOutUp" : ""}`}
        onClick={() => {
          const newUser = new User({ firstName: "Guest", role: "2" });
          console.log("clicked");
          taskStore.currentUser = newUser;
        }}
      />
      {/* CURRENTUSER{taskStore.CURRENTUSER} */}
    </div>
  );
});

export default Greeting;
