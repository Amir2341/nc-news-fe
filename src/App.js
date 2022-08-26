import "./App.css";
import { Title } from "./components/title";
import { Articles } from "./components/articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SingleArticle } from "./components/singleArticle";
import { useState } from "react";
import { PostComment } from "./components/postcomment";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <BrowserRouter>
      <div>
        <Title />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/:topic" element={<Articles />} />
          <Route
            path="/articles/:article_id"
            element={
              <SingleArticle
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
          <Route
            path="articles/:article_id/comments"
            element={<PostComment />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
