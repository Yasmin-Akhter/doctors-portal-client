import React from 'react';

const ServicesBody = ({ img }) => {
    return (
        <div>
            <div className="hero  mx-auto my-8">
                <div className="hero-content flex-col lg:flex-row mx-auto">
                    <div >
                        <img src={img} className="max-w-sm rounded-lg shadow-2xl image-fluid" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6 text-xs">It is a long established fact that <br /> a reader will be distracted by the readable content of a page when looking at its layout.<br></br> The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using <br /> 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary me-auto">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesBody;