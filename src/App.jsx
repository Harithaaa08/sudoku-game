import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Sudoku Game</h1>
      <div className="sudoku-grid">
        {/* Sudoku grid will be rendered here */}
        {Array.from({ length: 81 }).map((_, index) => (
          <div key={index} className="sudoku-cell">
            {/* Each cell will be rendered here */}
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
