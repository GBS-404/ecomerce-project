import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Produtos</Link>
          </li>
          <li>
            <Link to="/male">Masculino</Link>
          </li>
          <li>
            <Link to="/female">Feminino</Link>
          </li>
          <li>
            <Link to="/cart">Carrinho</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
