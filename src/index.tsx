import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from './App';
import { HomePage } from './routes/HomePage';
import { NewsPage } from './routes/NewsPage';
import { News } from './routes/News';
import { NotFoundPage } from './routes/NotFoundPage';
import { CategoryPage } from './routes/CategoryPage';
import { AuthorPage } from './routes/AuthorPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:newsUrl" element={<News />} />
          <Route path="/category/:categoryUrl" element={<CategoryPage />} />
          <Route path="/author/:authorUrl" element={<AuthorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
