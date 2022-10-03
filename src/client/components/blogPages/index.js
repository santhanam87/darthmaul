import React from 'react';
import './styles.scss';

const BlogPages = () => (
    <>
        <div className="topBand"></div>
        <header className="pageHeader">
            <h1 className="siteTitle">
                <a href="/">SANTHANAM TECH BLOG</a>
            </h1>
            <nav className="primaryNavigation">
                <ul>
                    <li>
                        <a href="#">About Me</a>
                    </li>
                    <li>
                        <a href="#">Codepen</a>
                    </li>
                    <li>
                        <a href="#">Github</a>
                    </li>
                </ul>
            </nav>
        </header>
        <div className="pageContainer">
            <main role="main" className="pageBody">
                <div className="pageArticles">
                    <article className="articleContainer">
                        <h3 className="articleHeader">Lorem Ipsum has been the industry's standard.</h3>

                        <div className="articleMetaInfo">
                            <div className="authorInfo">
                                <h1 className="authorName">
                                    <a href="#">Santhanam Elumalai</a>
                                </h1>
                                <time dateTime="2018-07-07">July 7th 2018</time>
                            </div>
                            <nav className="tagList">
                                <ul>
                                    <li>
                                        <a href="#">UX</a>
                                    </li>
                                    <li>
                                        <a href="#">Design</a>
                                    </li>
                                    <li>
                                        <a href="#">Guides</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="articleContent">
                            <p>
                                <code>Lorem Ipsum has been the</code> industry's standard dummy text ever since the
                                1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries,
                            </p>
                            <h2>
                                <a href="#">Header with anchor</a>
                            </h2>
                            <ul>
                                <li>Lorem Ipsum has been</li>
                                <li>Ipsum has been</li>
                                <li>Lorem has been</li>
                            </ul>
                            <ol>
                                <li>Lorem Ipsum has been</li>
                                <li>Ipsum has been</li>
                                <li>Lorem has been</li>
                            </ol>
                            <h3>Lorem Ipsum</h3>
                            <p>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                has survived not only five centuries,
                            </p>
                        </div>
                    </article>

                    <article className="articleContainer">
                        <h3 className="articleHeader">
                            <a href="#">Lorem Ipsum has been the industry's standard.</a>
                        </h3>
                        <div className="articleContent">
                            <p>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                has survived not only five centuries,
                            </p>
                        </div>
                        <div className="articleFooter">
                            <time dateTime="2018-07-07">July 7th 2018</time>
                            <nav className="tagNavigation">
                                <ul>
                                    <li>
                                        <a href="#">UX</a>
                                    </li>
                                    <li>
                                        <a href="#">Design</a>
                                    </li>
                                    <li>
                                        <a href="#">Guides</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </article>

                    <article className="articleContainer">
                        <h3 className="articleHeader">
                            <a href="#">Lorem Ipsum has been the industry's standard.</a>
                        </h3>
                        <div className="articleContent">
                            <p>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                has survived not only five centuries,
                            </p>
                        </div>
                        <div className="articleFooter">
                            <time dateTime="2018-07-07">July 7th 2018</time>
                            <nav className="tagNavigation">
                                <ul>
                                    <li>
                                        <a href="#">UX</a>
                                    </li>
                                    <li>
                                        <a href="#">Design</a>
                                    </li>
                                    <li>
                                        <a href="#">Guides</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </article>
                    <section className="postPagination">
                        <nav>
                            <div className="prev"></div>
                            <a href="#" className="page-numbers">
                                1
                            </a>
                            <span className="page-numbers current">2</span>
                            <a href="#" className="page-numbers">
                                3
                            </a>
                            <div className="next"></div>
                        </nav>
                    </section>
                </div>
                <div className="pageCategories">
                    <h2 className="sectionTitle">Categories</h2>
                    <nav className="categoryNavigation">
                        <ul>
                            <li>
                                <a href="#">Web development</a>
                            </li>
                            <li>
                                <a href="#">Javascript</a>
                            </li>
                            <li>
                                <a href="#">React</a>
                            </li>
                        </ul>
                    </nav>
                    <h2 className="sectionTitle">Search</h2>
                    <section className="searchSection">
                        <form>
                            <section className="formSection">
                                <input type="text" placeholder="Search" />

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    fill="currentColor"
                                    className="bi bi-search"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </section>
                        </form>
                    </section>
                </div>
            </main>
        </div>
        <footer className="pageFooter">
            <p className="powerdByText">This site is powered by Wordpress.</p>
            <h2 className="footerAuthorName">Santhanam Elumalai</h2>
            <p className="footerAuthorDescription">Software Engineer, Active learner and tech blogger.</p>
            <nav className="footerNavigation">
                <ul>
                    <li>
                        <a href="#">About Me</a>
                    </li>
                    <li>
                        <a href="#">Codepen</a>
                    </li>
                    <li>
                        <a href="#">Github</a>
                    </li>
                </ul>
            </nav>
        </footer>
    </>
);

export default BlogPages;
