import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div
      className="container-fluid d-flex flex-column justify-content-between align-items-center vh-100 p-0"
      style={{ background: "linear-gradient(135deg, #667eea, #764ba2)" }}
    >
      {/* Header */}
      <h2 className="text-white mt-3" style={{ fontWeight: "bold" }}>
        Calculator
      </h2>

      {/* Calculator Card */}
      <div
        className="card p-3 shadow"
        style={{ maxWidth: "320px", width: "100%", borderRadius: "20px" }}
      >
        <input
          type="text"
          className="form-control mb-3 text-end"
          style={{ fontSize: "1.5rem", borderRadius: "10px" }}
          value={input}
          readOnly
        />

        <div className="row g-2">
          {[
            "7","8","9","/",
            "4","5","6","*",
            "1","2","3","-",
            "0",".","=","+"
          ].map((btn, i) => {
            let btnStyle = {
              backgroundColor: "#6c5ce7",
              color: "white",
              border: "none",
              borderRadius: "10px",
              padding: "10px",
              fontSize: "1.2rem"
            };

            if (["/", "*", "-", "+"].includes(btn)) {
              btnStyle.backgroundColor = "#00b894";
            }

            if (btn === "=") {
              btnStyle.backgroundColor = "#fdcb6e";
              btnStyle.color = "black";
            }

            return (
              <div className="col-3" key={i}>
                <button
                  style={btnStyle}
                  className="w-100"
                  onClick={() =>
                    btn === "=" ? calculateResult() : handleClick(btn)
                  }
                >
                  {btn}
                </button>
              </div>
            );
          })}

          <div className="col-12">
            <button
              className="w-100"
              style={{
                backgroundColor: "#d63031",
                color: "white",
                border: "none",
                borderRadius: "10px",
                padding: "10px",
                fontSize: "1.2rem"
              }}
              onClick={clearInput}
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {/* Footer with marquee */}
      <div className="w-100 bg-dark text-white py-2 mt-3">
        <marquee behavior="alternate" direction="left">
          © 2026 Rocky04
        </marquee>
      </div>
    </div>
  );
}
