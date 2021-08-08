import React from 'react';
import { useSelector } from 'react-redux';
import './dash.css'

const Dashboard = () => {
    const courses = useSelector(state => state.course.courses);
    const users = useSelector(state => state.user.users);
    const payments = useSelector(state => state.payment.payment);
    const totalBalance =(payments)=>{
        let balance = 0;
        payments.forEach(element => {
            const taka = parseInt(element.amount.split(" ")[0]);
            balance = balance + taka;

            
        });
        return balance;

    }
    return (
        <div className="mainDiv">
            <h1 className="title">Dashboard</h1>
            <div className="container flex-container">
                <div className="p-5">
                    <p className="text-center">Total Courses</p>
                    <h1 className="text-center">{courses?.length}</h1>
                </div>
                <div className="p-5">
                    <p className="text-center">Total Users</p>
                    <h1 className="text-center">{users?.length}</h1>
                </div>
                <div className="p-5">
                    <p className="text-center">Total Balance</p>
                    <h1 className="text-center">{totalBalance(payments)}{"৳"}</h1>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;