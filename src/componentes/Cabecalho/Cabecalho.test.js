import { render, screen } from "@testing-library/react";
import Cabecalho from ".";

test("aprendendo a fazer testes", () => {
  render(<Cabecalho />);
  const nomeDoUser = screen.getByText("João Paulo Silva");
  expect(nomeDoUser).toBeInTheDocument();
});
