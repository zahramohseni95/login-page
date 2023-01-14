//local components

//mantine components
import { Grid, Skeleton, Container } from "@mantine/core";
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
          {/* 
          title
          form
          <p>
          */}2
        </Grid.Col>
      </Grid>
    </Container>
  );
}
