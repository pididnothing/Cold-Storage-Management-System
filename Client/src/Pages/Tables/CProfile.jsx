import "./Tables.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

export default function CProfile() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  const { isCAuthenticated } = useAuth();
  useEffect(() => {
    if (!isCAuthenticated) {
      console.log(isCAuthenticated);
      navigate("/login");
    }
  }, []);

  // Simulating useEffect to receive table contents
  useEffect(() => {
    const tableData = [
      [
        "1",
        "John Doe",
        "1234567890",
        "g@gmai.com",
        "123, ABC Street, XYZ City",
      ],
      [
        "2",
        "Jane Doe",
        "1234567890",
        "z@gmail.com",
        "456, DEF Street, XYZ City",
      ],
    ];
    setRows(tableData);
  }, []);
  return (
    <>
      {isCAuthenticated ? null : navigate(-1)}
      <div className="back">
        <div style={{ fontSize: "50px" }}>Profile</div>
        <table>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
