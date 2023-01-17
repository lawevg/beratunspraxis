import React from "react";

import beratungBerufFoto from 'assets/beratung_berufsleben_500px.jpg'
import './styles.scss';

const BeratungBeruf = () => {
    const style1 = {
        textAlign: 'right',
        width: '149px',
        height: '24px',
    }
    const style2 = {
        height: '24px',
        width: '452.517px'
    }
    const style3 = {
        height: '44px',
        width: '452.517px'
    }
    const style4 = {
        height: '64px',
        width: '452.517px'
    }
    const style5 = {
        textAlign: 'right',
        width: '149px',
        height: '44px',
    }
    const style6 = {
        textAlign: 'right',
        width: '149px',
        height: '64px',
    }
    const styleTable = {
        width: '630.517px',
        height: '296px'
    }
    return (
       <section className="berBeruf">
        <div className="leftBar">
		    <h2>Beratung im Arbeitsbereich</h2>
                <p>Sie möchten als Mitarbeitende oder Führungsverantwortliche Ihre eigenen Sozial- und Handlungskompetenzen erweitern zum Nutzen Ihrer Kunden. Erworbene Prägungen und Muster können Sie reflektieren und dadurch in Ihrem Arbeitsfeld effizientere Strategien umsetzen. Ihre persönliche Entwicklung ermöglicht Ihnen auch die Erneuerung überlebter Strukturen hin zu einem modernen Betriebssystem, welches den sozialen und wirtschaftlichen Anforderungen gerecht wird.</p>
                <p> </p>
                <h2>Die Sitzungen werden nicht <br />über die Krankenkasse finanziert, <br />sondern müssen <strong>selbst gezahlt werden. <br /><br /></strong>Meine Angebote</h2>
                <h2> </h2>
                <table className="borderTable" style={styleTable}>
                <tbody>
                <tr style={{height: "24px"}}>
                <td className="top" style={style1}>
                <h4><strong>Coaching und Supervision<br /></strong></h4>
                </td>
                <td style={style2}>
                <p>Individuelle fachliche Begleitung Ihrer Themen ermöglicht Entwicklung<br />im persönlichen und funktionalen Bereich.</p>
                </td>
                </tr>
                <tr  style={{height: "44px"}}>
                <td className="top" style={style5}>
                <h4><strong>Firmeninterne Seminare </strong></h4>
                </td>
                <td style={style3}>
                <p>Ihre internen fachlichen Themen werden wir gemeinsam definieren, <br />dann Dauer, Ablauf, Ort, Zeit und Kosten vereinbaren.</p>
                </td>
                </tr>
                <tr  style={{height: "64px"}}>
                <td className="top" style={style6}>
                <h4><strong><br />Schlichtungen <br />und <br />Lerngespräche</strong></h4>
                </td>
                <td style={style4}>
                <p><br />Wenn unterschiedliche Sichtweisen der Partner den Arbeits- <br />und Energiefluss behindern, kann ich als Gesprächsleiterin <br />strukturiert durch den Konflikt führen. <br />Ich gebe Orientierungen, berücksichtige im Lösungsprozess <br />die Wünsche beider Seiten und als Ergebnis werden Sie <br />zukunftsorientierte Vereinbarungen schließen.</p>
                </td>
                </tr>
                </tbody>
                </table>	
        </div>
        <div className="rightBar">
            <img src={beratungBerufFoto} alt="Beratung beruf" />
        </div>
       </section>
    )
}

export default BeratungBeruf;