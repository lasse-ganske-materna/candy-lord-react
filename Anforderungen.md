# Anforderungen

Es soll das Spiel "CandyLord" entwickelt werden. In dieser hat der Spieler das Ziel durch den Kauf und Verkauf von
Süßigkeiten Geld zum CandyLord zu werden. Die Süßigkeiten können in den Städten zu einem Tageskurs gekauft und verkauft
werden. Der Spieler gewinnt das Spiel, wenn er zum CandyLord gekürt wird indem er 1 Million CandyCoins erwirtschaftet
hat, welches die Spielwährung darstellt. Der Spieler verliert das Spiel, wenn er keine Lebenspunkte mehr besitzt oder
seine Schulden nicht begleichen konnte.

## Süßigkeiten

Folgende Süßigkeiten sollen im Spiel mit ihrem jeweiligen Standardpreis verfügbar sein:

1. Schokolade (31800 CC)
2. Zitronenkekse (23000 CC)
3. Bertie Botts Bohnen (18000 CC)
4. Lakritzschnapper (10000 CC)
5. Kesselkuchen (6800 CC)
6. Gummischnecke (1100 CC)
7. Lebkuchenherz (250 CC)
8. Center Shock (30 CC)

## Städte

Folgende Städte sollen im Spiel bereist werden können:

1. Dämmerstern
2. Einsamkeit
3. Falkenring
4. Markarth
5. Morthal
6. Rifton
7. Windhelm
8. Winterfeste

In jeder Stadt gibt es zwei zufällige Süßigkeiten. Die eine ist um 20% ihres Standardpreises günstiger und die andere um
20% ihres Standardpreises teurer. Die Ergebnisse werden abgerundet.

## Reisekosten

Zwischen den Städten bestehen folgende Reisekosten:

|             | Dämmerstern | Einsamkeit | Falkenring | Markarth | Morthal | Rifton | Windhelm | Winterfeste |
|-------------|-------------|------------|------------|----------|---------|--------|----------|-------------|
| Dämmerstern | 0           | 375        | 150        | 75       | 125     | 175    | 225      | 300         |
| Einsamkeit  |             | 0          | 200        | 125      | 300     | 150    | 75       | 225         |
| Falkenring  |             |            | 0          | 225      | 75      | 125    | 300      | 375         |
| Markarth    |             |            |            | 0        | 375     | 300    | 200      | 375         |
| Morthal     |             |            |            |          | 0       | 200    | 150      | 225         |
| Rifton      |             |            |            |          |         | 0      | 375      | 75          |
| Windhelm    |             |            |            |          |         |        | 0        | 175         |
| Winterfeste |             |            |            |          |         |        |          | 0           |

## UI

Informationen zu dem aktuellen Zustand sollen dazu in der Konsole ausgegeben werden. Ebenso soll der Spieler über
Konsoleneingaben mit dem Spiel interagieren können. Das Spiel soll so modelliert werden, dass das UI austauschbar ist.

Die Eingaben sollen sich auf einzelne Zeichen beschränken.

## Aktionen

Je nachdem im welchem Zustand sich der Spieler befindet, stehen ihm verschiedene Aktionen als Auswahl zur Verfügung.

### Stadt

Folgende Aktionen sollen dem Spieler zur Verfügung stehen, wenn er sich in der Stadt befindet. Er soll diese jedoch
jederzeit wieder abbrechen können, um zu dieser Auswahl zurück zu kommen.

1. In eine andere Stadt reisen
2. Zur Bank gehen
3. Süßigkeiten kaufen
4. Süßigkeiten verkaufen
5. Zum CandyCoinsClub gehen
6. Zum Krankenhaus gehen

### Reisen

Dem Spieler wird eine Auswahl alle Städte angezeigt mit ihren jeweiligen Reisekosten.

1. Der Spieler soll eine andere Stadt auswählen können, um dorthin zu reisen.
2. Bei einer Reise in eine andere Stadt, werden dem Spieler die Reisekosten vom Guthaben abgezogen.
3. Wenn das Guthaben des Spielers die Reisekosten nicht decken kann, bleibt der Spieler in der aktuellen Stadt.

### Bank

Folgende Aktionen sollen dem Spieler zur Verfügung stehen, wenn er sich bei der Bank befindet.

1. Der Spieler soll bei der Bank seine verfügbaren CandyCoins einzahlen können
2. Der Spieler soll bei der Bank seine eingezahlten CandyCoins wieder entnehmen können

### Süßigkeiten kaufen

Dem Spieler wird eine Auswahl aller Süßigkeiten der aktuellen Stadt angezeigt mit ihren jeweiligen Tagespreis.

