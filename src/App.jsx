import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HolidayList from "./pages/HolidayList";
import HolidayDetail from "./pages/HolidayDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HolidayList />} />
        <Route path="/feriado/:id" element={<HolidayDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
