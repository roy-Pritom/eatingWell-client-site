import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Pdf from "react-to-pdf";
import ReactToPdf from "react-to-pdf";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const ref = React.createRef();


const Blog = () => {
    return (

        <div className="App mt-5 container py-4 px-5">
            <ReactToPdf targetRef={ref} filename="blog.pdf">
                {({ toPdf }) => (
                    <button onClick={toPdf} className='btn btn-outline-success fw-semibold fs-5'>Generate pdf <FontAwesomeIcon icon={faDownload} /> </button>
                )}
            </ReactToPdf>
            <div className='container' ref={ref}>
                <h1 className='text-center fw-bold  text-success mb-4'>Questions</h1>
                <div className="">
                    <h5 className='fw-bold'>What is the differences between uncontrolled and controlled components?</h5>
                    <p > <span className='text-success'><FaArrowRight></FaArrowRight></span> In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.
                        Controlled component Code Complexity is less complex and uncontrolled component Code Complexity is more complex.Controlled component Data flows from parent component to component and uncontrolled component Data flows within the component.

                    </p>
                </div>
                <div className="mt-3">
                    <h5 className='fw-bold'>How to validate React props using PropTypes?</h5>
                    <p > <span className='text-success'><FaArrowRight></FaArrowRight></span> In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.
                        Controlled component Code Complexity is less complex and uncontrolled component Code Complexity is more complex.Controlled component Data flows from parent component to component and uncontrolled component Data flows within the component.

                    </p>
                </div>
                <div className="mt-3">
                    <h5 className='fw-bold'>What is the difference between nodejs and express js?</h5>
                    <p > <span className='text-success'><FaArrowRight></FaArrowRight></span>NodeJS is open-source, cross-platform JavaScript code that runs on servers. It uses an asynchronous event-driven model and is designed to build scalable network applications.ExpressJS is a web application framework for NodeJS. That’s what mainly makes the difference between Express JS and Node JS.Nodejs is used to build server-side, input-output, event-driven apps.Express js is used to build web-apps using approaches and principles of Node.js.

                    </p>
                </div>
                <div className="mt-3">
                    <h5 className='fw-bold'>What is a custom hook, and why will you create a custom hook?</h5>
                    <p > <span className='text-success'><FaArrowRight></FaArrowRight></span>A custom hook is a special JavaScript function whose name starts with use and can be used to call other hooks.Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.We use When we want to share the logic between other components, we can extract it to a separate function.So we create custom hook.
                    </p>
                </div>
            </div>
        </div>


    );
};

export default Blog;