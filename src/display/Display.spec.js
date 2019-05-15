// Test away!
import "jest-dom/extend-expect";
import React from "react";
import Display from "./Display";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

describe("open door open lock", () => {
  const component = render(<Display locked={false} closed={false} />);

  it("door led", () => {
    const displayDoor = component.getByText("Open");

    expect(displayDoor).toHaveClass("green-led");
  });

  it("lock led when door and lock are open", () => {
    const displayLock = component.getByText("Unlocked");

    expect(displayLock).toHaveClass("green-led");
  });
});

describe("close door open lock", () => {
  const component = render(<Display locked={false} closed={true} />);

  it("door led", () => {
    const displayDoor = component.getByText("Closed");

    expect(displayDoor).toHaveClass("red-led");
  });

  it("lock led when door is closed but lock is open", () => {
    const displayLock = component.getByText("Unlocked");

    expect(displayLock).toHaveClass("green-led");
  });
});
