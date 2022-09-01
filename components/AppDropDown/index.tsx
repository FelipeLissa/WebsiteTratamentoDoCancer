import { Dropdown } from "@nextui-org/react";
import { Container } from "./styles";

export default function App() {
  return (
    <Container>
      <Dropdown>
        <Dropdown.Button flat color="secondary">
          Trigger
        </Dropdown.Button>
        <Dropdown.Menu
          color="secondary"
          aria-label="Actions"
          css={{ $$dropdownMenuWidth: "280px" }}
        >
          <Dropdown.Item key="new" command="⌘N" description="Create a new file">
            New file
          </Dropdown.Item>
          <Dropdown.Item
            key="copy"
            command="CTRL+C"
            description="Copy the file link"
          >
            Copy link
          </Dropdown.Item>
          <Dropdown.Item
            key="edit"
            command="CTRL+E"
            description="Allows you to edit the file"
          >
            Edit file
          </Dropdown.Item>
          <Dropdown.Item
            withDivider
            key="delete"
            color="error"
            command="CTRL+D"
            description="Permanently delete the file"
          >
            Delete file
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
}
