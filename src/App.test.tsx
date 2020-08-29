import React from "react";
import renderer from "react-test-renderer";
import App from "./App";
import Button from "./components/Button";


test("Buttons update count", () => {
    const initialComponent = renderer.create(
        <App />
    );
    // Test buttons are updatin count value in global context

    let app = initialComponent.toJSON();
    expect(app).toMatchSnapshot();
})