//N-Queens
//
function solveNQueens(n) {
    let solutions = [];
    let board = Array.from({ length: n }, () => Array(n).fill('.'));

    function isSafe(row, col) {
        // Check column
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }

        // Check upper-left diagonal
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }

        // Check upper-right diagonal
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }

        return true;
    }

    function solve(row) {
        if (row === n) {
            solutions.push(board.map(r => r.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q'; // Place queen
                solve(row + 1); // Recur to place the next queen
                board[row][col] = '.'; // Backtrack
            }
        }
    }

    solve(0); // Start solving from the first row
    return solutions;
}

// Example usage:
let n = 4; // Change this value for different sizes of the board
let results = solveNQueens(n);
console.log(`Number of solutions for ${n}-Queens: ${results.length}`);
results.forEach((solution, index) => {
    console.log(`Solution ${index + 1}:`);
    solution.forEach(row => console.log(row));
});
//word ladder