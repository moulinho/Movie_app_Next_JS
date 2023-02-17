import Head from "next/head";
import Header from "./Header";
import Searchbar from "./Searchbar";

const layoutStyle = {
  marginTop: 20,
  padding: 20,
};

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Movie Database</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
          rel="stylesheet"
          crossorigin="anonymous"
        />
        <link
          rel="shortcut icon"
          href="https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.icons101.com%2Ficon_ico%2Fid_78884%2Fmovie.ico&imgrefurl=http%3A%2F%2Fwww.icons101.com%2Ficon%2Fid_78884%2Fsetid_2765%2FIcons_Material_Design_by_Rammist%2Fmovie&tbnid=mCv1dJgE3vsqoM&vet=12ahUKEwjehoyvkuHoAhUS-BoKHRU5B6kQMygJegUIARDvAQ..i&docid=00LXuhA2f4FqTM&w=256&h=256&q=movie%20icon&hl=fr&ved=2ahUKEwjehoyvkuHoAhUS-BoKHRU5B6kQMygJegUIARDvAQ"
        />
      </Head>

      <div style={layoutStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-1">
              <>
                <Searchbar />
                <Header />
                {children}
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
