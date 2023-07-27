import Head from "next/head";
import Header from "../header/Header";

export default function ContainerHomeDefault({ children, title }) {
    let titleView;
    if (title !== null) {
      titleView = process.env.title + " | " + title;
    } else {
      titleView = process.env.title + " | " + process.env.titleDescription;
    }
    return (
      <>
        <Head>
          <title>{titleView}</title>
        </Head>
        <Header />
        <div className="flex min-h-screen flex-col p-5 bg-blue-950">
          <main>{children}</main>
        </div>
      </>
    );
  }