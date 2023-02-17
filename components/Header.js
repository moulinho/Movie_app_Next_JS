import Link from "next/link";
import { Context } from "../lib/Context";

const Links = ({ children, query, name }) => {
  return query !== "" ? (
    <Link href={{ pathname: `/${name}`, query: { query: query } }}>
      {children}
    </Link>
  ) : (
    <Link href={{ pathname: `/${name}` }}>{children}</Link>
  );
};

const Header = () => {
  const {
    setActive,
    state: { links, active, query },
  } = React.useContext(Context);
  return (
    <ul className="nav nav-pills nav-fill" style={{ marginBottom: "20px" }}>
      {links.map((link, i) => {
        return (
          <li className="nav-item" onClick={() => setActive(link)} key={i}>
            <Links {...link} query={query}>
              <span
                className={`nav-link ${
                  link.name === active.name && "isActive"
                }`}
              >
                <i className={`fas fa-${link.icon}`}></i> &nbsp; {link.name}{" "}
              </span>
            </Links>
          </li>
        );
      })}
    </ul>
  );
};
export default Header;
