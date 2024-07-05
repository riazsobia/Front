import React from "react";
import renderer from "react-test-renderer";
import Star from "./Star";

it("should create 5 stars if rating is 5", () => {
  const tree = renderer.create(<Star rating={5} />);

  expect(tree).toMatchSnapshot();
});
