//local components
import { Form } from "./components/Form";
import { Title } from "./components/Title";
//mantine components
import { Grid, Container } from "@mantine/core";
// styles
import "./index.scss";

export function LoginPage() {
  return (
    <Container fluid className="px-1">
      <Grid>
        <Grid.Col span={5} className="left-column">
          {/* 
          slider or ...
          */}
          1
        </Grid.Col>
        <Grid.Col span={7} className="right-column">
          <div className="form-position">
            <Title font="1.9em" title="Welcome back!">
              Start managin your finance faster and better
            </Title>
            <Form />
            <p className="sign-up-text">
              Don't you have an account? <a href="#">Sign Up</a>
            </p>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
