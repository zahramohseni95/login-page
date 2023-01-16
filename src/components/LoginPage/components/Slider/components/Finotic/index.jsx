// local component
import { Title } from "../../../Title";
// mantine component
import { RingProgress } from "@mantine/core";
// icons
import { FcDoughnutChart } from "react-icons/fc";
import { BiFolderMinus } from "react-icons/bi";
import { AiFillPlusCircle } from "react-icons/ai";
// styles
import "./index.scss";
// hooks
import { useState } from "react";

export function Finotic() {
  const [chartValue, setChartValue] = useState(["", ""]);
  function handleChartHover(value) {
    setChartValue(value);
  }
  return (
    <>
      <h3>
        <FcDoughnutChart />
        FINOTIC
      </h3>
      <div className="card-wrapper">
        <div className="card-1">
          <BiFolderMinus />
          <p>CURRENT BALANCE</p>
          <p>
            $<span>24,359</span>
          </p>
        </div>
        <div className="card-2">
          <RingProgress
            label={
              <p>
                <b>{chartValue[0]}</b>% <br /> {chartValue[1]}
              </p>
            }
            sections={[
              {
                value: 34,
                color: "#157AFE",
                onMouseEnter: () => {
                  handleChartHover(["34", "Food"]);
                },
                onMouseLeave: () => {
                  handleChartHover(["", ""]);
                },
              },
              {
                value: 22,
                color: "#FA5D5B",
                onMouseEnter: () => {
                  handleChartHover(["22", "Salary"]);
                },
                onMouseLeave: () => {
                  handleChartHover(["", ""]);
                },
              },
              {
                value: 15,
                color: "#33C781",
                onMouseEnter: () => {
                  handleChartHover(["15", "Shop"]);
                },
                onMouseLeave: () => {
                  handleChartHover(["", ""]);
                },
              },
              {
                value: 15,
                color: "#F3AF4D",
                onMouseEnter: () => {
                  handleChartHover(["15", "Fruit"]);
                },
                onMouseLeave: () => {
                  handleChartHover(["", ""]);
                },
              },
            ]}
          />
        </div>
        <div className="card-3">
          <AiFillPlusCircle />
          <h6>New transaction</h6>
          <p>
            or upload <span>.xls</span> file
          </p>
        </div>
      </div>

      <Title font="2em" title="Welcome back!">
        Start managin your finance faster and better
        <br />
        Start managin your finance faster and better
      </Title>
    </>
  );
}
