//local components

//mantine components
import { Grid, Skeleton, Container } from "@mantine/core";
import { Title } from "./components/Title";
// styles
import "./index.scss";

const child = <Skeleton height={140} radius="md" animate={false} />;

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
          <Title font="1.9em" title="Welcome back!">
            Start managin your finance faster and better
          </Title>
          {/* 
          title
          form
          <p>
          */}
          2
        </Grid.Col>
      </Grid>
    </Container>
  );
}
