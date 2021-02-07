import React, { Component } from "react";
import { Container, Header, Grid } from "semantic-ui-react";

class ParentPage extends Component {
  render() {
    return (
      <Container>
        <Header textAlign="center" as="h1">
          Parent Page
        </Header>
        <Grid>
          <Grid.Row></Grid.Row>
          <Grid.Row>
            <Header as="h2">Hello Name!</Header>
          </Grid.Row>
          <Grid.Row>
            <Header as="h3">
              You can view your child's schedule here and make changes:
            </Header>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default ParentPage;
