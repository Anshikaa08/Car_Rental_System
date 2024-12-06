import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h2>Car Management Dashboard</h2>
            <div className="dashboard-blocks">
                {/* Block for Add Car */}
                <div className="dashboard-block">
                    <Link to="/add-car" className="block-link">
                        <h3>Add Car</h3>
                    </Link>
                </div>

                {/* Block for View Car */}
                <div className="dashboard-block">
                    <Link to="/view-cars" className="block-link">
                        <h3>View Cars</h3>
                    </Link>
                </div>

                {/* Block for Delete Car */}
                <div className="dashboard-block">
                    <Link to="/delete-car" className="block-link">
                        <h3>Delete Car</h3>
                    </Link>
                </div>

                {/* Block for Update Car */}
                <div className="dashboard-block">
                    <Link to="/update-car" className="block-link">
                        <h3>Update Car</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