Der Spieler kann eine beliebige Anzahl an Süßigkeiten kaufen, sofern er genug Platz und CandyCoins besitzt.

### Süßigkeiten verkaufen

Dem Spieler wird eine Auswahl aller Süßigkeiten der aktuellen Stadt angezeigt mit ihren jeweiligen Tagespreis.

Der Spieler soll in einer Stadt eine beliebige Anzahl seiner vorhandenen Süßigkeiten verkaufen können.

### CandyCoinsClub (CCC)

Der Spieler soll sich beim CandyCoinsClub CandyCoins leihen können. Die CandyCoins sollen für einen zufälligen Zeitraum
von 5-15 Tagen verliehen werden.

Die geliehenen CandyCoins erhöht sich jeden Tag um 10%.

Der Spieler soll beim CandyCoinsClub geliehene CandyCoins zurückzahlen können. Den Betrag kann der Spieler selber
wählen, sofern er genug CandyCoins dabei hat. Der Spieler kann nicht mehr CandyCoins zurückzahlen, wie er dem CCC
schuldet.

## Krankenhaus

Im Krankenhaus kann der Spieler seine Lebenspunkte auf den maximalen Wert zurücksetzen. Er kann sich nur heilen, wenn er
weniger als die maximalen Lebenspunkte besitzt. Für jeden Lebenspunkt muss der Spieler 8 CandyCoins zahlen. Er kann nur
alle Lebenspunkte auf einmal heilen. Er kann sich nur heilen, wenn er ausreichend CandyCoins dabei hat.

## Kalendar

Der Kalender stellt das Datum im Spiel dar.

Dieser erhöht sich um einen Tag, wenn der Spieler in eine andere Stadt reist.

## Events

Es gibt diverse Eventtypen, welche bei jeweils einem bestimmten Ereignis getriggert werden können.

Die Wahrscheinlichkeit, dass ein Event getriggert wird, beträgt bei einem neuem Spiel 1%. Wenn das Event beim
betreffenden Ereignis nicht getriggert wird, erhöht sich die Wahrscheinlichkeit um 1%. Wenn das Event getriggert wird, wird die
Wahrscheinlichkeit auf 1% gesetzt.

Wenn ein Eventtyp getriggert wird, wird ein zufälliges Event vom jeweiligen Eventtyp ausgeführt.

### TagesEvent

Dieser Eventtyp kann eintreten, wenn ein neuer Tag beginnt.

#### Händler

Es erscheint ein Händler. Dieser bietet ihm ein eine Tasche an, wodurch der Spieler 10 Süßigkeiten mehr tragen kann. Der Preis der Tasche beträgt 10.000 CandyCoins.

#### Fressrausch

Albus Dumbledor hatte einen Fressrausch und einen großen Vorrat von Bertie Botts Bohnen aufgegessen. Der Preis für
Bertie Botts Bohnen steigt für diesen Tag um 20%.

#### Krümelmonster

Das Krümelmonster ist in die Keksfabrik eingebrochen und hat sämtliche Zitronenkekse geklaut. Der Preis für
Zitronenkekse steigt für diesen Tag um 20%.

#### Fat Fighters

Die Fat Fighter Gruppe hatte einen TV Auftritt, in dem sie Süssigkeiten verteufelt haben. Der Preis für alle Süßigkeiten
sinkt für diesen Tag um 15%.

### HandelsEvent

Dieser Eventtyp kann eintreten, wenn der Spieler Süssigkeiten kauft oder verkauft hat.

#### Gesundheitsamt

Der Spieler kann vom Gesundheitsamt überfallen werden und er verliert seine ganzen CandyCoins und Süssigkeiten, welche er dabei hat. Zusätzlich
verliert er zwischen 10%-25% seiner maximalen Lebenspunkte.

## Attribute

Der Spieler besitzt Lebenspunkte. Die Lebenspunkte können maximal 100 Lebenspunkte betragen.

## Preise

Die Preise variieren um ihren Standardpreis. Der Preis für Süßigkeiten beträgt 75%-125% ihres Standardpreises. Die
Preise werden bei jedem Tag neu berechnet.

## Spielende

Der Spieler gewinnt das Spiel, sobald er 1 Million CandyCoins besitzt.

Der Spieler verliert das Spiel, wenn er 0 oder weniger Lebenspunkte besitzt. Wenn der Spieler seine Schulden nicht
rechtzeitig bezahlt, verliert er ebenfalls das Spiel.

## Startkonditionen

1. Der Spieler startet in einer zufälligen Stadt
2. Der Spieler besitzt keine Items
3. Der Spieler besitzt 500 CandyCoins
5. Der Spieler besitzt seine maximalen Lebenspunkte