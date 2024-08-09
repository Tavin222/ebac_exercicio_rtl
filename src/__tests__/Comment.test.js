// src/__tests__/Comment.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Post from "../components/PostComments"; // Ajuste o caminho conforme necessário

test("should allow users to add two comments", () => {
  render(<Post />);

  // Simular a adição do primeiro comentário
  fireEvent.change(screen.getByTestId("comment-input"), {
    target: { value: "Este é o primeiro comentário" },
  });
  fireEvent.click(screen.getByTestId("add-comment-button"));

  // Verificar se o primeiro comentário foi adicionado
  expect(screen.getByText("Este é o primeiro comentário")).toBeInTheDocument();

  // Simular a adição do segundo comentário
  fireEvent.change(screen.getByTestId("comment-input"), {
    target: { value: "Este é o segundo comentário" },
  });
  fireEvent.click(screen.getByTestId("add-comment-button"));

  // Verificar se o segundo comentário foi adicionado
  expect(screen.getByText("Este é o segundo comentário")).toBeInTheDocument();
});
