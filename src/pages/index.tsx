import { useState } from "react";

const Pages = () => {
  const [count, setcount] = useState("0");

  return (
    <div>
      Pages <button onClick={() => setcount((c) => c + 1)}>{count}</button>
    </div>
  );
};

export default Pages;
