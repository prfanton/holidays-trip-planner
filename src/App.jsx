import { HashRouter as BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HolidayList from "./pages/HolidayList";
import HolidayDetail from "./pages/HolidayDetail";
import PageTransition from "./components/PageTransition";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <PageTransition>
        <Routes>
          <Route path="/" element={<HolidayList />} />
          <Route path="/feriado/:id" element={<HolidayDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransition>
    </BrowserRouter>
  );
}

export default App;
