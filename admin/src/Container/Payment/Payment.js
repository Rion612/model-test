import React, { useState, useEffect } from 'react';
import { Form, Spinner, Table, Modal, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { deletePayment, makeApproved } from '../../Actions';
import { RiDeleteBin5Line } from 'react-icons/ri'
import { BiEdit } from 'react-icons/bi'
import './payment.css'
import Image from '../../Images/search.png'

const Payment = () => {
    const dispatch = useDispatch();
    const [searcitem, setsearcitem] = useState("");
    const [checked, setChecked] = useState(false);
    const [item, setItem] = useState({})
    const payment = useSelector(state => state.payment);
    function capitalize(string) {
        return string?.charAt(0).toUpperCase() + string?.slice(1);
    }
    const users = useSelector(state => state.user);
    const courses = useSelector(state => state.course);

    const [show, setShow] = useState(false);
    const [view, setView] = useState(false);

    const handleClose = () => {

        const obj = {
            _id: item._id,
            status: checked ? "approved" : "not approved"
        }
        dispatch(makeApproved(obj))
        setShow(false);
    };
    const manageClose = () => {
        dispatch(deletePayment(item))
        setView(false);
    };
    const manageView = (item) => {
        setItem(item);
        setView(true);
    };
    const handleShow = (item) => {
        setItem(item);
        if (item.status === "approved") {
            setChecked(true);
        }
        else {
            setChecked(false);
        }
        setShow(true)
    };
    const changeMethod = (e) => {
        setChecked(e.target.checked)
    }

    return (
        <div className="mainDiv">
            <h1 className="title">Payments List</h1>
            <div className="container">

                <div className="my-3" style={{ display: 'flex',marginTop:'30px'}}>

                    <input
                        type="text"
                        placeholder={`Search by transactionId`}
                        value={searcitem}
                        onChange={(e) => setsearcitem(e.target.value)}
                        style={{ width: '40%'}}
                        className="form-control"
                    />
                    <img src= {Image} alt="" height="40px"/>
                </div>
                <div className="content">
                    <div>
                        {payment.loading ?
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Spinner animation="border" role="status" variant="primary">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            </div> :
                            <Table responsive="md">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>User Name</th>
                                        <th>Course Name</th>
                                        <th>Amount</th>
                                        <th>Transaction Id</th>
                                        <th>Status(Approved Or Not)</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payment.payment.filter((val) => {
                                        if (searcitem == "") {
                                            return val;
                                        }
                                        else if (val.transactionId.toLowerCase().includes(searcitem.toLowerCase())) {
                                            return val;
                                        }
                                    }).sort().reverse().map((item, index) => {
                                        const user = users?.users.find(x => x._id === item.userId)
                                        const course = courses?.courses.find(z => z._id === item.courseId)
                                        return (
                                            <tr key={index} className="roww" >
                                                <td>{index + 1}</td>
                                                <td>{user?.firstname + ' ' + user?.lastname}</td>
                                                <td>{capitalize(course?.courseName)}</td>
                                                <td>{item.amount}</td>
                                                <td>{item.transactionId}</td>
                                                <td className="text-center"  >
                                                    <Form>
                                                        <Form.Check
                                                            type="switch"
                                                            id={index}
                                                            checked={item.status === "approved" ? true : false}
                                                            readOnly
                                                        />
                                                    </Form>

                                                </td>
                                                <td>
                                                    <button className="btn btn-danger" style={{ marginLeft: "10px" }} title="Delete" onClick={() => manageView(item)}><RiDeleteBin5Line /></button>
                                                    <button className="btn btn-primary" style={{ marginLeft: "10px" }} title="Edit" onClick={() => handleShow(item)}><BiEdit /></button>
                                                </td>


                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        }
                    </div>
                </div>
            </div>
            {/* Modal for approved */} 
            <Modal show={show} onHide={() => setShow(false)} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Do you want to approved ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{ display: 'flex' }}>
                        <p className="mr-3">No</p>
                        <Form.Check
                            type="switch"
                            id="switch"
                            checked={checked}
                            onChange={changeMethod}
                        />
                        <p className="ml-3">Yes</p>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Modal for deletion */} 

            <Modal show={view} onHide={() => setView(false)} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to delete this item permanently ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setView(false)}>
                        No
                    </Button>
                    <Button variant="danger" onClick={manageClose}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Payment;