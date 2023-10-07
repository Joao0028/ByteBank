import { render, screen } from "@testing-library/react";
import Formulario from ".";
import userEvent from "@testing-library/user-event";

test("Renderiza um campo de input", () => {
  render(<Formulario />);
  const campoTexto = screen.getByPlaceholderText("Digite um valor");
  expect(campoTexto).toBeInTheDocument();
});
test("Renderiza um campo de input de tipo number", () => {
  render(<Formulario />);
  const campoTexto = screen.getByPlaceholderText("Digite um valor");
  expect(campoTexto).toHaveAttribute("type", "number");
});

test("Deve renderizar o campo de input que pode ser preenchido", () => {
  render(<Formulario />);
  const campoTexto = screen.getByPlaceholderText("Digite um valor");
  userEvent.type(campoTexto, "50");
  expect(campoTexto).toHaveValue(50);
});
