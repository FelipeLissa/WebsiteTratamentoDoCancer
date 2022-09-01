import { Popover, Button, Text, Grid, User } from "@nextui-org/react";
import { Container } from "./styles";

export default function AppPopover() {
  return (
    <Container>
      <Grid.Container gap={2} alignContent="center">
        <Grid>
          <Popover>
            <Popover.Trigger>
              <Button color="error" auto flat>
                Delete user
              </Button>
            </Popover.Trigger>
            <Popover.Content></Popover.Content>
          </Popover>
        </Grid>
        <Grid>
          <Popover>
            <Popover.Trigger>
              <User
                as="button"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                name="Ariana Wattson"
                description="UI/UX Designer"
              />
            </Popover.Trigger>
            <Popover.Content css={{ px: "$4", py: "$2" }}></Popover.Content>
          </Popover>
        </Grid>
      </Grid.Container>
    </Container>
  );
}
