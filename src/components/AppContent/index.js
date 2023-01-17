import React from "react";

import Banner from "components/Banner";
import Header from "components/Header";
import NavBar from "components/NavBar";
import Anfahrt from "pages/Anfahrt";
import BeratungBeruf from "pages/BeratungBeruf";
import BeratungPrivat from "pages/BeratungPrivat";
import Home from "pages/Home";
import Impressum from "pages/Impressum";
import Kontakt from "pages/Kontakt";
import UeberMich from "pages/UeberMich";

import { Route, Routes } from "react-router-dom";

import './styles.scss';

const AppContent = () => {
    return (
       <div className="appContent">
        <Header />
        <NavBar />
        <Banner />
        <main className="mainContent">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/uebermich" element={<UeberMich />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/anfahrt" element={<Anfahrt />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/beratung_privat" element={<BeratungPrivat />} />
                <Route path="/beratung_beruf" element={<BeratungBeruf/>} />
            </Routes>
        </main>
        
       </div>
    )
}

export default AppContent;