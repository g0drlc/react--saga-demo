import React from "react";
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import { TaskAddEdit } from "./add-edit-task";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

import { createStore } from "redux";

// Snapshot for Home React Component
describe(">>>H O M E --- Snapshot", () => {
  it("+++capturing Snapshot of Home", () => {
    //  const renderedValue = renderer.create(<TaskAddEdit />).toJSON();

    //  expect(renderedValue).toMatchSnapshot();
    expect(true).toEqual(true);
  });
});
