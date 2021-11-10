import Todo from "./Todo";
import React from "react";
import { render, screen } from "@testing-library/react";

describe("Todo components tests", () => {
    it("Testing Todo component", () => {

        const testTodo = {
          text: "testTodo",
          done: true,
        };

        const handleDeleteClick = jest.fn()
        const handleCompleteClick = jest.fn()

        render(
        <Todo 
            todo={testTodo}
            deleteTodo={handleDeleteClick} 
            completeTodo={handleCompleteClick}
        />);
        expect(screen.getByText(testTodo.text)).toBeInTheDocument();
      });
})