import React from "react";

import topPhoto from 'assets/paarberatung3_500px.jpg';
import bottomPhoto from 'assets/paarberatung_500px.jpg';
import './styles.scss';


const Home = () => {
    const styleFont = {
        fontSize: '13px'
    }
    const styleAlign = {textAlign: 'left'}
    return (
       <section className="mainPage">
            <div className="leftSide">
                <div className="custom">
                    <p style={styleAlign}> </p>
                    <p style={{textAlign: 'center'}}><span style={styleFont}>Die Kommunikation, die in einem </span><span style={styleFont}>Veränderungsprozess nötig ist, </span><span style={styleFont}>wird etwa das Zehnfache von dem betragen, </span><span style={styleFont}>was du für nötig hältst.</span></p>
                    <p style={{textAlign: 'center'}}><span style={styleFont}>Carli Fiorina</span></p>
                </div>
            </div>
            <div className="rightSide">
                <div className="topRight">
                    <img src={topPhoto} alt="paarberatung1" width="308" height="205" />
                    <h2>&nbsp;</h2>
                </div>
                <hr/>
                <div className="bottom">
                    <div className="bottomLeft">
                        <h3>Meine Beratungsleistungen</h3>
                        <ul>
                            <li style={styleAlign}><span style={styleFont}>Psychologische Beratung</span></li>
                            <li style={styleAlign}><span style={styleFont}>Paartherapie</span></li>
                            <li style={styleAlign}><span style={styleFont}>Trennungsberatung</span></li>
                            <li style={styleAlign}><span style={styleFont}>Existenz- und Sinnfragen</span></li>
                            <li style={styleAlign}><span style={styleFont}>Schlichtungen</span></li>
                            <li style={styleAlign}><span style={styleFont}>Seminare</span></li>
                            <li style={styleAlign}><span style={styleFont}>Coaching</span></li>
                            <li style={styleAlign}><span style={styleFont}>Supervision</span></li>
                        </ul>
                        <hr/>
                        <h2>NEU sind jetzt auch Beratungen per Telefon oder Video möglich.</h2>
                    </div>
                    <div className="bottomRight">
                        <img src={bottomPhoto} alt="paarberatung2" width="308" height="205" />
                    </div>
                </div>
            </div>
       </section>
    )
}

export default Home;