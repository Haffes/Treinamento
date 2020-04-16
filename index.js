import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import { Button } from "@material-ui/core";

function App() {
  return (
    <div>
      <p>O botão foi clicado?</p>

    <Button variant="outlined" color="primary">
       Primary
     </Button>

    </div>
  );
}


render(<App />, document.getElementById('root'));
