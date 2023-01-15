// mantine components
import { Button } from "@mantine/core";
//icons

// styles
import "./index.scss";

export function SocialMedia(props) {
  return (
    <Button leftIcon={props.children} variant="default" className="sm-button">
      {props.title}
    </Button>
  );
}
