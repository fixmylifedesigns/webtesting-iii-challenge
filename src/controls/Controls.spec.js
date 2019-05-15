import "jest-dom/extend-expect";
import React from "react";
import Controls from "./Controls";
import { render } from "react-testing-library";
// import renderer from 'react-test-renderer';
import "react-testing-library/cleanup-after-each";

describe("the lock button", () => {
  it.skip("is disabled", () => {
    const componentOne = render(<Controls closed={false} locked={false} />);
    const button = componentOne.getByText("Lock Gate");

    expect(button).toBeDisabled();
  });

  it.skip("display 'unlocked' while gate is unlocked", () => {
    const componentTwo = render(<Controls closed={true} locked={false} />);

    componentTwo.getByText("Lock Gate");
  });

  it.skip("display 'locked' while gate is locked", () => {
    const componentThree = render(<Controls closed={true} locked={true} />);

    componentThree.getByText("Unlock Gate");
  });
});

describe("the close button", () => {

  it.skip("lock gate is not disabled", () => {
    const componentFour = render(<Controls closed={true} locked={false} />);
    const button = componentFour.getByText("Lock Gate");

    expect(button).not.toBeDisabled();
  });

  it.skip("display 'Open Gate' when gate is closed", () => {
    const component2 = render(<Controls closed={true} locked={false} />);

    component2.getByText("Open Gate");
  });

  it.skip("display 'locked' while gate is locked", () => {
    const componentSix = render(<Controls closed={false} locked={false} />);

    componentSix.getByText("Close Gate");
  });
});

