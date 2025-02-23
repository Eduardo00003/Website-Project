body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
  }
  
  .container {
    background-color: #fff;
    width: 90%;
    max-width: 500px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  
  h1 {
    text-align: center;
    color: #333;
  }
  
  form {
    display: flex;
    margin-bottom: 20px;
  }
  
  input[type="text"] {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px 0 0 5px;
    outline: none;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  
  li.completed span {
    text-decoration: line-through;
    color: #888;
  }
  
  li span {
    flex: 1;
    cursor: pointer;
  }
  
  li button {
    background-color: #ff4d4d;
    border: none;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  li button:hover {
    background-color: #ff1a1a;
  }
  