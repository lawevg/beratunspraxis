import React from "react";

import privatBeratungPhoto from 'assets/paarberatung_500px.jpg';
import './styles.scss';

const BeratungPrivat = () => {
    const tableStyle = {
        textAlign: 'right', 
        width: '152px'
    }
    return (
       <section className="berPrivat">
        <div className="leftBar">
            <h2>Beratung im Privatbereich</h2>
                    <p>Sie möchten Ihren persönlichen Lebensentwurf umsetzen und im Gleichgewicht sein zwischen Beziehung, Beruf, Gesundheit und Lebenssinn. Diesen Weg werden Krisen und Umbrüche begleiten. Am ehesten lassen sich die darin enthaltenen positiven Ansätze in klärenden Gesprächen entfalten. Dadurch wird es Ihnen möglich sein, bisher nicht erkannte Verhaltensmuster zu verändern und Ihren Stärken mehr Raum zu geben. Leben heißt auch, sich entwickeln und wachsen.<br /><br /></p>
                <h2>Die Sitzungen werden nicht <br />über die Krankenkasse finanziert, <br />sondern müssen <strong>selbst gezahlt werden. <br /><br /></strong>Meine Angebote</h2>
                <h2>&nbsp;</h2>
                    <table className="borderTable" style={{width: '625px'}}>
                    <tbody>
                    <tr className="borderTr">
                    <td style={tableStyle}>
                    <h4><strong>Paartherapie</strong></h4>
                    </td>
                    <td style={{width: '446px'}}>Ich unterstütze Sie, wenn Sie als Paar Ihre individuellen Lösungen aus der Krise heraus entwickeln. Sie werden Probleme konstruktiv bearbeiten, Verletzungen bewältigen und verbindliche Regeln für ein erfüllteres Zusammenleben aushandeln. <br />Hier können Sie trainieren worauf es dabei ankommt, damit Konflikte gelöst werden und Liebe wachsen kann.</td>
                    </tr>
                    <tr className="borderTr">
                    <td style={tableStyle}>
                    <h4><strong>Trennungsberatung</strong></h4>
                    </td>
                    <td style={{width: '446px'}}>
                    <p>Sie möchten sich verantwortlich über die Folgen Ihrer Trennung einigen, gerade auch, wenn Kinder in der Beziehung sind. Ich sichere Ihre Schritte, wenn Sie gemeinsame Vereinbarungen erarbeiten zu den Dingen, die jetzt geregelt werden müssen. Wobei der Blick nach vorn gerichtet sein wird. Dann können Sie partnerschaftlich die Trennungsfolgen angehen und fürsorgende Eltern bleiben.</p>
                    </td>
                    </tr>
                    <tr className="borderTr">
                    <td style={tableStyle}>
                    <h4><strong>Psychologische Beratung</strong></h4>
                    </td>
                    <td style={{width: '446px'}}>
                    <p>In Ihnen wächst die Sehnsucht nach einem eigengelenkten Leben in Ihren Beziehungen? Sie können hier lernen, Ihren Weg heraus aus psychosomatischen Beschwerden oder krisenhaften Situationen zu gehen. <br />Einen großen Anteil an geglückten Beziehungen hat eine gelingende Kommunikation. Die ist erlernbar und zukunftsorientiert begleite ich Sie dabei.<br /><br /></p>
                    </td>
                    </tr>
                    </tbody>
                    </table>
        </div>
        <div className="rightBar">
            <img src={privatBeratungPhoto} alt="privat beratung" />
        </div>
       </section>
    )
}

export default BeratungPrivat;