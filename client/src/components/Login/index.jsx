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
  const taskStore = useContext(TaskStoreContext);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(null);
  const [showCreateUser, setShowCreateUser] = useState(null);
  const [showForms, setShowForms] = useState(false);
  const [errors, setErrors] = useState(null);

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const apiService = new APIService();


  const handleSubmit = async () => {
    const creds = {
      username: document.querySelector("input[name=username]").value,
      password: document.querySelector("input[name=password]").value,
    };
    apiService.login(creds).then((res) => {
      if (res.status === 200) {
        taskStore.currentUser = res.data;
      } else {
        setErrors(res.error);
      }
    });
  };

  return (
    <div className={`cover ${user ? "hide" : ""}`}>
      <div className={`greeting ${user ? "hide" : ""}`}>
        {showForms && (
          <div className="login-form topLevel">
            <Form onSubmit={handleSubmit}>
              <Header
                onClick={() => {
                  const newUser = new User({ firstName: "Guest", role: "2" });
                  taskStore.currentUser = newUser;
                  taskStore.user.push(newUser);
                }}
                className="form-header"
              >
                {" "}
                Please Fill out the form to procede
              </Header>
              <section>
                <div className={`${errors ? "errors" : ""}`}>
                  <Input
                    name="username"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUsername(e.currentTarget.value)}
                  />
                  <Input
                    name="password"
                    placeholder="Passsword"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                  {errors && <h4>{errors}</h4>}
                  <div>
                    <Button type="submit" as="button">
                      {" "}
                      Submit
                    </Button>
                  </div>
                </div>
              </section>
            </Form>
          </div>
        )}

        {!showForms && (
          <Segment placeholder>
            <Segment>
              <Header>Please pick a User to continue...</Header>
            </Segment>
            <Segment>
              <Grid columns={2} stackable textAlign="center">
                <Divider vertical>Or</Divider>

                <Grid.Row verticalAlign="middle">
                  <Grid.Column>
                    <div
                      className="hoverable"
                      onClick={action(() => {
                        setShowForms("login");
                      })}
                    >
                      <Header icon>
                        <Icon name="search" />
                        Login
                      </Header>
                    </div>
                  </Grid.Column>

                  <Grid.Column>
                    <div
                      className="hoverable"
                      onClick={action(() => {
                        setShowForms("createUser");
                      })}
                    >
                      <Header icon className="">
                        <Icon size="massive" name="world" />
                        Sign Up
                      </Header>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Segment>
        )}
      </div>

      <div
        className={`modal  ${taskStore.CURRENTUSER ? "bounceOutUp" : ""}`}
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
