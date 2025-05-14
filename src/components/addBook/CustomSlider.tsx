import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomSlider: React.FC = () => {
  const [value, setValue] = useState<number>(50);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div
      className="position-relative w-100"
      // style={{
      //   backgroundColor: "#333",
      //   padding: "60px 20px",
      //   borderRadius: "10px",
      //   width: "300px",
      //   margin: "50px auto",
      // }}
    >
      {/* Tooltip bubble */}
      <div
        style={{
          position: "absolute",
          left: `calc(${value}% - 4px)`,
          bottom: 37,
          transform: "translateX(-50%)",
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "14px",
          border: "2px solid #ccc",
        }}
      >
        {value}%
        <div
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "7px solid transparent",
            borderRight: "7px solid transparent",
            borderTop: "10px solid #000",
          }}
        />
      </div>

      {/* Slider */}
      <Form.Range
        value={value}
        onChange={handleChange}
        // style={{
        //   backgroundColor: "#555",
        // }}
      />
    </div>
  );
};

export default CustomSlider;
