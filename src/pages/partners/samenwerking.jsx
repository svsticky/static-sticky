import React from 'react';
import styled from 'styled-components';
import Button from 'material-ui/Button';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import Web from '@material-ui/icons/Web';

const Samenwerking = () => (
<div>
<h1> Samenwerking</h1>

<p>Sticky is een dynamische, jonge studievereniging van de Universiteit Utrecht die zich inzet voor studenten van Informatica, Informatiekunde en alle aanverwante Masters. De vereniging is opgestart in 2005 om vooral informatiekunde maar ook informatica studenten naast hun studie ook activiteiten van educatieve en recreatieve aard aan te bieden.</p>
<p>In de korte tijd dat Sticky bestaat, heeft zij een positie verworven binnen de universiteit als tussenpersoon van de studenten en bedrijven. Dit is een positie die wij zeer serieus nemen en waar wij de laatste jaren steeds meer ervaren in zijn geworden. Wij verdiepen ons in de wensen van de bedrijven en tegelijk zijn wij er bewust van wat studenten willen. Hierdoor hebben studieverenigingen een unieke positie als brug tussen de twee partijen. Het is voor bedrijven soms lastig zich te profileren onder studenten. Wij kunnen onze expertise hier aan te pas laten komen om een unieke toegang te creëren tot studenten, zowel bachelors als masters.</p>
<p>Ons streven is om te zorgen dat de studenten goed op de hoogte zijn welke bedrijven er zijn en, wanneer geïnteresseerd, zich kunnen verdiepen in het bedrijf. Sticky richt zich op het contact leggen en de studenten informeren over de verschillende opties na hun studie(s).</p>
<p>Deze mogelijkheden lopen uiteen van het organiseren van studie-gerelateerde activiteiten op de universiteit en het organiseren van activiteiten binnen uw bedrijf tot het plaatsen van promotie en vacatures op onze website. In overleg kunnen we een samenwerkingsovereenkomst opstellen welke precies voldoet aan uw wensen.</p>
<p>Sticky stelt zich te allen tijde flexibel op naar haar sponsors. Elke vorm van activiteit is, mits uitvoerbaar, mogelijk. Wij staan open voor alle vragen over samenwerkings-mogelijkheden, of als u andere activiteiten in gedachten heeft. </p>
<p>Wij hopen een prettige samenwerking tegemoet te gaan.</p>
<p>Emiel van Rijn<br/>
Commissaris Extern 2017-2018<br/>
Studievereniging Sticky</p>

<Button className = "button" color="primary" href={"mailto:extern@svsticky.nl"}><Email />{"extern@svsticky.nl"}</Button><br/>
<Button color="primary" href={"tel:" + "06 46328095"}><Phone/>{"06 46328095"}</Button> <br/>
<Button color="primary" href={"https://svsticky.nl/"}><Web/>{"svsticky.nl"}</Button>

</div>
);


export default Samenwerking;