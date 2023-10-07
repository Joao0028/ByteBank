import { render, screen } from "@testing-library/react";
import Menu from ".";

test("Métodos de consulta", () => {
  render(<Menu />);
  const linkDoMenu = screen.getByText("Inicial");
  expect(linkDoMenu).toBeInTheDocument();
});

test("deve renderizar uma lista de links", () => {
  render(<Menu />);
  const listaDeLinks = screen.getAllByRole("link");
  expect(listaDeLinks).toHaveLength(4);
});

test("Não deve renderizar o link para extrato", () => {
  render(<Menu />);
  const linkExtrato = screen.queryByText("Menu");
  expect(linkExtrato).not.toBeInTheDocument();
});

test("Deve renderizar uma lista de links com a classe link", () => {
  render(<Menu />);
  const links = screen.getAllByRole("link");
  links.forEach((link) => expect(link).toHaveClass("link"));
  expect(links).toMatchSnapshot();
});
