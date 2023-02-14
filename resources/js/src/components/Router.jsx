import React from "react";
import Index from "./files/Index";
import NotFound from "./NotFound";
import { Routes,Route } from "react-router-dom";
import Show from './files/Show';

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/game" element={<Show />} />
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default Router
