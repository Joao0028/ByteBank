import Extrato from ".";
import { render, screen } from "@testing-library/react";


test('Deve renderizar uma lista de transações', () => {
    const transacoes = [
        {
            transacao: "Déposito",
            valor: 100,
        }
    ]
    render(<Extrato transacoes={transacoes} />);
    const lista = screen.getByRole('listitem');
    expect(lista).toBeInTheDocument();
  });