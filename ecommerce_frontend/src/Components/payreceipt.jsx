import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PayReceipt = () => {
    const location = useLocation();
    const { item } = location.state || {};

    // Provide default values or fallback in case item is undefined
    const itemName = item?.name || 'Unknown Product';
    const itemPrice = item?.price || '0';
    const itemImg = item?.img || 'placeholder-image-url';

    const styles = {
        gradientCustom2: {
            background: 'linear-gradient(to right, rgba(161, 196, 253, 1), rgba(194, 233, 251, 1))',
        },
        progressbar1: {
            color: '#455A64',
        },
        progressBarItem: {
            listStyleType: 'none',
            fontSize: '13px',
            width: '33.33%',
            float: 'left',
            position: 'relative',
        },
        progressBarItemBefore: {
            lineHeight: '29px',
            display: 'block',
            fontSize: '12px',
            background: '#455A64',
            borderRadius: '50%',
            margin: 'auto',
        },
        progressBarItemAfter: {
            content: '""',
            width: '121%',
            height: '2px',
            background: '#455A64',
            position: 'absolute',
            left: '0%',
            right: '0%',
            top: '15px',
            zIndex: '-1',
        },
        progressBarItemActiveBefore: {
            background: '#1266f1',
        },
        progressBarItemActiveAfter: {
            background: '#1266f1',
        },
        cardStepper: {
            zIndex: '0',
        }
    };

    return (
        <section style={styles.gradientCustom2} className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-10 col-lg-8 col-xl-6">
                        <div className="card card-stepper" style={{ borderRadius: '16px', ...styles.cardStepper }}>
                            <div className="card-header p-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <p className="text-muted mb-2"> Order ID <span className="fw-bold text-body">1222528743</span></p>
                                        <p className="text-muted mb-0"> Place On <span className="fw-bold text-body">{new Date().toLocaleDateString()}</span> </p>
                                    </div>
                                    <div>
                                        <Link to='/home'><h6 className="mb-0"> Explore </h6></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-4">
                                <div className="d-flex flex-row mb-4 pb-2">
                                    <div className="flex-fill">
                                        <h5 className="bold">{itemName}</h5>
                                        <p className="text-muted"> Qt: 1 item</p>
                                        <h4 className="mb-3"> Rs {itemPrice} </h4>
                                        <p className="text-muted"><span className="text-body">Your Order Has been received .. It will be delivered shortly</span></p>
                                    </div>
                                    <div>
                                        <img className="align-self-center img-fluid" src={itemImg} width="250" alt={itemName} />
                                    </div>
                                </div>
                                <ul id="progressbar-1" className="mx-0 mt-0 mb-5 px-0 pt-0 pb-4" style={styles.progressbar1}>
                                    <li className="step0 active" id="step1" style={{ ...styles.progressBarItem, ...styles.progressBarItemActiveBefore }}>
                                        <span style={{ marginLeft: '22px', marginTop: '12px' }}>PLACED</span>
                                    </li>
                                    <li className="step0 active text-center" id="step2" style={{ ...styles.progressBarItem, ...styles.progressBarItemActiveBefore }}>
                                        <span>SHIPPED</span>
                                    </li>
                                    <li className="step0 text-muted text-end" id="step3" style={{ ...styles.progressBarItem }}>
                                        <span style={{ marginRight: '22px' }}>DELIVERED</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer p-4">
                                <div className="d-flex justify-content-between">
                                    {/* <h5 className="fw-normal mb-0"><a href="#!">Track</a></h5> */}
                                    <div className="border-start h-100"></div>
                                    {/* <h5 className="fw-normal mb-0"><a href="#!">Cancel</a></h5> */}
                                    <div className="border-start h-100"></div>
                                    <Link to='/home'><h5 className="fw-normal mb-0"><a href="#!">Done</a></h5></Link>
                                    <div className="border-start h-100"></div>
                                    <h5 className="fw-normal mb-0"><a href="#!" className="text-muted"><i className="fas fa-ellipsis-v"></i></a>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PayReceipt;
