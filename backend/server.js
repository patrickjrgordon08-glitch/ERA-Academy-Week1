const express = require("express");
const db = require("./db");
const cors = require("cors");
const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());
// rooot route-it confirms the server is running //
app.get("/", (req, res) => {
    res.send("backend is running with mysql");
});

// GET/students-returns all students from my sql //
app.get("/students", (req, res) => {
    const sql = "SELECT * FROM students";
    db.query(sql, (error, results) => {
        if (error) {
            console.error("Error getting students:", error);
            return res.status(500).json({ error: "failed to get students" });
        }
        res.json(results);
        });
    });
        
    // GET/ classes-return all clases from sql //
    app.get("/classes", (req, res) => {
        const sql = "SELECT * FROM classes";
        db.query(sql, (error, results) => {
            if (error) {
                console.error("Error getting classes:", error);
                return res.status(500).json({ error: "failed to get classes" });
            }
            res.json(results);
        });
        });

// GET/enrollments-return joins data(student name + class name)//