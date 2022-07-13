import type { NextPage } from "next";

import {Landing, Navbar} from "src/common/components"
const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  );
};

export default Home;
