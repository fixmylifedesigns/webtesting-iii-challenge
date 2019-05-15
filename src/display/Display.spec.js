// Test away!
import "jest-dom/extend-expect";
import React from "react";
import Display from "./Display";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

// describe("open door open lock", () => {
//   const conditionOne = render(<Display locked={false} closed={false} />);

//   it.skip("door open led", () => {
//     const displayOpenDoor = conditionOne.getByText("Open");

//     expect(displayOpenDoor).toHaveClass("green-led");
//   });

//   it.skip("unlocked led", () => {
//     const displayLock = conditionOne.getByText("Unlocked");

//     expect(displayLock).toHaveClass("green-led");
//   });
// });

describe("close door and lock", () => {
  it("door closed led", () => {
    expect(
      render(<Display locked={true} closed={true} />).getByText("Closed")
    ).toHaveClass("red-led");
  });
});

describe("door locked", () => {
  it("door locked led", () => {
    expect(
      render(<Display locked={true} closed={true} />).getByText("Locked")
    ).toHaveClass("red-led");
  });
});

describe("door is opened", () => {
  it("door open led", () => {
    expect(
      render(<Display locked={false} closed={false} />).getByText("Open")
    ).toHaveClass("green-led");
  });
});

describe("door is unlocked", () => {
  it("door unlocked led", () => {
    expect(
      render(<Display locked={false} closed={false} />).getByText("Unlocked")
    ).toHaveClass("green-led");
  });
});

describe("door is unlocked but closed", () => {
    it("door unlocked led", () => {
      expect(
        render(<Display locked={false} closed={true} />).getByText("Closed")
      ).toHaveClass("red-led");
    });
  });