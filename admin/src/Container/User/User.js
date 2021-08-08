import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../Actions';
import { Spinner, Table,Modal,Button } from 'react-bootstrap'

import { RiDeleteBin5Line } from 'react-icons/ri'
const User = () => {
    const dispatch = useDispatch();
    const [item, setItem] = useState({});
    const [show, setShow] = useState(false);


    const user = useSelector(state => state.user);
    const handleShow = (item) => {
        setItem(item);
        setShow(true)
    };
    const handleClose = ()=>{
        dispatch(deleteUser(item));
        setShow(false);
    }
    function capitalize(string) {
        return string?.charAt(0).toUpperCase() + string?.slice(1);
    }
    return (
        <div className="mainDiv">
            <h1 className="title">Users List</h1>
            <div className="container" style={{ marginTop: '40px' }}>
                <div className="content">
                    <div>
                        {user.loading ?
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
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>Gender</th>
                                        <th>Institution name</th>
                                        <th>User Image</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user?.users.map((item, index) => {
                                        return (
                                            <tr key={index} className="roww" >
                                                <td>{index + 1}</td>
                                                <td>{item?.firstname + ' ' + item?.lastname}</td>
                                                <td>{item?.email}</td>
                                                <td>{item?.contact}</td>
                                                <td>{item?.gender}</td>
                                                <td>{item?.institutionName}</td>
                                                <td>
                                                    <img src={item?.userImage} alt="user image"
                                                        height="100px"
                                                        width="100px"
                                                    />
                                                </td>
                                                <td>
                                                    <button className="btn btn-danger" style={{ marginLeft: "10px" }} title="Edit" onClick={() => handleShow(item)}><RiDeleteBin5Line /></button>
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
            {/* Modal for deletion */}

            <Modal show={show} onHide={() => setShow(false)} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to delete this item permanently ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setShow(false)}>
                        No
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
};

export default User;