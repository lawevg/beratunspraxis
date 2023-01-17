import React from "react";

import photo from 'assets/Altmann_Cornelia_200px.jpg'

import './styles.scss';

const UeberMich = () => {
    return (
       <section className="ueberMich">
            <div className="leftBar">
                <div>
                    <h2 className="title">Über meine Person</h2>
                    <ul className="list">
                        <li>Geboren 1955 - verheiratet seit 1979 - zwei erwachsene Kinder</li><br/>
                        <li>Aufbau und Leitung der Evangelischen Psychologischen Beratungsstelle in Halberstadt ab 1990
                            und zusätzlich ab 2000 in Quedlinburg bis 2008</li>
                        <li>in dieser Zeit Mentorin im Ausbildungsbereich des Fachverbandes EKFuL</li>
                        <li>Gründung der eigenen Psychosozialen Beratungspraxis 2008 und dort seitdem freiberuflich tätig 
                            in Deutschland und der Schweiz mit psychologischer Einzelberatung, Paartherapie, Coaching, Supervision und Seminaren</li>
                        <li>Seit 2007 Coach und Seminarleiterin innerhalb der 3FO-Stiftung in der Schweiz www.3fo.ch</li>
                        <li>2017 bis 2020 Lehrsupervisorin am Institut INITA gGmbH Hannover</li>
                    </ul>
                </div>
                <div>
                    <h2 className="title">Ausbildungen</h2>
                    <ul className="list">
                        <li><span>Tiefenpsychologische Ehe- und Familienberatung</span> - Evangelisches Zentralinstitut, Berlin</li>
                        <li><span>Gestaltberatung</span> - Fritz Perls Institut, Düsseldorf</li>
                        <li><span>Schwangerschaftskonfliktberatung</span> - EZI, Berlin</li>
                        <li><span>Paartherapie und Mediation</span> - EZI, Berlin</li>
                        <li><span>Psychodrama-Oberstufe</span> - Psychodrama Institut für Europa e.V., Berlin</li>
                        <li><span>Kursleitung „Starke Eltern - starke Kinder“,</span> DKSB, Sachsen-Anhalt</li>
                        <li><span>Kursleitung „EPL - Ein partnerschaftliches Lernprogramm“,</span> Institut für KT, München</li>
                        <li><span>Organisations- und Personalentwicklung</span> - Oetiker und Partner AG., Olten, Schweiz</li>
                        <li><span>Supervision</span>- Psychodrama Institut für Europa e.V., Berlin und DAGG</li>
                    </ul>
                </div>
            </div>
            <div className="rightBar">
                <img src={photo} alt="Cornelia Altmann" className="photo" />
            </div>
       </section>
    )
}

export default UeberMich;

















