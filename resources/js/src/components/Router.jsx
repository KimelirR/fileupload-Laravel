import React from "react";
import Index from "./files/Index";
import NotFound from "./NotFound";
import { Routes,Route } from "react-router-dom";

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default Router
