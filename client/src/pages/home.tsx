import { BlogContainer } from "../components/blogContainer";
import { Search } from "../components/search";
import Blogs from "./blogs";
import { Header } from "./header";


export default function home() {
    return(
        <div>
            <div>
                 <Header />
            </div>
            <div>
                <Search />
            </div>
              <div >
                 <Blogs />
              </div>
            <div>
                footer
            </div>
        </div>
    )
}