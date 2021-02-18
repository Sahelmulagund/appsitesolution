import Layout from '../components/Layout';
import FooterPage from '../components/FooterPage';
import Link from 'next/link';
import ReactDOM from 'react-dom';

const Index = () => {
    return (
        <Layout>
            <article className="overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="font-weight-bold">
                                PROGRAMMING & WEB DEVELOPMENT
                                <br/>
                                   BLOGS & PROJECTS
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-4 pb-5">
                            <p className="lead">
                                Find a project or create a one, show the world your skills or hire a skilled candidate, Appsite is the Solution for all.
                            </p>
                            <br/>
                             <h4>
                                 Trending Categories To Check out
                                </h4>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                       backgroundColor:
                                               '#FF338D'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">React Js</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/react">
                                        <a>
                                            <h3 className="h1">React Js</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                       
                                           backgroundColor:
                                               '#33FF94'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">Python</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/python">
                                        <a>
                                            <h3 className="h1">Python</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">
                                        Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="flip flip-horizontal">
                                <div
                                    className="front"
                                    style={{
                                        backgroundColor:
                                            '#FF5733'
                                    }}
                                >
                                    <h2 className="text-shadow text-center h1">JavaScript</h2>
                                </div>
                                <div className="back text-center">
                                    <Link href="/categories/javascript">
                                        <a>
                                            <h3 className="h1">JavaScript</h3>
                                        </a>
                                    </Link>
                                    <p className="lead">JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              
            </article>

        </Layout>

    );

};

export default Index;