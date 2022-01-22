import TheamContextProvider from "./context/TheamContext";
import BookPage from "./components/BookPage"
import React from 'react';


function App() {
  return (
    <div className="App">
       <TheamContextProvider>
            <BookPage />
        </TheamContextProvider>
    </div>
  );
}

export default App;
