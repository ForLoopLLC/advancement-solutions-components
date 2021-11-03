import React from "react";
import ColumnContainer from "../lib/components/ColumnContainer";
import Advance from "../lib/icons/Advance";
import Advice from "../lib/icons/Advice";
import Brand from "../lib/icons/Brand";
import FiftyFifty from "../lib/icons/FiftyFifty";
import Swap from "../lib/icons/Swap";
import LevelOne from "../lib/icons/LevelOne";
import LevelTwo from "../lib/icons/LevelTwo";
import LevelThree from "../lib/icons/LevelThree";
import LevelFour from "../lib/icons/LevelFour";
import LevelFive from "../lib/icons/LevelFive";
import LevelSix from "../lib/icons/LevelSix";
import LevelSeven from "../lib/icons/LevelSeven";
import LevelEight from "../lib/icons/LevelEight";
import LevelNine from "../lib/icons/LevelNine";
import RowContainer from "../lib/components/RowContainer";
import { Typography } from "@mui/material";

export default {
  component: ColumnContainer,
  title: "Components/Icons",
};

const Template = (args) => (
  <RowContainer>
    <ColumnContainer {...args}>
      <Typography>{args.brand}</Typography>
      <Advance brand={args.brand} />
      <Advice brand={args.brand} />
      <Brand brand={args.brand} />
      <FiftyFifty brand={args.brand} />
      <Swap brand={args.brand} />
      <LevelOne brand={args.brand} />
      <LevelTwo brand={args.brand} />
      <LevelThree brand={args.brand} />
      <LevelFour brand={args.brand} />
      <LevelFive brand={args.brand} />
      <LevelSix brand={args.brand} />
      <LevelSeven brand={args.brand} />
      <LevelEight brand={args.brand} />
      <LevelNine brand={args.brand} />
    </ColumnContainer>
  </RowContainer>
);

export const Bmr = Template.bind({});
Bmr.args = { brand: "bmr" };

export const L2e = Template.bind({});
L2e.args = { brand: "l2e" };
