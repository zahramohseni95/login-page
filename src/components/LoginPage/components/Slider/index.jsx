import { Carousel } from "@mantine/carousel";
import { Finotic } from "./components/Finotic";

export default function Slider() {
  return (
    <div style={{ height: "100%", display: "flex" }}>
      <Carousel
        sx={{ flex: 1 }}
        withIndicators
        loop
        styles={{
          indicator: {
            width: 10,
            height: 10,
            backgroundColor: "#000",
            opacity: 0.2,
          },
          controls: {
            top: "unset",
            bottom: "8px",
            justifyContent: "space-evenly",
          },
          control: {
            border: "none",
            backgroundColor: "transparent",
            bottom: 0,
            boxShadow: "unset",
          },
        }}
        height="100%"
      >
        <Carousel.Slide>
          <Finotic />
        </Carousel.Slide>
        <Carousel.Slide>
          <Finotic />
        </Carousel.Slide>
        <Carousel.Slide>
          <Finotic />
        </Carousel.Slide>
        <Carousel.Slide>
          <Finotic />
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}
