import REACTDOM from "react-dom/client"
import Counter from "./Counter"
import "./Counter.css"

const root=REACTDOM.createRoot(document.getElementById("root"))

root.render(<Counter></Counter>)