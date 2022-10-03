import React from 'react';

import RenderPage from '../../app/services/renderPage';
import createStore from '../../app/store';
import BlogPages from '../../client/components/blogPages';

const BlogPageController = async (req, res) => {
    const store = createStore();
    const RequestComponent = <BlogPages />;
    RenderPage(RequestComponent, store, req, res);
};

export default BlogPageController;
