import { createContext, useState,useEffect } from "react";

export const PostContext = createContext(null);


function Post ({children}) {

const [postDetails,setPostDetails] = useState(localStorage.getItem("productDetails")
? JSON.parse(localStorage.getItem("productDetails"))
: [])

useEffect(() => {
    localStorage.setItem("productDetails", JSON.stringify(postDetails));
    
   }, [postDetails]);

  useEffect(() => {
    const viewProduct = localStorage.getItem("productDetails");
    if (viewProduct) {
        setPostDetails(JSON.parse(viewProduct));
    }
  }, []);

    return (
        <PostContext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </PostContext.Provider>
    )
}
export default Post