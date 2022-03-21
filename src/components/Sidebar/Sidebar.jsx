import React from "react";
import Abuotme from "../AbuotMe/AbuotMe";
import PopularPost from "../PopularPost/PopularPost";
import Tags from "../Tags/Tags";
import {popularPost} from "../../constant";

const  Sidebar = () => {
    return(
        <div className="w3-col l4">
            <Abuotme/>
            <PopularPost/>
            <Tags/>
        </div>
    )
}
export default Sidebar;







