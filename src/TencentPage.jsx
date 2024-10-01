import React from "react";
import { Link } from "react-router-dom";
// Ensure this path is correct relative to the TencentPage.jsx file
import tencentLogo from "./TencentLogo.png"; // Adjust the path if needed

const TencentPage = () => {
    return (
        <div>
            <h1>Tencent</h1>
            <img src={tencentLogo} alt="Tencent Logo" />
            <p>Tencent is a Chinese multinational conglomerate holding company with subsidiaries in various internet-related services and products, entertainment, AI, and technology.</p>
            {/* Additional content goes here */}
        </div>
    );
};

export default TencentPage;
