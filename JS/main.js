const app = require( 'express' )();
const cors = require( 'cors' );
const PORT = 8082;
app.use(cors());
app.get('/master', (req, res) => {
    res.status(200).send({
        champions: [
            {
              "NAME": "Aatrox",
              "PICK-RATE": "4.30%",
              "WIN-RATE": "47.70%",
              "BAN-RATE": "2.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?"
            },
            {
              "NAME": "Ahri",
              "PICK-RATE": "14.50%",
              "WIN-RATE": "51.00%",
              "BAN-RATE": "4.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Akali",
              "PICK-RATE": "5.70%",
              "WIN-RATE": "47.10%",
              "BAN-RATE": "5.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Akshan",
              "PICK-RATE": "4.70%",
              "WIN-RATE": "53.80%",
              "BAN-RATE": "5.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Alistar",
              "PICK-RATE": "5.00%",
              "WIN-RATE": "51.20%",
              "BAN-RATE": "0.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Amumu",
              "PICK-RATE": "2.50%",
              "WIN-RATE": "49.30%",
              "BAN-RATE": "1.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Anivia",
              "PICK-RATE": "2.70%",
              "WIN-RATE": "50.40%",
              "BAN-RATE": "4.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Annie",
              "PICK-RATE": "6.60%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "5.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Aphelios",
              "PICK-RATE": "15.10%",
              "WIN-RATE": "47.10%",
              "BAN-RATE": "2.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ashe",
              "PICK-RATE": "5.80%",
              "WIN-RATE": "52.10%",
              "BAN-RATE": "1.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Aurelion Sol",
              "PICK-RATE": "4.30%",
              "WIN-RATE": "48.20%",
              "BAN-RATE": "11.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Azir",
              "PICK-RATE": "2.50%",
              "WIN-RATE": "47.30%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Bard",
              "PICK-RATE": "3.10%",
              "WIN-RATE": "50.70%",
              "BAN-RATE": "0.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Bel'Veth",
              "PICK-RATE": "4.50%",
              "WIN-RATE": "51.40%",
              "BAN-RATE": "7.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Blitzcrank",
              "PICK-RATE": "9.40%",
              "WIN-RATE": "50.30%",
              "BAN-RATE": "24.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Brand",
              "PICK-RATE": "1.20%",
              "WIN-RATE": "45.10%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Braum",
              "PICK-RATE": "2.80%",
              "WIN-RATE": "48.70%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Caitlyn",
              "PICK-RATE": "7.10%",
              "WIN-RATE": "46.40%",
              "BAN-RATE": "4.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Camille",
              "PICK-RATE": "5.60%",
              "WIN-RATE": "48.70%",
              "BAN-RATE": "3.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Cassiopeia",
              "PICK-RATE": "5.80%",
              "WIN-RATE": "53.40%",
              "BAN-RATE": "4.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Cho'Gath",
              "PICK-RATE": "4.60%",
              "WIN-RATE": "48.30%",
              "BAN-RATE": "1.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Corki",
              "PICK-RATE": "0.80%",
              "WIN-RATE": "49.50%",
              "BAN-RATE": "0.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Darius",
              "PICK-RATE": "6.70%",
              "WIN-RATE": "51.40%",
              "BAN-RATE": "14.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Diana",
              "PICK-RATE": "5.50%",
              "WIN-RATE": "47.80%",
              "BAN-RATE": "1.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Dr. Mundo",
              "PICK-RATE": "2.00%",
              "WIN-RATE": "48.20%",
              "BAN-RATE": "0.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Draven",
              "PICK-RATE": "7.10%",
              "WIN-RATE": "52.30%",
              "BAN-RATE": "34.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ekko",
              "PICK-RATE": "8.40%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "6.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Elise",
              "PICK-RATE": "4.20%",
              "WIN-RATE": "51.60%",
              "BAN-RATE": "9.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Evelynn",
              "PICK-RATE": "4.60%",
              "WIN-RATE": "49.00%",
              "BAN-RATE": "18.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ezreal",
              "PICK-RATE": "17.20%",
              "WIN-RATE": "49.80%",
              "BAN-RATE": "2.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Fiddlesticks",
              "PICK-RATE": "3.80%",
              "WIN-RATE": "54.00%",
              "BAN-RATE": "5.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Fiora",
              "PICK-RATE": "7.10%",
              "WIN-RATE": "50.00%",
              "BAN-RATE": "19.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Fizz",
              "PICK-RATE": "4.40%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "2.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Galio",
              "PICK-RATE": "3.70%",
              "WIN-RATE": "48.50%",
              "BAN-RATE": "0.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Gangplank",
              "PICK-RATE": "3.90%",
              "WIN-RATE": "49.30%",
              "BAN-RATE": "4.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Garen",
              "PICK-RATE": "3.90%",
              "WIN-RATE": "49.10%",
              "BAN-RATE": "0.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Gnar",
              "PICK-RATE": "3.60%",
              "WIN-RATE": "47.30%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Gragas",
              "PICK-RATE": "17.80%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "19.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Graves",
              "PICK-RATE": "11.00%",
              "WIN-RATE": "48.90%",
              "BAN-RATE": "6.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Gwen",
              "PICK-RATE": "4.40%",
              "WIN-RATE": "51.90%",
              "BAN-RATE": "1.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Hecarim",
              "PICK-RATE": "9.60%",
              "WIN-RATE": "49.70%",
              "BAN-RATE": "20.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Heimerdinger",
              "PICK-RATE": "2.40%",
              "WIN-RATE": "51.50%",
              "BAN-RATE": "2.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Illaoi",
              "PICK-RATE": "3.50%",
              "WIN-RATE": "49.50%",
              "BAN-RATE": "3.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Irelia",
              "PICK-RATE": "9.10%",
              "WIN-RATE": "49.70%",
              "BAN-RATE": "11.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ivern",
              "PICK-RATE": "1.40%",
              "WIN-RATE": "47.90%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Janna",
              "PICK-RATE": "6.60%",
              "WIN-RATE": "51.50%",
              "BAN-RATE": "1.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jarvan IV",
              "PICK-RATE": "12.10%",
              "WIN-RATE": "49.30%",
              "BAN-RATE": "18.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jax",
              "PICK-RATE": "11.30%",
              "WIN-RATE": "50.90%",
              "BAN-RATE": "21.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jayce",
              "PICK-RATE": "13.40%",
              "WIN-RATE": "48.80%",
              "BAN-RATE": "8.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jhin",
              "PICK-RATE": "6.20%",
              "WIN-RATE": "48.90%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jinx",
              "PICK-RATE": "33.50%",
              "WIN-RATE": "50.80%",
              "BAN-RATE": "14.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "K'Sante",
              "PICK-RATE": "10.40%",
              "WIN-RATE": "47.50%",
              "BAN-RATE": "5.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kai'Sa",
              "PICK-RATE": "17.80%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "1.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kalista",
              "PICK-RATE": "2.20%",
              "WIN-RATE": "47.60%",
              "BAN-RATE": "0.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Karma",
              "PICK-RATE": "9.80%",
              "WIN-RATE": "48.70%",
              "BAN-RATE": "2.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Karthus",
              "PICK-RATE": "6.40%",
              "WIN-RATE": "50.10%",
              "BAN-RATE": "8.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kassadin",
              "PICK-RATE": "2.80%",
              "WIN-RATE": "47.20%",
              "BAN-RATE": "12.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Katarina",
              "PICK-RATE": "8.20%",
              "WIN-RATE": "51.10%",
              "BAN-RATE": "18.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kayle",
              "PICK-RATE": "2.10%",
              "WIN-RATE": "51.50%",
              "BAN-RATE": "0.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kayn",
              "PICK-RATE": "8.20%",
              "WIN-RATE": "49.20%",
              "BAN-RATE": "12.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kennen",
              "PICK-RATE": "5.80%",
              "WIN-RATE": "48.50%",
              "BAN-RATE": "5.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kha'Zix",
              "PICK-RATE": "7.60%",
              "WIN-RATE": "51.40%",
              "BAN-RATE": "3.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kindred",
              "PICK-RATE": "7.10%",
              "WIN-RATE": "51.30%",
              "BAN-RATE": "12.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kled",
              "PICK-RATE": "3.60%",
              "WIN-RATE": "49.80%",
              "BAN-RATE": "1.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kog'Maw",
              "PICK-RATE": "3.20%",
              "WIN-RATE": "50.10%",
              "BAN-RATE": "0.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "LeBlanc",
              "PICK-RATE": "6.70%",
              "WIN-RATE": "49.00%",
              "BAN-RATE": "15.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lee Sin",
              "PICK-RATE": "16.50%",
              "WIN-RATE": "47.90%",
              "BAN-RATE": "12.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Leona",
              "PICK-RATE": "4.10%",
              "WIN-RATE": "48.40%",
              "BAN-RATE": "1.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lillia",
              "PICK-RATE": "4.30%",
              "WIN-RATE": "48.50%",
              "BAN-RATE": "1.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lissandra",
              "PICK-RATE": "5.60%",
              "WIN-RATE": "51.80%",
              "BAN-RATE": "1.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lucian",
              "PICK-RATE": "5.30%",
              "WIN-RATE": "50.40%",
              "BAN-RATE": "1.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lulu",
              "PICK-RATE": "14.20%",
              "WIN-RATE": "47.50%",
              "BAN-RATE": "10.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lux",
              "PICK-RATE": "7.80%",
              "WIN-RATE": "49.30%",
              "BAN-RATE": "1.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Malphite",
              "PICK-RATE": "12.40%",
              "WIN-RATE": "50.80%",
              "BAN-RATE": "34.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Malzahar",
              "PICK-RATE": "2.50%",
              "WIN-RATE": "48.70%",
              "BAN-RATE": "1.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Maokai",
              "PICK-RATE": "5.30%",
              "WIN-RATE": "51.20%",
              "BAN-RATE": "0.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Master Yi",
              "PICK-RATE": "5.00%",
              "WIN-RATE": "51.30%",
              "BAN-RATE": "9.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Milio",
              "PICK-RATE": "14.30%",
              "WIN-RATE": "51.50%",
              "BAN-RATE": "20.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Miss Fortune",
              "PICK-RATE": "2.60%",
              "WIN-RATE": "48.40%",
              "BAN-RATE": "0.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Mordekaiser",
              "PICK-RATE": "5.00%",
              "WIN-RATE": "48.40%",
              "BAN-RATE": "3.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Morgana",
              "PICK-RATE": "2.80%",
              "WIN-RATE": "46.80%",
              "BAN-RATE": "9.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nami",
              "PICK-RATE": "5.70%",
              "WIN-RATE": "48.30%",
              "BAN-RATE": "0.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nasus",
              "PICK-RATE": "2.40%",
              "WIN-RATE": "46.90%",
              "BAN-RATE": "1.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nautilus",
              "PICK-RATE": "13.00%",
              "WIN-RATE": "50.10%",
              "BAN-RATE": "12.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Neeko",
              "PICK-RATE": "0.90%",
              "WIN-RATE": "55.80%",
              "BAN-RATE": "0.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nidalee",
              "PICK-RATE": "8.20%",
              "WIN-RATE": "52.90%",
              "BAN-RATE": "11.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nilah",
              "PICK-RATE": "2.40%",
              "WIN-RATE": "50.40%",
              "BAN-RATE": "1.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nocturne",
              "PICK-RATE": "2.60%",
              "WIN-RATE": "50.10%",
              "BAN-RATE": "0.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nunu & Willump",
              "PICK-RATE": "3.30%",
              "WIN-RATE": "49.50%",
              "BAN-RATE": "1.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Olaf",
              "PICK-RATE": "5.00%",
              "WIN-RATE": "51.60%",
              "BAN-RATE": "8.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Orianna",
              "PICK-RATE": "3.20%",
              "WIN-RATE": "50.40%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ornn",
              "PICK-RATE": "4.60%",
              "WIN-RATE": "51.90%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Pantheon",
              "PICK-RATE": "8.10%",
              "WIN-RATE": "49.40%",
              "BAN-RATE": "4.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Poppy",
              "PICK-RATE": "3.80%",
              "WIN-RATE": "52.90%",
              "BAN-RATE": "1.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Pyke",
              "PICK-RATE": "7.80%",
              "WIN-RATE": "52.00%",
              "BAN-RATE": "14.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Qiyana",
              "PICK-RATE": "5.00%",
              "WIN-RATE": "50.20%",
              "BAN-RATE": "2.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Quinn",
              "PICK-RATE": "1.30%",
              "WIN-RATE": "51.00%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rakan",
              "PICK-RATE": "16.50%",
              "WIN-RATE": "53.00%",
              "BAN-RATE": "11.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rammus",
              "PICK-RATE": "1.80%",
              "WIN-RATE": "47.80%",
              "BAN-RATE": "4.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rek'Sai",
              "PICK-RATE": "2.30%",
              "WIN-RATE": "55.10%",
              "BAN-RATE": "1.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rell",
              "PICK-RATE": "1.80%",
              "WIN-RATE": "54.00%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Renata Glasc",
              "PICK-RATE": "2.60%",
              "WIN-RATE": "48.00%",
              "BAN-RATE": "0.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Renekton",
              "PICK-RATE": "5.20%",
              "WIN-RATE": "49.30%",
              "BAN-RATE": "3.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rengar",
              "PICK-RATE": "6.70%",
              "WIN-RATE": "54.70%",
              "BAN-RATE": "19.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Riven",
              "PICK-RATE": "6.40%",
              "WIN-RATE": "52.00%",
              "BAN-RATE": "3.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rumble",
              "PICK-RATE": "5.50%",
              "WIN-RATE": "51.30%",
              "BAN-RATE": "3.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ryze",
              "PICK-RATE": "2.30%",
              "WIN-RATE": "48.20%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Samira",
              "PICK-RATE": "4.80%",
              "WIN-RATE": "48.40%",
              "BAN-RATE": "6.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sejuani",
              "PICK-RATE": "3.80%",
              "WIN-RATE": "49.40%",
              "BAN-RATE": "0.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Senna",
              "PICK-RATE": "9.00%",
              "WIN-RATE": "51.30%",
              "BAN-RATE": "3.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Seraphine",
              "PICK-RATE": "4.50%",
              "WIN-RATE": "51.00%",
              "BAN-RATE": "0.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sett",
              "PICK-RATE": "3.90%",
              "WIN-RATE": "48.20%",
              "BAN-RATE": "0.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Shaco",
              "PICK-RATE": "3.90%",
              "WIN-RATE": "51.30%",
              "BAN-RATE": "4.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Shen",
              "PICK-RATE": "4.80%",
              "WIN-RATE": "51.30%",
              "BAN-RATE": "0.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Shyvana",
              "PICK-RATE": "0.90%",
              "WIN-RATE": "46.10%",
              "BAN-RATE": "0.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Singed",
              "PICK-RATE": "3.10%",
              "WIN-RATE": "52.90%",
              "BAN-RATE": "0.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sion",
              "PICK-RATE": "9.80%",
              "WIN-RATE": "50.20%",
              "BAN-RATE": "2.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sivir",
              "PICK-RATE": "4.30%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "1.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Skarner",
              "PICK-RATE": "0.80%",
              "WIN-RATE": "47.90%",
              "BAN-RATE": "0.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sona",
              "PICK-RATE": "2.50%",
              "WIN-RATE": "50.40%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Soraka",
              "PICK-RATE": "4.90%",
              "WIN-RATE": "50.70%",
              "BAN-RATE": "1.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Swain",
              "PICK-RATE": "3.50%",
              "WIN-RATE": "49.70%",
              "BAN-RATE": "0.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sylas",
              "PICK-RATE": "14.80%",
              "WIN-RATE": "49.80%",
              "BAN-RATE": "15.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Syndra",
              "PICK-RATE": "6.60%",
              "WIN-RATE": "49.30%",
              "BAN-RATE": "3.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Tahm Kench",
              "PICK-RATE": "2.40%",
              "WIN-RATE": "51.00%",
              "BAN-RATE": "11.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Taliyah",
              "PICK-RATE": "4.00%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "1.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Talon",
              "PICK-RATE": "6.90%",
              "WIN-RATE": "51.30%",
              "BAN-RATE": "4.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Taric",
              "PICK-RATE": "2.10%",
              "WIN-RATE": "51.50%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Teemo",
              "PICK-RATE": "1.60%",
              "WIN-RATE": "52.00%",
              "BAN-RATE": "0.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Thresh",
              "PICK-RATE": "20.50%",
              "WIN-RATE": "50.20%",
              "BAN-RATE": "13.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Tristana",
              "PICK-RATE": "6.90%",
              "WIN-RATE": "50.90%",
              "BAN-RATE": "1.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Trundle",
              "PICK-RATE": "0.80%",
              "WIN-RATE": "49.00%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Tryndamere",
              "PICK-RATE": "2.50%",
              "WIN-RATE": "53.80%",
              "BAN-RATE": "1.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Twisted Fate",
              "PICK-RATE": "2.80%",
              "WIN-RATE": "47.40%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Twitch",
              "PICK-RATE": "7.20%",
              "WIN-RATE": "49.20%",
              "BAN-RATE": "5.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Udyr",
              "PICK-RATE": "3.50%",
              "WIN-RATE": "50.60%",
              "BAN-RATE": "5.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Urgot",
              "PICK-RATE": "2.20%",
              "WIN-RATE": "52.90%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Varus",
              "PICK-RATE": "9.70%",
              "WIN-RATE": "48.50%",
              "BAN-RATE": "1.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vayne",
              "PICK-RATE": "5.10%",
              "WIN-RATE": "49.30%",
              "BAN-RATE": "2.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Veigar",
              "PICK-RATE": "5.50%",
              "WIN-RATE": "48.10%",
              "BAN-RATE": "3.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vel'Koz",
              "PICK-RATE": "2.40%",
              "WIN-RATE": "47.90%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vex",
              "PICK-RATE": "3.20%",
              "WIN-RATE": "50.40%",
              "BAN-RATE": "2.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vi",
              "PICK-RATE": "6.10%",
              "WIN-RATE": "48.20%",
              "BAN-RATE": "4.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Viego",
              "PICK-RATE": "9.50%",
              "WIN-RATE": "48.90%",
              "BAN-RATE": "1.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Viktor",
              "PICK-RATE": "7.40%",
              "WIN-RATE": "47.50%",
              "BAN-RATE": "3.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vladimir",
              "PICK-RATE": "6.60%",
              "WIN-RATE": "51.20%",
              "BAN-RATE": "7.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Volibear",
              "PICK-RATE": "1.60%",
              "WIN-RATE": "47.40%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Warwick",
              "PICK-RATE": "2.50%",
              "WIN-RATE": "53.60%",
              "BAN-RATE": "0.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Wukong",
              "PICK-RATE": "8.40%",
              "WIN-RATE": "48.30%",
              "BAN-RATE": "10.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Xayah",
              "PICK-RATE": "20.80%",
              "WIN-RATE": "51.20%",
              "BAN-RATE": "29.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Xerath",
              "PICK-RATE": "3.60%",
              "WIN-RATE": "48.80%",
              "BAN-RATE": "2.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Xin Zhao",
              "PICK-RATE": "2.50%",
              "WIN-RATE": "52.50%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Yasuo",
              "PICK-RATE": "9.30%",
              "WIN-RATE": "48.90%",
              "BAN-RATE": "10.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Yone",
              "PICK-RATE": "8.00%",
              "WIN-RATE": "48.20%",
              "BAN-RATE": "3.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Yorick",
              "PICK-RATE": "1.40%",
              "WIN-RATE": "47.00%",
              "BAN-RATE": "0.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Yuumi",
              "PICK-RATE": "8.50%",
              "WIN-RATE": "48.50%",
              "BAN-RATE": "22.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zac",
              "PICK-RATE": "5.60%",
              "WIN-RATE": "52.10%",
              "BAN-RATE": "6.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zed",
              "PICK-RATE": "8.70%",
              "WIN-RATE": "50.70%",
              "BAN-RATE": "21.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zeri",
              "PICK-RATE": "15.70%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "17.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ziggs",
              "PICK-RATE": "2.10%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "0.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zilean",
              "PICK-RATE": "3.10%",
              "WIN-RATE": "49.70%",
              "BAN-RATE": "1.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zoe",
              "PICK-RATE": "4.50%",
              "WIN-RATE": "52.50%",
              "BAN-RATE": "4.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zyra",
              "PICK-RATE": "1.40%",
              "WIN-RATE": "46.80%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            }
          ]
    })
});
app.get('/iron', (req, res) => {
    res.status(200).send({
        champions: [
            {
              "NAME": "Aatrox",
              "PICK-RATE": "4.20%",
              "WIN-RATE": "47.00%",
              "BAN-RATE": "4.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ahri",
              "PICK-RATE": "10.80%",
              "WIN-RATE": "50.70%",
              "BAN-RATE": "4.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Akali",
              "PICK-RATE": "8.00%",
              "WIN-RATE": "47.10%",
              "BAN-RATE": "10.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Akshan",
              "PICK-RATE": "3.40%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "3.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Alistar",
              "PICK-RATE": "3.80%",
              "WIN-RATE": "49.70%",
              "BAN-RATE": "1.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Amumu",
              "PICK-RATE": "5.90%",
              "WIN-RATE": "51.70%",
              "BAN-RATE": "3.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Anivia",
              "PICK-RATE": "2.50%",
              "WIN-RATE": "51.40%",
              "BAN-RATE": "2.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Annie",
              "PICK-RATE": "4.90%",
              "WIN-RATE": "51.70%",
              "BAN-RATE": "5.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Aphelios",
              "PICK-RATE": "7.60%",
              "WIN-RATE": "46.80%",
              "BAN-RATE": "1.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ashe",
              "PICK-RATE": "10.90%",
              "WIN-RATE": "49.80%",
              "BAN-RATE": "3.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Aurelion Sol",
              "PICK-RATE": "7.30%",
              "WIN-RATE": "52.70%",
              "BAN-RATE": "22.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Azir",
              "PICK-RATE": "2.10%",
              "WIN-RATE": "46.00%",
              "BAN-RATE": "0.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Bard",
              "PICK-RATE": "1.70%",
              "WIN-RATE": "47.80%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Bel'Veth",
              "PICK-RATE": "3.60%",
              "WIN-RATE": "50.60%",
              "BAN-RATE": "5.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Blitzcrank",
              "PICK-RATE": "8.60%",
              "WIN-RATE": "50.40%",
              "BAN-RATE": "27.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Brand",
              "PICK-RATE": "6.00%",
              "WIN-RATE": "51.40%",
              "BAN-RATE": "6.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Braum",
              "PICK-RATE": "2.20%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Caitlyn",
              "PICK-RATE": "15.00%",
              "WIN-RATE": "48.10%",
              "BAN-RATE": "13.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Camille",
              "PICK-RATE": "3.00%",
              "WIN-RATE": "48.90%",
              "BAN-RATE": "1.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Cassiopeia",
              "PICK-RATE": "3.20%",
              "WIN-RATE": "51.50%",
              "BAN-RATE": "3.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Cho'Gath",
              "PICK-RATE": "6.30%",
              "WIN-RATE": "51.50%",
              "BAN-RATE": "2.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Corki",
              "PICK-RATE": "1.00%",
              "WIN-RATE": "47.60%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Darius",
              "PICK-RATE": "8.70%",
              "WIN-RATE": "48.20%",
              "BAN-RATE": "22.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Diana",
              "PICK-RATE": "7.60%",
              "WIN-RATE": "50.30%",
              "BAN-RATE": "3.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Dr. Mundo",
              "PICK-RATE": "5.40%",
              "WIN-RATE": "53.50%",
              "BAN-RATE": "5.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Draven",
              "PICK-RATE": "5.00%",
              "WIN-RATE": "48.70%",
              "BAN-RATE": "14.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ekko",
              "PICK-RATE": "8.30%",
              "WIN-RATE": "50.20%",
              "BAN-RATE": "4.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Elise",
              "PICK-RATE": "2.30%",
              "WIN-RATE": "49.10%",
              "BAN-RATE": "3.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Evelynn",
              "PICK-RATE": "4.10%",
              "WIN-RATE": "49.30%",
              "BAN-RATE": "5.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ezreal",
              "PICK-RATE": "18.00%",
              "WIN-RATE": "48.10%",
              "BAN-RATE": "4.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Fiddlesticks",
              "PICK-RATE": "4.20%",
              "WIN-RATE": "50.90%",
              "BAN-RATE": "2.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Fiora",
              "PICK-RATE": "5.50%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "10.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Fizz",
              "PICK-RATE": "6.70%",
              "WIN-RATE": "50.80%",
              "BAN-RATE": "9.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Galio",
              "PICK-RATE": "2.60%",
              "WIN-RATE": "50.10%",
              "BAN-RATE": "0.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Gangplank",
              "PICK-RATE": "4.90%",
              "WIN-RATE": "47.70%",
              "BAN-RATE": "5.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Garen",
              "PICK-RATE": "7.40%",
              "WIN-RATE": "50.60%",
              "BAN-RATE": "2.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Gnar",
              "PICK-RATE": "2.70%",
              "WIN-RATE": "47.70%",
              "BAN-RATE": "0.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Gragas",
              "PICK-RATE": "8.00%",
              "WIN-RATE": "48.40%",
              "BAN-RATE": "3.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Graves",
              "PICK-RATE": "5.60%",
              "WIN-RATE": "48.60%",
              "BAN-RATE": "2.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Gwen",
              "PICK-RATE": "3.70%",
              "WIN-RATE": "48.80%",
              "BAN-RATE": "1.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Hecarim",
              "PICK-RATE": "6.30%",
              "WIN-RATE": "49.60%",
              "BAN-RATE": "9.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Heimerdinger",
              "PICK-RATE": "3.30%",
              "WIN-RATE": "51.90%",
              "BAN-RATE": "2.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Illaoi",
              "PICK-RATE": "6.50%",
              "WIN-RATE": "51.30%",
              "BAN-RATE": "16.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Irelia",
              "PICK-RATE": "8.30%",
              "WIN-RATE": "49.20%",
              "BAN-RATE": "14.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ivern",
              "PICK-RATE": "1.00%",
              "WIN-RATE": "46.00%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Janna",
              "PICK-RATE": "2.60%",
              "WIN-RATE": "51.40%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jarvan IV",
              "PICK-RATE": "9.40%",
              "WIN-RATE": "52.40%",
              "BAN-RATE": "16.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jax",
              "PICK-RATE": "10.00%",
              "WIN-RATE": "50.30%",
              "BAN-RATE": "11.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jayce",
              "PICK-RATE": "6.10%",
              "WIN-RATE": "49.60%",
              "BAN-RATE": "3.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jhin",
              "PICK-RATE": "14.30%",
              "WIN-RATE": "50.80%",
              "BAN-RATE": "3.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jinx",
              "PICK-RATE": "24.00%",
              "WIN-RATE": "51.70%",
              "BAN-RATE": "10.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "K'Sante",
              "PICK-RATE": "4.00%",
              "WIN-RATE": "44.40%",
              "BAN-RATE": "3.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kai'Sa",
              "PICK-RATE": "14.80%",
              "WIN-RATE": "49.20%",
              "BAN-RATE": "2.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kalista",
              "PICK-RATE": "2.00%",
              "WIN-RATE": "46.20%",
              "BAN-RATE": "0.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Karma",
              "PICK-RATE": "5.30%",
              "WIN-RATE": "47.90%",
              "BAN-RATE": "1.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Karthus",
              "PICK-RATE": "2.60%",
              "WIN-RATE": "50.10%",
              "BAN-RATE": "0.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kassadin",
              "PICK-RATE": "1.80%",
              "WIN-RATE": "48.40%",
              "BAN-RATE": "3.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Katarina",
              "PICK-RATE": "11.20%",
              "WIN-RATE": "48.40%",
              "BAN-RATE": "14.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kayle",
              "PICK-RATE": "3.70%",
              "WIN-RATE": "51.70%",
              "BAN-RATE": "0.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kayn",
              "PICK-RATE": "12.60%",
              "WIN-RATE": "50.00%",
              "BAN-RATE": "11.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kennen",
              "PICK-RATE": "3.60%",
              "WIN-RATE": "48.60%",
              "BAN-RATE": "1.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kha'Zix",
              "PICK-RATE": "6.40%",
              "WIN-RATE": "50.40%",
              "BAN-RATE": "2.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kindred",
              "PICK-RATE": "4.60%",
              "WIN-RATE": "47.90%",
              "BAN-RATE": "2.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kled",
              "PICK-RATE": "2.90%",
              "WIN-RATE": "51.60%",
              "BAN-RATE": "2.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kog'Maw",
              "PICK-RATE": "2.80%",
              "WIN-RATE": "51.60%",
              "BAN-RATE": "0.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "LeBlanc",
              "PICK-RATE": "5.00%",
              "WIN-RATE": "47.30%",
              "BAN-RATE": "7.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lee Sin",
              "PICK-RATE": "12.60%",
              "WIN-RATE": "47.30%",
              "BAN-RATE": "10.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Leona",
              "PICK-RATE": "6.30%",
              "WIN-RATE": "50.20%",
              "BAN-RATE": "5.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lillia",
              "PICK-RATE": "4.90%",
              "WIN-RATE": "52.30%",
              "BAN-RATE": "2.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lissandra",
              "PICK-RATE": "3.40%",
              "WIN-RATE": "49.80%",
              "BAN-RATE": "1.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lucian",
              "PICK-RATE": "7.70%",
              "WIN-RATE": "48.30%",
              "BAN-RATE": "1.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lulu",
              "PICK-RATE": "7.10%",
              "WIN-RATE": "48.40%",
              "BAN-RATE": "5.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lux",
              "PICK-RATE": "20.70%",
              "WIN-RATE": "51.00%",
              "BAN-RATE": "19.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Malphite",
              "PICK-RATE": "13.20%",
              "WIN-RATE": "51.90%",
              "BAN-RATE": "23.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Malzahar",
              "PICK-RATE": "5.20%",
              "WIN-RATE": "52.30%",
              "BAN-RATE": "6.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Maokai",
              "PICK-RATE": "4.80%",
              "WIN-RATE": "51.90%",
              "BAN-RATE": "1.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Master Yi",
              "PICK-RATE": "9.40%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "23.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Milio",
              "PICK-RATE": "8.60%",
              "WIN-RATE": "51.60%",
              "BAN-RATE": "9.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Miss Fortune",
              "PICK-RATE": "14.70%",
              "WIN-RATE": "50.80%",
              "BAN-RATE": "3.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Mordekaiser",
              "PICK-RATE": "10.50%",
              "WIN-RATE": "52.30%",
              "BAN-RATE": "16.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Morgana",
              "PICK-RATE": "9.70%",
              "WIN-RATE": "50.20%",
              "BAN-RATE": "34.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nami",
              "PICK-RATE": "4.70%",
              "WIN-RATE": "50.10%",
              "BAN-RATE": "0.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nasus",
              "PICK-RATE": "6.30%",
              "WIN-RATE": "50.80%",
              "BAN-RATE": "4.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nautilus",
              "PICK-RATE": "9.10%",
              "WIN-RATE": "49.50%",
              "BAN-RATE": "11.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Neeko",
              "PICK-RATE": "3.20%",
              "WIN-RATE": "50.40%",
              "BAN-RATE": "0.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nidalee",
              "PICK-RATE": "3.40%",
              "WIN-RATE": "46.40%",
              "BAN-RATE": "1.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nilah",
              "PICK-RATE": "3.50%",
              "WIN-RATE": "53.60%",
              "BAN-RATE": "5.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nocturne",
              "PICK-RATE": "7.50%",
              "WIN-RATE": "53.10%",
              "BAN-RATE": "7.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nunu & Willump",
              "PICK-RATE": "4.90%",
              "WIN-RATE": "47.60%",
              "BAN-RATE": "1.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Olaf",
              "PICK-RATE": "4.00%",
              "WIN-RATE": "49.70%",
              "BAN-RATE": "5.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Orianna",
              "PICK-RATE": "2.00%",
              "WIN-RATE": "49.40%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ornn",
              "PICK-RATE": "3.30%",
              "WIN-RATE": "52.10%",
              "BAN-RATE": "0.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Pantheon",
              "PICK-RATE": "10.90%",
              "WIN-RATE": "50.00%",
              "BAN-RATE": "5.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Poppy",
              "PICK-RATE": "3.40%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "0.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Pyke",
              "PICK-RATE": "7.90%",
              "WIN-RATE": "48.70%",
              "BAN-RATE": "13.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Qiyana",
              "PICK-RATE": "3.10%",
              "WIN-RATE": "45.30%",
              "BAN-RATE": "0.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Quinn",
              "PICK-RATE": "1.60%",
              "WIN-RATE": "49.60%",
              "BAN-RATE": "0.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rakan",
              "PICK-RATE": "6.90%",
              "WIN-RATE": "51.30%",
              "BAN-RATE": "2.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rammus",
              "PICK-RATE": "3.90%",
              "WIN-RATE": "52.30%",
              "BAN-RATE": "10.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rek'Sai",
              "PICK-RATE": "0.90%",
              "WIN-RATE": "46.10%",
              "BAN-RATE": "0.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rell",
              "PICK-RATE": "1.10%",
              "WIN-RATE": "51.10%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Renata Glasc",
              "PICK-RATE": "1.70%",
              "WIN-RATE": "50.90%",
              "BAN-RATE": "0.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Renekton",
              "PICK-RATE": "3.70%",
              "WIN-RATE": "47.50%",
              "BAN-RATE": "1.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rengar",
              "PICK-RATE": "4.70%",
              "WIN-RATE": "45.90%",
              "BAN-RATE": "2.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Riven",
              "PICK-RATE": "4.30%",
              "WIN-RATE": "47.70%",
              "BAN-RATE": "0.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rumble",
              "PICK-RATE": "2.60%",
              "WIN-RATE": "47.70%",
              "BAN-RATE": "0.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ryze",
              "PICK-RATE": "2.10%",
              "WIN-RATE": "48.30%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Samira",
              "PICK-RATE": "7.50%",
              "WIN-RATE": "50.00%",
              "BAN-RATE": "21.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sejuani",
              "PICK-RATE": "4.50%",
              "WIN-RATE": "50.30%",
              "BAN-RATE": "1.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Senna",
              "PICK-RATE": "10.90%",
              "WIN-RATE": "50.70%",
              "BAN-RATE": "4.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Seraphine",
              "PICK-RATE": "6.00%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "1.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sett",
              "PICK-RATE": "8.50%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "4.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Shaco",
              "PICK-RATE": "9.00%",
              "WIN-RATE": "49.20%",
              "BAN-RATE": "27.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Shen",
              "PICK-RATE": "4.90%",
              "WIN-RATE": "51.30%",
              "BAN-RATE": "0.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Shyvana",
              "PICK-RATE": "2.90%",
              "WIN-RATE": "51.60%",
              "BAN-RATE": "0.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Singed",
              "PICK-RATE": "2.00%",
              "WIN-RATE": "51.60%",
              "BAN-RATE": "0.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sion",
              "PICK-RATE": "8.60%",
              "WIN-RATE": "51.70%",
              "BAN-RATE": "4.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sivir",
              "PICK-RATE": "4.40%",
              "WIN-RATE": "50.80%",
              "BAN-RATE": "0.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Skarner",
              "PICK-RATE": "1.20%",
              "WIN-RATE": "50.20%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sona",
              "PICK-RATE": "2.80%",
              "WIN-RATE": "52.00%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Soraka",
              "PICK-RATE": "4.00%",
              "WIN-RATE": "50.40%",
              "BAN-RATE": "1.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Swain",
              "PICK-RATE": "6.70%",
              "WIN-RATE": "51.00%",
              "BAN-RATE": "4.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sylas",
              "PICK-RATE": "12.80%",
              "WIN-RATE": "48.90%",
              "BAN-RATE": "14.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Syndra",
              "PICK-RATE": "3.90%",
              "WIN-RATE": "49.50%",
              "BAN-RATE": "1.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Tahm Kench",
              "PICK-RATE": "3.70%",
              "WIN-RATE": "50.60%",
              "BAN-RATE": "3.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Taliyah",
              "PICK-RATE": "1.40%",
              "WIN-RATE": "48.90%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Talon",
              "PICK-RATE": "4.00%",
              "WIN-RATE": "48.30%",
              "BAN-RATE": "1.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Taric",
              "PICK-RATE": "1.70%",
              "WIN-RATE": "52.00%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Teemo",
              "PICK-RATE": "7.80%",
              "WIN-RATE": "51.10%",
              "BAN-RATE": "10.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Thresh",
              "PICK-RATE": "15.00%",
              "WIN-RATE": "49.40%",
              "BAN-RATE": "6.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Tristana",
              "PICK-RATE": "9.60%",
              "WIN-RATE": "50.20%",
              "BAN-RATE": "5.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Trundle",
              "PICK-RATE": "2.50%",
              "WIN-RATE": "50.30%",
              "BAN-RATE": "1.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Tryndamere",
              "PICK-RATE": "3.10%",
              "WIN-RATE": "48.40%",
              "BAN-RATE": "2.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Twisted Fate",
              "PICK-RATE": "2.50%",
              "WIN-RATE": "47.70%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Twitch",
              "PICK-RATE": "6.80%",
              "WIN-RATE": "49.50%",
              "BAN-RATE": "7.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Udyr",
              "PICK-RATE": "3.50%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "4.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Urgot",
              "PICK-RATE": "3.10%",
              "WIN-RATE": "51.60%",
              "BAN-RATE": "1.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Varus",
              "PICK-RATE": "8.70%",
              "WIN-RATE": "49.50%",
              "BAN-RATE": "2.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vayne",
              "PICK-RATE": "9.70%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "6.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Veigar",
              "PICK-RATE": "10.70%",
              "WIN-RATE": "51.90%",
              "BAN-RATE": "11.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vel'Koz",
              "PICK-RATE": "3.50%",
              "WIN-RATE": "50.60%",
              "BAN-RATE": "0.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vex",
              "PICK-RATE": "4.90%",
              "WIN-RATE": "50.20%",
              "BAN-RATE": "5.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vi",
              "PICK-RATE": "7.40%",
              "WIN-RATE": "51.80%",
              "BAN-RATE": "3.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Viego",
              "PICK-RATE": "7.30%",
              "WIN-RATE": "49.80%",
              "BAN-RATE": "2.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Viktor",
              "PICK-RATE": "4.90%",
              "WIN-RATE": "51.20%",
              "BAN-RATE": "2.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vladimir",
              "PICK-RATE": "5.30%",
              "WIN-RATE": "50.30%",
              "BAN-RATE": "4.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Volibear",
              "PICK-RATE": "4.60%",
              "WIN-RATE": "49.40%",
              "BAN-RATE": "1.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Warwick",
              "PICK-RATE": "8.50%",
              "WIN-RATE": "51.10%",
              "BAN-RATE": "8.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Wukong",
              "PICK-RATE": "5.70%",
              "WIN-RATE": "50.60%",
              "BAN-RATE": "3.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Xayah",
              "PICK-RATE": "10.70%",
              "WIN-RATE": "50.10%",
              "BAN-RATE": "9.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Xerath",
              "PICK-RATE": "6.00%",
              "WIN-RATE": "51.60%",
              "BAN-RATE": "5.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Xin Zhao",
              "PICK-RATE": "3.40%",
              "WIN-RATE": "50.20%",
              "BAN-RATE": "0.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Yasuo",
              "PICK-RATE": "16.00%",
              "WIN-RATE": "48.90%",
              "BAN-RATE": "22.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Yone",
              "PICK-RATE": "12.00%",
              "WIN-RATE": "48.70%",
              "BAN-RATE": "10.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Yorick",
              "PICK-RATE": "4.80%",
              "WIN-RATE": "51.70%",
              "BAN-RATE": "6.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Yuumi",
              "PICK-RATE": "7.30%",
              "WIN-RATE": "49.80%",
              "BAN-RATE": "13.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zac",
              "PICK-RATE": "4.50%",
              "WIN-RATE": "51.70%",
              "BAN-RATE": "3.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zed",
              "PICK-RATE": "11.50%",
              "WIN-RATE": "48.40%",
              "BAN-RATE": "36.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zeri",
              "PICK-RATE": "5.80%",
              "WIN-RATE": "48.90%",
              "BAN-RATE": "4.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ziggs",
              "PICK-RATE": "2.80%",
              "WIN-RATE": "50.90%",
              "BAN-RATE": "0.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zilean",
              "PICK-RATE": "2.20%",
              "WIN-RATE": "51.00%",
              "BAN-RATE": "0.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zoe",
              "PICK-RATE": "2.70%",
              "WIN-RATE": "47.70%",
              "BAN-RATE": "1.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zyra",
              "PICK-RATE": "4.60%",
              "WIN-RATE": "51.60%",
              "BAN-RATE": "3.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            }
          ]
    })
});
app.get('/gold', (req, res) => {
    res.status(200).send({
        champions: [
            {
              "NAME": "Aatrox",
              "PICK-RATE": "4.50%",
              "WIN-RATE": "47.90%",
              "BAN-RATE": "4.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ahri",
              "PICK-RATE": "11.60%",
              "WIN-RATE": "51.00%",
              "BAN-RATE": "5.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Akali",
              "PICK-RATE": "6.60%",
              "WIN-RATE": "46.70%",
              "BAN-RATE": "8.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Akshan",
              "PICK-RATE": "3.70%",
              "WIN-RATE": "51.10%",
              "BAN-RATE": "3.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Alistar",
              "PICK-RATE": "4.50%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "1.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Amumu",
              "PICK-RATE": "4.90%",
              "WIN-RATE": "51.00%",
              "BAN-RATE": "3.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Anivia",
              "PICK-RATE": "2.90%",
              "WIN-RATE": "51.80%",
              "BAN-RATE": "3.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Annie",
              "PICK-RATE": "5.30%",
              "WIN-RATE": "52.30%",
              "BAN-RATE": "6.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Aphelios",
              "PICK-RATE": "8.50%",
              "WIN-RATE": "46.50%",
              "BAN-RATE": "1.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ashe",
              "PICK-RATE": "9.70%",
              "WIN-RATE": "50.00%",
              "BAN-RATE": "2.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Aurelion Sol",
              "PICK-RATE": "7.50%",
              "WIN-RATE": "51.60%",
              "BAN-RATE": "25.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Azir",
              "PICK-RATE": "2.50%",
              "WIN-RATE": "46.50%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Bard",
              "PICK-RATE": "2.00%",
              "WIN-RATE": "49.10%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Bel'Veth",
              "PICK-RATE": "3.60%",
              "WIN-RATE": "50.00%",
              "BAN-RATE": "5.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Blitzcrank",
              "PICK-RATE": "8.70%",
              "WIN-RATE": "50.90%",
              "BAN-RATE": "27.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Brand",
              "PICK-RATE": "4.30%",
              "WIN-RATE": "50.30%",
              "BAN-RATE": "3.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Braum",
              "PICK-RATE": "2.40%",
              "WIN-RATE": "50.20%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Caitlyn",
              "PICK-RATE": "13.30%",
              "WIN-RATE": "48.00%",
              "BAN-RATE": "11.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Camille",
              "PICK-RATE": "3.80%",
              "WIN-RATE": "49.80%",
              "BAN-RATE": "1.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Cassiopeia",
              "PICK-RATE": "3.60%",
              "WIN-RATE": "52.20%",
              "BAN-RATE": "3.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Cho'Gath",
              "PICK-RATE": "5.90%",
              "WIN-RATE": "51.00%",
              "BAN-RATE": "2.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Corki",
              "PICK-RATE": "1.10%",
              "WIN-RATE": "47.80%",
              "BAN-RATE": "0.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Darius",
              "PICK-RATE": "8.20%",
              "WIN-RATE": "48.90%",
              "BAN-RATE": "23.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Diana",
              "PICK-RATE": "7.20%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "3.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Dr. Mundo",
              "PICK-RATE": "4.50%",
              "WIN-RATE": "52.10%",
              "BAN-RATE": "3.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Draven",
              "PICK-RATE": "5.70%",
              "WIN-RATE": "49.20%",
              "BAN-RATE": "16.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ekko",
              "PICK-RATE": "8.70%",
              "WIN-RATE": "50.20%",
              "BAN-RATE": "4.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Elise",
              "PICK-RATE": "2.90%",
              "WIN-RATE": "49.60%",
              "BAN-RATE": "5.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Evelynn",
              "PICK-RATE": "4.10%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "8.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ezreal",
              "PICK-RATE": "19.40%",
              "WIN-RATE": "48.40%",
              "BAN-RATE": "4.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Fiddlesticks",
              "PICK-RATE": "4.40%",
              "WIN-RATE": "51.70%",
              "BAN-RATE": "3.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Fiora",
              "PICK-RATE": "5.90%",
              "WIN-RATE": "50.00%",
              "BAN-RATE": "12.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Fizz",
              "PICK-RATE": "6.40%",
              "WIN-RATE": "50.60%",
              "BAN-RATE": "7.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Galio",
              "PICK-RATE": "2.60%",
              "WIN-RATE": "50.10%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Gangplank",
              "PICK-RATE": "5.70%",
              "WIN-RATE": "48.20%",
              "BAN-RATE": "6.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Garen",
              "PICK-RATE": "6.40%",
              "WIN-RATE": "50.20%",
              "BAN-RATE": "2.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Gnar",
              "PICK-RATE": "3.00%",
              "WIN-RATE": "48.40%",
              "BAN-RATE": "0.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Gragas",
              "PICK-RATE": "10.60%",
              "WIN-RATE": "49.10%",
              "BAN-RATE": "5.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Graves",
              "PICK-RATE": "7.30%",
              "WIN-RATE": "48.40%",
              "BAN-RATE": "2.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Gwen",
              "PICK-RATE": "3.80%",
              "WIN-RATE": "49.60%",
              "BAN-RATE": "1.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Hecarim",
              "PICK-RATE": "7.30%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "13.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Heimerdinger",
              "PICK-RATE": "2.60%",
              "WIN-RATE": "51.40%",
              "BAN-RATE": "1.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Illaoi",
              "PICK-RATE": "5.80%",
              "WIN-RATE": "50.30%",
              "BAN-RATE": "11.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Irelia",
              "PICK-RATE": "8.60%",
              "WIN-RATE": "49.40%",
              "BAN-RATE": "16.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ivern",
              "PICK-RATE": "1.00%",
              "WIN-RATE": "47.20%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Janna",
              "PICK-RATE": "3.50%",
              "WIN-RATE": "52.00%",
              "BAN-RATE": "0.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jarvan IV",
              "PICK-RATE": "11.60%",
              "WIN-RATE": "52.50%",
              "BAN-RATE": "21.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jax",
              "PICK-RATE": "9.50%",
              "WIN-RATE": "49.80%",
              "BAN-RATE": "13.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jayce",
              "PICK-RATE": "8.20%",
              "WIN-RATE": "49.80%",
              "BAN-RATE": "4.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jhin",
              "PICK-RATE": "13.80%",
              "WIN-RATE": "50.70%",
              "BAN-RATE": "2.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jinx",
              "PICK-RATE": "27.20%",
              "WIN-RATE": "51.70%",
              "BAN-RATE": "12.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "K'Sante",
              "PICK-RATE": "5.10%",
              "WIN-RATE": "45.60%",
              "BAN-RATE": "4.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kai'Sa",
              "PICK-RATE": "16.50%",
              "WIN-RATE": "49.50%",
              "BAN-RATE": "2.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kalista",
              "PICK-RATE": "2.00%",
              "WIN-RATE": "46.90%",
              "BAN-RATE": "0.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Karma",
              "PICK-RATE": "6.30%",
              "WIN-RATE": "48.30%",
              "BAN-RATE": "1.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Karthus",
              "PICK-RATE": "3.10%",
              "WIN-RATE": "50.00%",
              "BAN-RATE": "1.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kassadin",
              "PICK-RATE": "2.20%",
              "WIN-RATE": "49.20%",
              "BAN-RATE": "4.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Katarina",
              "PICK-RATE": "11.20%",
              "WIN-RATE": "48.50%",
              "BAN-RATE": "16.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kayle",
              "PICK-RATE": "3.40%",
              "WIN-RATE": "51.50%",
              "BAN-RATE": "0.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kayn",
              "PICK-RATE": "11.30%",
              "WIN-RATE": "49.80%",
              "BAN-RATE": "11.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kennen",
              "PICK-RATE": "3.70%",
              "WIN-RATE": "49.10%",
              "BAN-RATE": "1.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kha'Zix",
              "PICK-RATE": "7.50%",
              "WIN-RATE": "51.40%",
              "BAN-RATE": "2.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kindred",
              "PICK-RATE": "4.60%",
              "WIN-RATE": "48.90%",
              "BAN-RATE": "3.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kled",
              "PICK-RATE": "3.00%",
              "WIN-RATE": "51.40%",
              "BAN-RATE": "1.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kog'Maw",
              "PICK-RATE": "3.10%",
              "WIN-RATE": "51.60%",
              "BAN-RATE": "0.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "LeBlanc",
              "PICK-RATE": "5.80%",
              "WIN-RATE": "47.50%",
              "BAN-RATE": "8.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lee Sin",
              "PICK-RATE": "14.90%",
              "WIN-RATE": "47.70%",
              "BAN-RATE": "12.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Leona",
              "PICK-RATE": "5.80%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "5.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lillia",
              "PICK-RATE": "4.90%",
              "WIN-RATE": "51.10%",
              "BAN-RATE": "1.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lissandra",
              "PICK-RATE": "4.30%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "1.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lucian",
              "PICK-RATE": "8.50%",
              "WIN-RATE": "48.60%",
              "BAN-RATE": "1.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lulu",
              "PICK-RATE": "9.90%",
              "WIN-RATE": "48.80%",
              "BAN-RATE": "8.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lux",
              "PICK-RATE": "16.30%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "9.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Malphite",
              "PICK-RATE": "13.30%",
              "WIN-RATE": "52.10%",
              "BAN-RATE": "30.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Malzahar",
              "PICK-RATE": "5.10%",
              "WIN-RATE": "51.60%",
              "BAN-RATE": "5.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Maokai",
              "PICK-RATE": "5.40%",
              "WIN-RATE": "51.80%",
              "BAN-RATE": "1.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Master Yi",
              "PICK-RATE": "7.50%",
              "WIN-RATE": "50.40%",
              "BAN-RATE": "17.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Milio",
              "PICK-RATE": "11.10%",
              "WIN-RATE": "52.00%",
              "BAN-RATE": "13.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Miss Fortune",
              "PICK-RATE": "9.00%",
              "WIN-RATE": "49.70%",
              "BAN-RATE": "1.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Mordekaiser",
              "PICK-RATE": "8.60%",
              "WIN-RATE": "52.00%",
              "BAN-RATE": "13.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Morgana",
              "PICK-RATE": "7.00%",
              "WIN-RATE": "49.50%",
              "BAN-RATE": "31.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nami",
              "PICK-RATE": "5.80%",
              "WIN-RATE": "50.10%",
              "BAN-RATE": "0.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nasus",
              "PICK-RATE": "5.00%",
              "WIN-RATE": "50.20%",
              "BAN-RATE": "3.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nautilus",
              "PICK-RATE": "9.40%",
              "WIN-RATE": "49.70%",
              "BAN-RATE": "12.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Neeko",
              "PICK-RATE": "1.90%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nidalee",
              "PICK-RATE": "4.20%",
              "WIN-RATE": "48.00%",
              "BAN-RATE": "2.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nilah",
              "PICK-RATE": "3.30%",
              "WIN-RATE": "52.70%",
              "BAN-RATE": "4.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nocturne",
              "PICK-RATE": "6.50%",
              "WIN-RATE": "52.40%",
              "BAN-RATE": "5.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nunu & Willump",
              "PICK-RATE": "4.10%",
              "WIN-RATE": "47.80%",
              "BAN-RATE": "1.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Olaf",
              "PICK-RATE": "3.70%",
              "WIN-RATE": "50.20%",
              "BAN-RATE": "5.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Orianna",
              "PICK-RATE": "2.40%",
              "WIN-RATE": "49.30%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ornn",
              "PICK-RATE": "3.70%",
              "WIN-RATE": "52.30%",
              "BAN-RATE": "0.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Pantheon",
              "PICK-RATE": "10.10%",
              "WIN-RATE": "50.40%",
              "BAN-RATE": "5.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Poppy",
              "PICK-RATE": "3.90%",
              "WIN-RATE": "51.10%",
              "BAN-RATE": "1.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Pyke",
              "PICK-RATE": "7.30%",
              "WIN-RATE": "49.10%",
              "BAN-RATE": "10.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Qiyana",
              "PICK-RATE": "3.20%",
              "WIN-RATE": "46.90%",
              "BAN-RATE": "0.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Quinn",
              "PICK-RATE": "1.40%",
              "WIN-RATE": "50.90%",
              "BAN-RATE": "0.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rakan",
              "PICK-RATE": "8.50%",
              "WIN-RATE": "51.60%",
              "BAN-RATE": "4.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rammus",
              "PICK-RATE": "3.30%",
              "WIN-RATE": "50.70%",
              "BAN-RATE": "9.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rek'Sai",
              "PICK-RATE": "1.20%",
              "WIN-RATE": "48.60%",
              "BAN-RATE": "0.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rell",
              "PICK-RATE": "1.20%",
              "WIN-RATE": "51.00%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Renata Glasc",
              "PICK-RATE": "2.00%",
              "WIN-RATE": "51.20%",
              "BAN-RATE": "0.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Renekton",
              "PICK-RATE": "4.00%",
              "WIN-RATE": "47.80%",
              "BAN-RATE": "1.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rengar",
              "PICK-RATE": "4.80%",
              "WIN-RATE": "48.50%",
              "BAN-RATE": "3.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Riven",
              "PICK-RATE": "4.90%",
              "WIN-RATE": "49.50%",
              "BAN-RATE": "1.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rumble",
              "PICK-RATE": "3.20%",
              "WIN-RATE": "47.90%",
              "BAN-RATE": "1.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ryze",
              "PICK-RATE": "2.30%",
              "WIN-RATE": "48.70%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Samira",
              "PICK-RATE": "7.10%",
              "WIN-RATE": "49.60%",
              "BAN-RATE": "18.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sejuani",
              "PICK-RATE": "4.80%",
              "WIN-RATE": "49.60%",
              "BAN-RATE": "1.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Senna",
              "PICK-RATE": "10.50%",
              "WIN-RATE": "51.30%",
              "BAN-RATE": "4.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Seraphine",
              "PICK-RATE": "4.60%",
              "WIN-RATE": "49.60%",
              "BAN-RATE": "0.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sett",
              "PICK-RATE": "6.50%",
              "WIN-RATE": "49.30%",
              "BAN-RATE": "2.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Shaco",
              "PICK-RATE": "7.80%",
              "WIN-RATE": "49.30%",
              "BAN-RATE": "22.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Shen",
              "PICK-RATE": "5.20%",
              "WIN-RATE": "51.30%",
              "BAN-RATE": "0.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Shyvana",
              "PICK-RATE": "2.40%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "0.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Singed",
              "PICK-RATE": "2.20%",
              "WIN-RATE": "51.80%",
              "BAN-RATE": "0.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sion",
              "PICK-RATE": "9.80%",
              "WIN-RATE": "50.90%",
              "BAN-RATE": "4.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sivir",
              "PICK-RATE": "4.70%",
              "WIN-RATE": "51.30%",
              "BAN-RATE": "0.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Skarner",
              "PICK-RATE": "1.00%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sona",
              "PICK-RATE": "2.50%",
              "WIN-RATE": "52.10%",
              "BAN-RATE": "0.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Soraka",
              "PICK-RATE": "4.10%",
              "WIN-RATE": "50.60%",
              "BAN-RATE": "1.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Swain",
              "PICK-RATE": "5.60%",
              "WIN-RATE": "49.50%",
              "BAN-RATE": "2.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sylas",
              "PICK-RATE": "13.40%",
              "WIN-RATE": "49.30%",
              "BAN-RATE": "15.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Syndra",
              "PICK-RATE": "4.70%",
              "WIN-RATE": "49.70%",
              "BAN-RATE": "2.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Tahm Kench",
              "PICK-RATE": "3.50%",
              "WIN-RATE": "51.70%",
              "BAN-RATE": "5.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Taliyah",
              "PICK-RATE": "1.70%",
              "WIN-RATE": "49.80%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Talon",
              "PICK-RATE": "4.40%",
              "WIN-RATE": "49.70%",
              "BAN-RATE": "1.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Taric",
              "PICK-RATE": "1.70%",
              "WIN-RATE": "52.10%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Teemo",
              "PICK-RATE": "4.80%",
              "WIN-RATE": "50.20%",
              "BAN-RATE": "4.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Thresh",
              "PICK-RATE": "18.50%",
              "WIN-RATE": "49.80%",
              "BAN-RATE": "9.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Tristana",
              "PICK-RATE": "7.80%",
              "WIN-RATE": "50.30%",
              "BAN-RATE": "2.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Trundle",
              "PICK-RATE": "2.00%",
              "WIN-RATE": "49.30%",
              "BAN-RATE": "0.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Tryndamere",
              "PICK-RATE": "2.50%",
              "WIN-RATE": "49.20%",
              "BAN-RATE": "1.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Twisted Fate",
              "PICK-RATE": "3.00%",
              "WIN-RATE": "48.40%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Twitch",
              "PICK-RATE": "6.80%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "6.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Udyr",
              "PICK-RATE": "3.60%",
              "WIN-RATE": "50.90%",
              "BAN-RATE": "5.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Urgot",
              "PICK-RATE": "2.60%",
              "WIN-RATE": "51.30%",
              "BAN-RATE": "0.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Varus",
              "PICK-RATE": "8.40%",
              "WIN-RATE": "49.60%",
              "BAN-RATE": "1.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vayne",
              "PICK-RATE": "9.60%",
              "WIN-RATE": "50.60%",
              "BAN-RATE": "6.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Veigar",
              "PICK-RATE": "9.00%",
              "WIN-RATE": "51.00%",
              "BAN-RATE": "10.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vel'Koz",
              "PICK-RATE": "3.10%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "0.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vex",
              "PICK-RATE": "4.30%",
              "WIN-RATE": "50.70%",
              "BAN-RATE": "5.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vi",
              "PICK-RATE": "7.60%",
              "WIN-RATE": "51.50%",
              "BAN-RATE": "4.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Viego",
              "PICK-RATE": "7.30%",
              "WIN-RATE": "49.40%",
              "BAN-RATE": "2.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Viktor",
              "PICK-RATE": "6.40%",
              "WIN-RATE": "51.10%",
              "BAN-RATE": "3.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vladimir",
              "PICK-RATE": "6.20%",
              "WIN-RATE": "51.00%",
              "BAN-RATE": "5.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Volibear",
              "PICK-RATE": "3.30%",
              "WIN-RATE": "48.80%",
              "BAN-RATE": "0.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Warwick",
              "PICK-RATE": "5.30%",
              "WIN-RATE": "50.60%",
              "BAN-RATE": "3.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Wukong",
              "PICK-RATE": "6.60%",
              "WIN-RATE": "50.20%",
              "BAN-RATE": "5.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Xayah",
              "PICK-RATE": "12.90%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "13.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Xerath",
              "PICK-RATE": "6.10%",
              "WIN-RATE": "51.30%",
              "BAN-RATE": "4.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Xin Zhao",
              "PICK-RATE": "2.90%",
              "WIN-RATE": "50.40%",
              "BAN-RATE": "0.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Yasuo",
              "PICK-RATE": "13.00%",
              "WIN-RATE": "48.20%",
              "BAN-RATE": "19.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Yone",
              "PICK-RATE": "9.80%",
              "WIN-RATE": "48.00%",
              "BAN-RATE": "8.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Yorick",
              "PICK-RATE": "4.00%",
              "WIN-RATE": "49.90%",
              "BAN-RATE": "4.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Yuumi",
              "PICK-RATE": "7.50%",
              "WIN-RATE": "50.60%",
              "BAN-RATE": "18.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zac",
              "PICK-RATE": "5.40%",
              "WIN-RATE": "51.40%",
              "BAN-RATE": "5.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zed",
              "PICK-RATE": "11.70%",
              "WIN-RATE": "48.90%",
              "BAN-RATE": "37.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zeri",
              "PICK-RATE": "7.30%",
              "WIN-RATE": "49.40%",
              "BAN-RATE": "6.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ziggs",
              "PICK-RATE": "2.40%",
              "WIN-RATE": "51.10%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zilean",
              "PICK-RATE": "2.70%",
              "WIN-RATE": "51.40%",
              "BAN-RATE": "0.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zoe",
              "PICK-RATE": "2.70%",
              "WIN-RATE": "48.60%",
              "BAN-RATE": "1.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zyra",
              "PICK-RATE": "4.00%",
              "WIN-RATE": "50.90%",
              "BAN-RATE": "2.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            }
          ]
    })
});
app.get('/average', (req, res) => {
    res.status(200).send({
        champions: [
            {
              "NAME": "Aatrox",
              "PICK-RATE": "4.33%",
              "WIN-RATE": "47.53%",
              "BAN-RATE": "3.93%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ahri",
              "PICK-RATE": "12.30%",
              "WIN-RATE": "50.90%",
              "BAN-RATE": "4.97%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Akali",
              "PICK-RATE": "6.77%",
              "WIN-RATE": "50.90%",
              "BAN-RATE": "8.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Akshan",
              "PICK-RATE": "3.93%",
              "WIN-RATE": "51.80%",
              "BAN-RATE": "4.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Alistar",
              "PICK-RATE": "4.43%",
              "WIN-RATE": "50.27%",
              "BAN-RATE": "1.03%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Amumu",
              "PICK-RATE": "4.43%",
              "WIN-RATE": "50.67%",
              "BAN-RATE": "2.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Anivia",
              "PICK-RATE": "2.70%",
              "WIN-RATE": "51.20%",
              "BAN-RATE": "3.77%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Annie",
              "PICK-RATE": "5.60%",
              "WIN-RATE": "51.50%",
              "BAN-RATE": "5.63%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Aphelios",
              "PICK-RATE": "10.40%",
              "WIN-RATE": "46.80%",
              "BAN-RATE": "1.63%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ashe",
              "PICK-RATE": "8.80%",
              "WIN-RATE": "50.63%",
              "BAN-RATE": "2.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Aurelion Sol",
              "PICK-RATE": "6.37%",
              "WIN-RATE": "50.83%",
              "BAN-RATE": "19.93%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Azir",
              "PICK-RATE": "2.37%",
              "WIN-RATE": "46.60%",
              "BAN-RATE": "0.33%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Bard",
              "PICK-RATE": "2.27%",
              "WIN-RATE": "49.20%",
              "BAN-RATE": "0.33%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Bel'Veth",
              "PICK-RATE": "3.90%",
              "WIN-RATE": "50.67%",
              "BAN-RATE": "5.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Blitzcrank",
              "PICK-RATE": "8.90%",
              "WIN-RATE": "50.53%",
              "BAN-RATE": "26.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Brand",
              "PICK-RATE": "3.83%",
              "WIN-RATE": "48.93%",
              "BAN-RATE": "3.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Braum",
              "PICK-RATE": "2.47%",
              "WIN-RATE": "49.60%",
              "BAN-RATE": "0.27%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Caitlyn",
              "PICK-RATE": "11.80%",
              "WIN-RATE": "47.50%",
              "BAN-RATE": "10.03%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Camille",
              "PICK-RATE": "4.13%",
              "WIN-RATE": "49.13%",
              "BAN-RATE": "2.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Cassiopeia",
              "PICK-RATE": "4.20%",
              "WIN-RATE": "52.37%",
              "BAN-RATE": "3.73%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Cho'Gath",
              "PICK-RATE": "5.60%",
              "WIN-RATE": "50.27%",
              "BAN-RATE": "1.93%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Corki",
              "PICK-RATE": "0.97%",
              "WIN-RATE": "48.30%",
              "BAN-RATE": "0.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Darius",
              "PICK-RATE": "7.87%",
              "WIN-RATE": "49.50%",
              "BAN-RATE": "20.07%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Diana",
              "PICK-RATE": "6.77%",
              "WIN-RATE": "49.33%",
              "BAN-RATE": "2.77%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Dr. Mundo",
              "PICK-RATE": "3.97%",
              "WIN-RATE": "51.27%",
              "BAN-RATE": "3.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Draven",
              "PICK-RATE": "5.93%",
              "WIN-RATE": "50.07%",
              "BAN-RATE": "21.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ekko",
              "PICK-RATE": "8.47%",
              "WIN-RATE": "50.10%",
              "BAN-RATE": "5.17%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Elise",
              "PICK-RATE": "3.13%",
              "WIN-RATE": "50.10%",
              "BAN-RATE": "6.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Evelynn",
              "PICK-RATE": "4.27%",
              "WIN-RATE": "49.60%",
              "BAN-RATE": "11.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ezreal",
              "PICK-RATE": "18.20%",
              "WIN-RATE": "48.77%",
              "BAN-RATE": "3.63%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Fiddlesticks",
              "PICK-RATE": "4.13%",
              "WIN-RATE": "52.20%",
              "BAN-RATE": "3.97%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Fiora",
              "PICK-RATE": "6.17%",
              "WIN-RATE": "49.97%",
              "BAN-RATE": "14.03%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Fizz",
              "PICK-RATE": "5.83%",
              "WIN-RATE": "50.43%",
              "BAN-RATE": "6.33%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Galio",
              "PICK-RATE": "2.97%",
              "WIN-RATE": "49.57%",
              "BAN-RATE": "0.43%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Gangplank",
              "PICK-RATE": "4.83%",
              "WIN-RATE": "48.40%",
              "BAN-RATE": "5.33%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Garen",
              "PICK-RATE": "5.90%",
              "WIN-RATE": "49.97%",
              "BAN-RATE": "1.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Gnar",
              "PICK-RATE": "3.10%",
              "WIN-RATE": "47.80%",
              "BAN-RATE": "0.47%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Gragas",
              "PICK-RATE": "12.13%",
              "WIN-RATE": "49.33%",
              "BAN-RATE": "9.53%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Graves",
              "PICK-RATE": "7.97%",
              "WIN-RATE": "48.63%",
              "BAN-RATE": "3.73%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Gwen",
              "PICK-RATE": "3.97%",
              "WIN-RATE": "50.10%",
              "BAN-RATE": "1.63%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Hecarim",
              "PICK-RATE": "7.73%",
              "WIN-RATE": "49.73%",
              "BAN-RATE": "14.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Heimerdinger",
              "PICK-RATE": "2.77%",
              "WIN-RATE": "51.60%",
              "BAN-RATE": "2.13%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Illaoi",
              "PICK-RATE": "5.27%",
              "WIN-RATE": "50.37%",
              "BAN-RATE": "10.47%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Irelia",
              "PICK-RATE": "8.67%",
              "WIN-RATE": "49.43%",
              "BAN-RATE": "14.37%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ivern",
              "PICK-RATE": "1.13%",
              "WIN-RATE": "47.03%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Janna",
              "PICK-RATE": "4.23%",
              "WIN-RATE": "51.63%",
              "BAN-RATE": "0.57%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jarvan IV",
              "PICK-RATE": "11.03%",
              "WIN-RATE": "51.40%",
              "BAN-RATE": "19.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jax",
              "PICK-RATE": "10.27%",
              "WIN-RATE": "50.33%",
              "BAN-RATE": "15.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jayce",
              "PICK-RATE": "9.23%",
              "WIN-RATE": "49.40%",
              "BAN-RATE": "5.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jhin",
              "PICK-RATE": "11.43%",
              "WIN-RATE": "50.13%",
              "BAN-RATE": "2.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Jinx",
              "PICK-RATE": "28.23%",
              "WIN-RATE": "51.40%",
              "BAN-RATE": "12.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "K'Sante",
              "PICK-RATE": "6.50%",
              "WIN-RATE": "45.83%",
              "BAN-RATE": "4.23%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kai'Sa",
              "PICK-RATE": "16.37%",
              "WIN-RATE": "49.53%",
              "BAN-RATE": "2.17%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kalista",
              "PICK-RATE": "2.07%",
              "WIN-RATE": "46.90%",
              "BAN-RATE": "0.43%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Karma",
              "PICK-RATE": "7.13%",
              "WIN-RATE": "48.30%",
              "BAN-RATE": "1.67%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Karthus",
              "PICK-RATE": "4.03%",
              "WIN-RATE": "50.07%",
              "BAN-RATE": "3.47%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kassadin",
              "PICK-RATE": "2.27%",
              "WIN-RATE": "48.27%",
              "BAN-RATE": "6.53%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Katarina",
              "PICK-RATE": "10.20%",
              "WIN-RATE": "49.33%",
              "BAN-RATE": "16.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kayle",
              "PICK-RATE": "3.07%",
              "WIN-RATE": "51.57%",
              "BAN-RATE": "0.63%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kayn",
              "PICK-RATE": "10.70%",
              "WIN-RATE": "49.67%",
              "BAN-RATE": "11.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kennen",
              "PICK-RATE": "4.37%",
              "WIN-RATE": "48.73%",
              "BAN-RATE": "2.53%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kha'Zix",
              "PICK-RATE": "7.17%",
              "WIN-RATE": "51.07%",
              "BAN-RATE": "2.97%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kindred",
              "PICK-RATE": "5.43%",
              "WIN-RATE": "49.37%",
              "BAN-RATE": "6.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kled",
              "PICK-RATE": "3.17%",
              "WIN-RATE": "50.93%",
              "BAN-RATE": "1.73%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Kog'Maw",
              "PICK-RATE": "3.03%",
              "WIN-RATE": "51.10%",
              "BAN-RATE": "0.67%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "LeBlanc",
              "PICK-RATE": "5.83%",
              "WIN-RATE": "47.93%",
              "BAN-RATE": "10.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lee Sin",
              "PICK-RATE": "14.67%",
              "WIN-RATE": "47.63%",
              "BAN-RATE": "11.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Leona",
              "PICK-RATE": "5.40%",
              "WIN-RATE": "49.50%",
              "BAN-RATE": "4.03%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lillia",
              "PICK-RATE": "4.70%",
              "WIN-RATE": "50.63%",
              "BAN-RATE": "1.87%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lissandra",
              "PICK-RATE": "4.43%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "1.43%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lucian",
              "PICK-RATE": "7.17%",
              "WIN-RATE": "49.10%",
              "BAN-RATE": "1.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lulu",
              "PICK-RATE": "10.40%",
              "WIN-RATE": "48.23%",
              "BAN-RATE": "8.27%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Lux",
              "PICK-RATE": "14.93%",
              "WIN-RATE": "50.27%",
              "BAN-RATE": "10.13%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Malphite",
              "PICK-RATE": "12.97%",
              "WIN-RATE": "51.60%",
              "BAN-RATE": "29.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Malzahar",
              "PICK-RATE": "4.27%",
              "WIN-RATE": "50.87%",
              "BAN-RATE": "4.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Maokai",
              "PICK-RATE": "5.17%",
              "WIN-RATE": "51.63%",
              "BAN-RATE": "1.13%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Master Yi",
              "PICK-RATE": "7.30%",
              "WIN-RATE": "50.73%",
              "BAN-RATE": "16.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Milio",
              "PICK-RATE": "11.33%",
              "WIN-RATE": "51.70%",
              "BAN-RATE": "14.43%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Miss Fortune",
              "PICK-RATE": "8.77%",
              "WIN-RATE": "49.63%",
              "BAN-RATE": "1.67%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Mordekaiser",
              "PICK-RATE": "8.03%",
              "WIN-RATE": "50.90%",
              "BAN-RATE": "11.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Morgana",
              "PICK-RATE": "6.50%",
              "WIN-RATE": "48.83%",
              "BAN-RATE": "24.87%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nami",
              "PICK-RATE": "5.40%",
              "WIN-RATE": "49.50%",
              "BAN-RATE": "0.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nasus",
              "PICK-RATE": "4.57%",
              "WIN-RATE": "49.30%",
              "BAN-RATE": "3.23%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nautilus",
              "PICK-RATE": "10.50%",
              "WIN-RATE": "49.77%",
              "BAN-RATE": "12.13%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Neeko",
              "PICK-RATE": "2.00%",
              "WIN-RATE": "52.03%",
              "BAN-RATE": "0.37%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nidalee",
              "PICK-RATE": "5.27%",
              "WIN-RATE": "49.10%",
              "BAN-RATE": "5.03%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nilah",
              "PICK-RATE": "3.07%",
              "WIN-RATE": "52.23%",
              "BAN-RATE": "4.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nocturne",
              "PICK-RATE": "5.53%",
              "WIN-RATE": "51.87%",
              "BAN-RATE": "4.73%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Nunu & Willump",
              "PICK-RATE": "4.10%",
              "WIN-RATE": "48.30%",
              "BAN-RATE": "1.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Olaf",
              "PICK-RATE": "4.23%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "6.33%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Orianna",
              "PICK-RATE": "2.53%",
              "WIN-RATE": "49.70%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ornn",
              "PICK-RATE": "3.87%",
              "WIN-RATE": "52.10%",
              "BAN-RATE": "0.43%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Pantheon",
              "PICK-RATE": "9.70%",
              "WIN-RATE": "49.93%",
              "BAN-RATE": "4.87%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Poppy",
              "PICK-RATE": "3.70%",
              "WIN-RATE": "51.50%",
              "BAN-RATE": "1.07%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Pyke",
              "PICK-RATE": "7.67%",
              "WIN-RATE": "49.93%",
              "BAN-RATE": "12.83%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Qiyana",
              "PICK-RATE": "3.77%",
              "WIN-RATE": "47.47%",
              "BAN-RATE": "1.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Quinn",
              "PICK-RATE": "1.43%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "0.47%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rakan",
              "PICK-RATE": "10.63%",
              "WIN-RATE": "51.97%",
              "BAN-RATE": "6.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rammus",
              "PICK-RATE": "3.00%",
              "WIN-RATE": "50.27%",
              "BAN-RATE": "8.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rek'Sai",
              "PICK-RATE": "1.47%",
              "WIN-RATE": "49.93%",
              "BAN-RATE": "0.83%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rell",
              "PICK-RATE": "1.37%",
              "WIN-RATE": "52.03%",
              "BAN-RATE": "0.27%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Renata Glasc",
              "PICK-RATE": "2.10%",
              "WIN-RATE": "50.03%",
              "BAN-RATE": "0.67%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Renekton",
              "PICK-RATE": "4.30%",
              "WIN-RATE": "48.20%",
              "BAN-RATE": "2.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rengar",
              "PICK-RATE": "5.40%",
              "WIN-RATE": "49.70%",
              "BAN-RATE": "8.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Riven",
              "PICK-RATE": "5.20%",
              "WIN-RATE": "49.73%",
              "BAN-RATE": "1.93%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Rumble",
              "PICK-RATE": "3.77%",
              "WIN-RATE": "48.97%",
              "BAN-RATE": "1.93%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ryze",
              "PICK-RATE": "2.23%",
              "WIN-RATE": "48.40%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Samira",
              "PICK-RATE": "6.47%",
              "WIN-RATE": "49.33%",
              "BAN-RATE": "15.27%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sejuani",
              "PICK-RATE": "4.37%",
              "WIN-RATE": "49.77%",
              "BAN-RATE": "1.17%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Senna",
              "PICK-RATE": "10.13%",
              "WIN-RATE": "51.10%",
              "BAN-RATE": "4.03%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Seraphine",
              "PICK-RATE": "5.03%",
              "WIN-RATE": "50.17%",
              "BAN-RATE": "0.97%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sett",
              "PICK-RATE": "6.30%",
              "WIN-RATE": "49.33%",
              "BAN-RATE": "2.87%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Shaco",
              "PICK-RATE": "6.90%",
              "WIN-RATE": "49.93%",
              "BAN-RATE": "18.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Shen",
              "PICK-RATE": "4.97%",
              "WIN-RATE": "51.30%",
              "BAN-RATE": "0.70%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Shyvana",
              "PICK-RATE": "2.07%",
              "WIN-RATE": "49.40%",
              "BAN-RATE": "0.43%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Singed",
              "PICK-RATE": "2.43%",
              "WIN-RATE": "52.10%",
              "BAN-RATE": "0.50%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sion",
              "PICK-RATE": "9.40%",
              "WIN-RATE": "50.93%",
              "BAN-RATE": "3.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sivir",
              "PICK-RATE": "4.47%",
              "WIN-RATE": "50.67%",
              "BAN-RATE": "0.90%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Skarner",
              "PICK-RATE": "1.00%",
              "WIN-RATE": "49.53%",
              "BAN-RATE": "0.17%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sona",
              "PICK-RATE": "2.60%",
              "WIN-RATE": "51.50%",
              "BAN-RATE": "0.17%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Soraka",
              "PICK-RATE": "4.33%",
              "WIN-RATE": "50.57%",
              "BAN-RATE": "1.23%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Swain",
              "PICK-RATE": "5.27%",
              "WIN-RATE": "50.07%",
              "BAN-RATE": "2.33%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Sylas",
              "PICK-RATE": "13.67%",
              "WIN-RATE": "49.33%",
              "BAN-RATE": "15.13%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Syndra",
              "PICK-RATE": "5.07%",
              "WIN-RATE": "49.50%",
              "BAN-RATE": "2.43%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Tahm Kench",
              "PICK-RATE": "3.20%",
              "WIN-RATE": "51.10%",
              "BAN-RATE": "6.97%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Taliyah",
              "PICK-RATE": "2.37%",
              "WIN-RATE": "49.53%",
              "BAN-RATE": "0.47%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Talon",
              "PICK-RATE": "5.10%",
              "WIN-RATE": "49.77%",
              "BAN-RATE": "2.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Taric",
              "PICK-RATE": "1.83%",
              "WIN-RATE": "51.87%",
              "BAN-RATE": "0.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Teemo",
              "PICK-RATE": "4.73%",
              "WIN-RATE": "51.10%",
              "BAN-RATE": "5.43%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Thresh",
              "PICK-RATE": "18.00%",
              "WIN-RATE": "49.80%",
              "BAN-RATE": "9.77%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Tristana",
              "PICK-RATE": "8.10%",
              "WIN-RATE": "50.47%",
              "BAN-RATE": "3.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Trundle",
              "PICK-RATE": "1.77%",
              "WIN-RATE": "49.53%",
              "BAN-RATE": "0.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Tryndamere",
              "PICK-RATE": "2.70%",
              "WIN-RATE": "50.47%",
              "BAN-RATE": "2.03%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Twisted Fate",
              "PICK-RATE": "2.77%",
              "WIN-RATE": "47.83%",
              "BAN-RATE": "0.20%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Twitch",
              "PICK-RATE": "6.93%",
              "WIN-RATE": "49.53%",
              "BAN-RATE": "6.67%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Udyr",
              "PICK-RATE": "3.53%",
              "WIN-RATE": "50.67%",
              "BAN-RATE": "4.93%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Urgot",
              "PICK-RATE": "2.63%",
              "WIN-RATE": "51.93%",
              "BAN-RATE": "0.83%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Varus",
              "PICK-RATE": "8.93%",
              "WIN-RATE": "49.20%",
              "BAN-RATE": "1.93%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vayne",
              "PICK-RATE": "8.13%",
              "WIN-RATE": "50.13%",
              "BAN-RATE": "5.13%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Veigar",
              "PICK-RATE": "8.40%",
              "WIN-RATE": "50.33%",
              "BAN-RATE": "8.47%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vel'Koz",
              "PICK-RATE": "3.00%",
              "WIN-RATE": "49.67%",
              "BAN-RATE": "0.53%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vex",
              "PICK-RATE": "4.13%",
              "WIN-RATE": "50.43%",
              "BAN-RATE": "4.63%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vi",
              "PICK-RATE": "7.03%",
              "WIN-RATE": "50.50%",
              "BAN-RATE": "4.13%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Viego",
              "PICK-RATE": "8.03%",
              "WIN-RATE": "49.37%",
              "BAN-RATE": "2.30%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Viktor",
              "PICK-RATE": "6.23%",
              "WIN-RATE": "49.93%",
              "BAN-RATE": "3.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Vladimir",
              "PICK-RATE": "6.03%",
              "WIN-RATE": "50.83%",
              "BAN-RATE": "6.13%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Volibear",
              "PICK-RATE": "3.17%",
              "WIN-RATE": "48.53%",
              "BAN-RATE": "0.73%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Warwick",
              "PICK-RATE": "5.43%",
              "WIN-RATE": "51.77%",
              "BAN-RATE": "4.33%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Wukong",
              "PICK-RATE": "6.90%",
              "WIN-RATE": "49.70%",
              "BAN-RATE": "6.67%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Xayah",
              "PICK-RATE": "14.80%",
              "WIN-RATE": "50.60%",
              "BAN-RATE": "17.10%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Xerath",
              "PICK-RATE": "5.23%",
              "WIN-RATE": "50.57%",
              "BAN-RATE": "4.07%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Xin Zhao",
              "PICK-RATE": "2.93%",
              "WIN-RATE": "51.03%",
              "BAN-RATE": "0.47%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Yasuo",
              "PICK-RATE": "12.77%",
              "WIN-RATE": "48.67%",
              "BAN-RATE": "17.47%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Yone",
              "PICK-RATE": "9.93%",
              "WIN-RATE": "48.30%",
              "BAN-RATE": "7.37%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Yorick",
              "PICK-RATE": "3.40%",
              "WIN-RATE": "49.53%",
              "BAN-RATE": "3.93%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Yuumi",
              "PICK-RATE": "7.77%",
              "WIN-RATE": "49.63%",
              "BAN-RATE": "18.07%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zac",
              "PICK-RATE": "5.17%",
              "WIN-RATE": "51.73%",
              "BAN-RATE": "4.83%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zed",
              "PICK-RATE": "10.63%",
              "WIN-RATE": "49.33%",
              "BAN-RATE": "31.60%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zeri",
              "PICK-RATE": "9.60%",
              "WIN-RATE": "49.40%",
              "BAN-RATE": "9.23%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Ziggs",
              "PICK-RATE": "2.43%",
              "WIN-RATE": "50.63%",
              "BAN-RATE": "0.23%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zilean",
              "PICK-RATE": "2.67%",
              "WIN-RATE": "50.70%",
              "BAN-RATE": "0.80%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zoe",
              "PICK-RATE": "3.30%",
              "WIN-RATE": "49.60%",
              "BAN-RATE": "2.40%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            },
            {
              "NAME": "Zyra",
              "PICK-RATE": "3.33%",
              "WIN-RATE": "49.77%",
              "BAN-RATE": "2.00%",
              "PORTRAIT": "//lolg-cdn.porofessor.gg/img/s/fond_sprite.png?v=5"
            }
          ]
    })
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });