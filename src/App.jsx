import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const initialStudents = 
[
  { roll: 1, id: "O200258", mid1: 9, mid2: 5, mid3: 5, wat1: 4, wat2: 6, wat3: 6, wat4: 7 },
  { roll: 2, id: "O210033", mid1: 13, mid2: 11, mid3: 14, wat1: 9, wat2: 8, wat3: 6, wat4: 8 },
  { roll: 3, id: "O210035", mid1: 14, mid2: 11, mid3: 0, wat1: 8, wat2: 5, wat3: 4, wat4: 0 },
  { roll: 4, id: "O210044", mid1: 11, mid2: 12, mid3: 13, wat1: 8, wat2: 8, wat3: 3, wat4: 5 },
  { roll: 5, id: "O210049", mid1: 11, mid2: 8, mid3: 14, wat1: 6, wat2: 9, wat3: 3, wat4: 5 },
  { roll: 6, id: "O210050", mid1: 12, mid2: 11, mid3: 13, wat1: 4, wat2: 9, wat3: 8, wat4: 9 },
  { roll: 7, id: "O210052", mid1: 11, mid2: 12, mid3: 13, wat1: 7, wat2: 8, wat3: 5, wat4: 6 },
  { roll: 8, id: "O210065", mid1: 10, mid2: 10, mid3: 9, wat1: 4, wat2: 9, wat3: 2, wat4: 6 },
  { roll: 9, id: "O210072", mid1: 13, mid2: 13, mid3: 14, wat1: 5, wat2: 9, wat3: 6, wat4: 6 },
  { roll: 10, id: "O210091", mid1: 15, mid2: 15, mid3: 13, wat1: 5, wat2: 10, wat3: 5, wat4: 4 },
  { roll: 11, id: "O210103", mid1: 14, mid2: 14, mid3: 13, wat1: 5, wat2: 10, wat3: 7, wat4: 4 },
  { roll: 12, id: "O210106", mid1: 12, mid2: 9, mid3: 10, wat1: 6, wat2: 8, wat3: 3, wat4: 5 },
  { roll: 13, id: "O210111", mid1: 14, mid2: 10, mid3: 12, wat1: 9, wat2: 8, wat3: 5, wat4: 8 },
  { roll: 14, id: "O210112", mid1: 12, mid2: 13, mid3: 12, wat1: 7, wat2: 8, wat3: 6, wat4: 5 },
  { roll: 15, id: "O210118", mid1: 14, mid2: 11, mid3: 12, wat1: 4, wat2: 8, wat3: 6, wat4: 5 },
  { roll: 16, id: "O210121", mid1: 12, mid2: 8, mid3: 11, wat1: 6, wat2: 8, wat3: 6, wat4: 6 },
  { roll: 17, id: "O210138", mid1: 13, mid2: 13, mid3: 13, wat1: 5, wat2: 8, wat3: 8, wat4: 9 },
  { roll: 18, id: "O210145", mid1: 14, mid2: 14, mid3: 14, wat1: 6, wat2: 9, wat3: 5, wat4: 5 },
  { roll: 19, id: "O210147", mid1: 6, mid2: 8, mid3: 12, wat1: 8, wat2: 10, wat3: 7, wat4: 8 },
  { roll: 20, id: "O210148", mid1: 9, mid2: 12, mid3: 11, wat1: 4, wat2: 8, wat3: 8, wat4: 10 },
  { roll: 21, id: "O210150", mid1: 11, mid2: 10, mid3: 0, wat1: 9, wat2: 7, wat3: 8, wat4: 10 },
  { roll: 22, id: "O210158", mid1: 11, mid2: 11, mid3: 11, wat1: 8, wat2: 8, wat3: 8, wat4: 10 },
  { roll: 23, id: "O210178", mid1: 12, mid2: 11, mid3: 13, wat1: 7, wat2: 9, wat3: 7, wat4: 5 },
  { roll: 24, id: "O210190", mid1: 14, mid2: 11, mid3: 11, wat1: 7, wat2: 7, wat3: 6, wat4: 5 },
  { roll: 25, id: "O210198", mid1: 11, mid2: 11, mid3: 11, wat1: 7, wat2: 8, wat3: 8, wat4: 7 },
  { roll: 26, id: "O210207", mid1: 14, mid2: 14, mid3: 14, wat1: 7, wat2: 9, wat3: 6, wat4: 8 },
  { roll: 27, id: "O210212", mid1: 14, mid2: 14, mid3: 13, wat1: 5, wat2: 10, wat3: 7, wat4: 8 },
  { roll: 28, id: "O210230", mid1: 14, mid2: 14, mid3: 12, wat1: 6, wat2: 9, wat3: 7, wat4: 9 },
  { roll: 29, id: "O210235", mid1: 12, mid2: 14, mid3: 13, wat1: 8, wat2: 10, wat3: 7, wat4: 9 },
  { roll: 30, id: "O210250", mid1: 0, mid2: 12, mid3: 6, wat1: 4, wat2: 10, wat3: 7, wat4: 9 },
  { roll: 31, id: "O210263", mid1: 15, mid2: 15, mid3: 14, wat1: 6, wat2: 10, wat3: 5, wat4: 8 },
  { roll: 32, id: "O210271", mid1: 13, mid2: 14, mid3: 12, wat1: 5, wat2: 10, wat3: 3, wat4: 5 },
  { roll: 33, id: "O210293", mid1: 14, mid2: 9, mid3: 13, wat1: 5, wat2: 9, wat3: 7, wat4: 1 },
  { roll: 34, id: "O210299", mid1: 10, mid2: 12, mid3: 12, wat1: 5, wat2: 9, wat3: 4, wat4: 6 },
  { roll: 35, id: "O210303", mid1: 15, mid2: 13, mid3: 12, wat1: 6, wat2: 8, wat3: 7, wat4: 8 },
  { roll: 36, id: "O210308", mid1: 14, mid2: 15, mid3: 14, wat1: 7, wat2: 9, wat3: 7, wat4: 8 },
  { roll: 37, id: "O210309", mid1: 12, mid2: 13, mid3: 12, wat1: 7, wat2: 9, wat3: 4, wat4: 9 },
  { roll: 38, id: "O210326", mid1: 14, mid2: 10, mid3: 15, wat1: 6, wat2: 8, wat3: 6, wat4: 5 },
  { roll: 39, id: "O210331", mid1: 12, mid2: 12, mid3: 13, wat1: 5, wat2: 10, wat3: 8, wat4: 7 },
  { roll: 40, id: "O210332", mid1: 11, mid2: 14, mid3: 14, wat1: 10, wat2: 8, wat3: 9, wat4: 8 },
  { roll: 41, id: "O210342", mid1: 12, mid2: 13, mid3: 14, wat1: 8, wat2: 7, wat3: 5, wat4: 9 },
  { roll: 42, id: "O210343", mid1: 9, mid2: 13, mid3: 7, wat1: 5, wat2: 6, wat3: 6, wat4: 8 },
  { roll: 43, id: "O210352", mid1: 12, mid2: 14, mid3: 11, wat1: 7, wat2: 9, wat3: 4, wat4: 9 },
  { roll: 44, id: "O210366", mid1: 11, mid2: 12, mid3: 8, wat1: 4, wat2: 8, wat3: 1, wat4: 4 },
  { roll: 45, id: "O210367", mid1: 15, mid2: 14, mid3: 13, wat1: 5, wat2: 10, wat3: 6, wat4: 8 },
  { roll: 46, id: "O210384", mid1: 8, mid2: 11, mid3: 11, wat1: 2, wat2: 9, wat3: 7, wat4: 9 },
  { roll: 47, id: "O210386", mid1: 15, mid2: 15, mid3: 11, wat1: 10, wat2: 10, wat3: 6, wat4: 8 },
  { roll: 48, id: "O210405", mid1: 12, mid2: 14, mid3: 11, wat1: 7, wat2: 8, wat3: 3, wat4: 6 },
  { roll: 49, id: "O210425", mid1: 11, mid2: 14, mid3: 10, wat1: 6, wat2: 8, wat3: 6, wat4: 3 },
  { roll: 50, id: "O210426", mid1: 7, mid2: 13, mid3: 13, wat1: 7, wat2: 10, wat3: 8, wat4: 7 },
  { roll: 51, id: "O210437", mid1: 11, mid2: 12, mid3: 13, wat1: 7, wat2: 8, wat3: 6, wat4: 6 },
  { roll: 52, id: "O210444", mid1: 11, mid2: 11, mid3: 8, wat1: 7, wat2: 7, wat3: 6, wat4: 8 },
  { roll: 53, id: "O210448", mid1: 13, mid2: 12, mid3: 9, wat1: 7, wat2: 9, wat3: 4, wat4: 8 },
  { roll: 54, id: "O210476", mid1: 14, mid2: 12, mid3: 12, wat1: 2, wat2: 7, wat3: 6, wat4: 6 },
  { roll: 55, id: "O210493", mid1: 13, mid2: 12, mid3: 15, wat1: 6, wat2: 10, wat3: 7, wat4: 8 },
  { roll: 56, id: "O210556", mid1: 14, mid2: 13, mid3: 13, wat1: 7, wat2: 9, wat3: 7, wat4: 9 },
  { roll: 57, id: "O210570", mid1: 12, mid2: 14, mid3: 13, wat1: 7, wat2: 7, wat3: 4, wat4: 6 },
  { roll: 58, id: "O210575", mid1: 14, mid2: 14, mid3: 14, wat1: 7, wat2: 9, wat3: 7, wat4: 5 },
  { roll: 59, id: "O210583", mid1: 14, mid2: 13, mid3: 14, wat1: 8, wat2: 7, wat3: 8, wat4: 8 },
  { roll: 60, id: "O210587", mid1: 14, mid2: 13, mid3: 13, wat1: 6, wat2: 6, wat3: 8, wat4: 6 },
  { roll: 61, id: "O210617", mid1: 12, mid2: 13, mid3: 13, wat1: 5, wat2: 7, wat3: 7, wat4: 7 },
  { roll: 62, id: "O210626", mid1: 12, mid2: 9, mid3: 12, wat1: 5, wat2: 8, wat3: 8, wat4: 7 },
  { roll: 63, id: "O210634", mid1: 14, mid2: 12, mid3: 14, wat1: 6, wat2: 9, wat3: 5, wat4: 5 },
  { roll: 64, id: "O210642", mid1: 12, mid2: 11, mid3: 14, wat1: 9, wat2: 9, wat3: 8, wat4: 8 },
  { roll: 65, id: "O210671", mid1: 11, mid2: 11, mid3: 7, wat1: 5, wat2: 9, wat3: 8, wat4: 7 },
  { roll: 66, id: "O210679", mid1: 13, mid2: 12, mid3: 13, wat1: 7, wat2: 8, wat3: 7, wat4: 8 },
  { roll: 67, id: "O210692", mid1: 12, mid2: 14, mid3: 14, wat1: 8, wat2: 8, wat3: 8, wat4: 9 },
  { roll: 68, id: "O210720", mid1: 12, mid2: 11, mid3: 13, wat1: 4, wat2: 10, wat3: 5, wat4: 9 },
  { roll: 69, id: "O210729", mid1: 10, mid2: 10, mid3: 12, wat1: 2, wat2: 9, wat3: 7, wat4: 6 },
  { roll: 70, id: "O210757", mid1: 13, mid2: 7, mid3: 13, wat1: 7, wat2: 8, wat3: 7, wat4: 8 },
  { roll: 71, id: "O210762", mid1: 11, mid2: 8, mid3: 11, wat1: 8, wat2: 10, wat3: 7, wat4: 8 },
  { roll: 72, id: "O210782", mid1: 13, mid2: 13, mid3: 11, wat1: 4, wat2: 10, wat3: 4, wat4: 5 },
  { roll: 73, id: "O210788", mid1: 13, mid2: 13, mid3: 12, wat1: 4, wat2: 9, wat3: 6, wat4: 8 },
  { roll: 74, id: "O210797", mid1: 14, mid2: 15, mid3: 14, wat1: 6, wat2: 10, wat3: 9, wat4: 9 },
  { roll: 75, id: "O210820", mid1: 14, mid2: 6, mid3: 13, wat1: 5, wat2: 8, wat3: 6, wat4: 5 },
  { roll: 76, id: "O210824", mid1: 11, mid2: 12, mid3: 12, wat1: 6, wat2: 8, wat3: 8, wat4: 7 },
  { roll: 77, id: "O210827", mid1: 13, mid2: 12, mid3: 12, wat1: 8, wat2: 7, wat3: 6, wat4: 5 },
  {roll: 78, id: "O210830", mid1: 8, mid2: 9, mid3: 14, wat1: 4, wat2: 9, wat3: 7, wat4: 8},
  {roll: 79, id: "O210863", mid1: 14, mid2: 11, mid3: 0, wat1: 6, wat2: 5, wat3: 10, wat4: 0},
  {roll: 80, id: "O210919", mid1: 12, mid2: 8, mid3: 12, wat1: 4, wat2: 9, wat3: 8, wat4: 9},
  {roll: 81, id: "O210924", mid1: 13, mid2: 15, mid3: 15, wat1: 5, wat2: 9, wat3: 7, wat4: 8},
  {roll: 82, id: "O210926", mid1: 12, mid2: 14, mid3: 10, wat1: 5, wat2: 5, wat3: 6, wat4: 8},
  {roll: 83, id: "O210955", mid1: 12, mid2: 4, mid3: 10, wat1: 5, wat2: 9, wat3: 7, wat4: 8},
  {roll: 84, id: "O211009", mid1: 12, mid2: 11, mid3: 12, wat1: 8, wat2: 6, wat3: 6, wat4: 6},
  {roll: 85, id: "O211053", mid1: 10, mid2: 9, mid3: 9, wat1: 3, wat2: 9, wat3: 4, wat4: 5},
  {roll: 86, id: "O211074", mid1: 8, mid2: 7, mid3: 10, wat1: 3, wat2: 7, wat3: 5, wat4: 6},
  {roll: 87, id: "O211084", mid1: 13, mid2: 11, mid3: 12, wat1: 4, wat2: 3, wat3: 6, wat4: 5},
  {roll: 88, id: "O211123", mid1: 12, mid2: 15, mid3: 13, wat1: 7, wat2: 9, wat3: 8, wat4: 9},
  {roll: 89, id: "S210697", mid1: 15, mid2: 15, mid3: 14, wat1: 6, wat2: 9, wat3: 8, wat4: 9},
  {roll: 90, id: "S210712", mid1: 15, mid2: 15, mid3: 13, wat1: 4, wat2: 10, wat3: 8, wat4: 6}

];


export default function StudentSearch() {
  const [students] = useState(initialStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setSearched(false);

    setTimeout(() => {
      const term = searchTerm.trim().toLowerCase();
      const results = students.filter(
        (s) =>
          s.id.toLowerCase().includes(term) ||
          String(s.roll).includes(term)
      );
      setFiltered(results);
      setLoading(false);
      setSearched(true);
    }, 1000);
  };

  // Helper to get best 2 mid sum
  const bestTwoMidSum = (mid1, mid2, mid3) => {
    const mids = [mid1, mid2, mid3].sort((a, b) => b - a);
    return mids[0] + mids[1];
  };

  // Helper to get best 3 WAT sum
  const bestThreeWATSum = (wat1, wat2, wat3, wat4) => {
    const wats = [wat1, wat2, wat3, wat4].sort((a, b) => b - a);
    return wats[0] + wats[1] + wats[2];
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f4f7fa;
          margin: 0;
          padding: 20px;
        }
        .container {
          max-width: 900px;
          margin: auto;
          background: white;
          padding: 20px 30px 40px;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        h1 {
          text-align: center;
          margin-bottom: 25px;
          color: #333;
        }
        .search-box {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        input[type="text"] {
          width: 300px;
          padding: 10px 15px;
          font-size: 16px;
          border: 2px solid #ddd;
          border-radius: 6px 0 0 6px;
          outline: none;
          transition: border-color 0.3s;
        }
        input[type="text"]:focus {
          border-color: #007bff;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          background: #007bff;
          color: white;
          cursor: pointer;
          border-radius: 0 6px 6px 0;
          transition: background-color 0.3s;
        }
        button:hover {
          background: #0056b3;
        }
        .loading {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 5px solid #eee;
          border-top-color: #007bff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        th, td {
          padding: 10px 12px;
          border-bottom: 1px solid #ddd;
          text-align: center;
          color: #444;
        }
        th {
          background: #007bff;
          color: white;
          position: sticky;
          top: 0;
          z-index: 1;
        }
        tr:hover {
          background: #f1faff;
        }
        .no-results {
          text-align: center;
          margin-top: 30px;
          color: #666;
          font-style: italic;
        }
        .results-summary {
          margin-top: 30px;
          background: #e9f0ff;
          padding: 15px 20px;
          border-radius: 8px;
        }
        .summary-row {
          padding: 10px 0;
          border-bottom: 1px solid #cbd9ff;
          display: flex;
          justify-content: space-between;
          font-weight: 600;
          color: #003366;
        }
        .summary-row:last-child {
          border-bottom: none;
        }
        .summary-title {
          flex-basis: 50%;
        }
        .summary-value {
          flex-basis: 50%;
          text-align: right;
        }
      `}</style>

      <div className="container">
        <h1>DSP Mid & Wat</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by Roll or ID (83 or o210955)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSearch()}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        {loading && (
          <div className="loading">
            <div className="spinner" />
          </div>
        )}

        {!loading && searched && (
          filtered.length > 0 ? (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Roll</th>
                    <th>ID</th>
                    <th>Mid 1</th>
                    <th>Mid 2</th>
                    <th>Mid 3</th>
                    <th>WAT 1</th>
                    <th>WAT 2</th>
                    <th>WAT 3</th>
                    <th>WAT 4</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((s) => (
                    <tr key={s.roll}>
                      <td>{s.roll}</td>
                      <td>{s.id}</td>
                      <td>{s.mid1}</td>
                      <td>{s.mid2}</td>
                      <td>{s.mid3}</td>
                      <td>{s.wat1}</td>
                      <td>{s.wat2}</td>
                      <td>{s.wat3}</td>
                      <td>{s.wat4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="results-summary">
                <h2>Computed Results</h2>
                {filtered.map((s) => (
                  <div key={"summary-"+s.roll} className="summary-row">
                    <div className="summary-title">
                      <strong>Roll {s.roll} ({s.id})</strong>
                      <div>Best of 2 Mid sum: <span><b>{bestTwoMidSum(s.mid1, s.mid2, s.mid3)}/30</b></span></div>
                      <div>Best of 3 WAT sum: <span><b>{(bestThreeWATSum(s.wat1, s.wat2, s.wat3, s.wat4)/3).toFixed(1)}/10</b></span></div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="no-results">No students found, Please check your Id number.</div>
          )
        )}
      </div>
      <footer style={{ textAlign: "center", marginTop: "20px", color: "#666" }}>
        <p>Developed by <a href="" target="_blank" rel="noopener noreferrer">Kande Vishnu</a></p>
        <p>Version 1.0.0</p>
        <p>© 2025 Note that these results are declared today.</p>
      </footer>
    </>
  );
}
