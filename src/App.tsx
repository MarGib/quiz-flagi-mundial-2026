import { useState } from 'react';
import { Printer, RefreshCw, Eye, Trophy, Check, X, FileSpreadsheet, Info } from 'lucide-react';

export default function App() {
  // Lista 48 państw uczestniczących w Mundialu 2026 wraz z wektorowymi flagami SVG (proporcje 3:2)
  const countriesData = [
    // Strona 1 (Flagi 1-10)
    { id: 1, name: "Meksyk", group: "A", valid: ["meksyk"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="100" height="200" fill="#006847"/>
        <rect x="100" width="100" height="200" fill="#ffffff"/>
        <rect x="200" width="100" height="200" fill="#c8102e"/>
        <circle cx="150" cy="100" r="18" fill="#8b5a2b"/>
        <circle cx="150" cy="94" r="8" fill="#006847"/>
      </svg>
    )},
    { id: 2, name: "Korea Południowa", group: "A", valid: ["koreapoludniowa", "koreapld", "korea"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200" fill="#ffffff">
        <rect width="300" height="200" fill="#ffffff"/>
        <circle cx="150" cy="100" r="35" fill="#cd2e3a"/>
        <path d="M115,100 A17.5,17.5 0 0,0 150,100 A17.5,17.5 0 0,1 185,100" fill="#cd2e3a"/>
        <path d="M115,100 A17.5,17.5 0 0,1 150,100 A17.5,17.5 0 0,0 185,100" fill="#0047a0"/>
        {/* Simplified Trigrams */}
        <rect x="70" y="50" width="16" height="5" fill="#000" transform="rotate(33 70 50)"/>
        <rect x="70" y="60" width="16" height="5" fill="#000" transform="rotate(33 70 50)"/>
        <rect x="70" y="70" width="16" height="5" fill="#000" transform="rotate(33 70 50)"/>
        <rect x="210" y="130" width="16" height="5" fill="#000" transform="rotate(33 210 130)"/>
      </svg>
    )},
    { id: 3, name: "RPA", group: "A", valid: ["rpa", "republikapoludniowejafryki"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="65" fill="#e03c31"/>
        <rect y="135" width="300" height="65" fill="#001489"/>
        <polygon points="0,0 140,100 0,200" fill="#ffffff"/>
        <polygon points="0,12 120,100 0,188" fill="#f4c430"/>
        <polygon points="0,25 100,100 0,175" fill="#000000"/>
        <polygon points="120,65 300,65 300,135 120,135 170,100" fill="#007a4d"/>
        <rect x="120" y="65" width="180" height="70" fill="#007a4d"/>
      </svg>
    )},
    { id: 4, name: "Czechy", group: "A", valid: ["czechy", "republikaczeska"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="100" fill="#ffffff"/>
        <rect y="100" width="300" height="100" fill="#d7141a"/>
        <polygon points="0,0 150,100 0,200" fill="#11457e"/>
      </svg>
    )},
    { id: 5, name: "Kanada", group: "B", valid: ["kanada"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="75" height="200" fill="#da291c"/>
        <rect x="75" width="150" height="200" fill="#ffffff"/>
        <rect x="225" width="75" height="200" fill="#da291c"/>
        <polygon points="150,55 155,75 175,70 165,90 185,100 160,110 150,140 140,110 115,100 135,90 125,70 145,75" fill="#da291c"/>
      </svg>
    )},
    { id: 6, name: "Szwajcaria", group: "B", valid: ["szwajcaria"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#d52b1e"/>
        <rect x="135" y="45" width="30" height="110" fill="#ffffff"/>
        <rect x="95" y="85" width="110" height="30" fill="#ffffff"/>
      </svg>
    )},
    { id: 7, name: "Katar", group: "B", valid: ["katar"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#8a1538"/>
        <polygon points="0,0 70,0 90,11 70,22 90,33 70,44 90,55 70,66 90,77 70,88 90,100 70,111 90,122 70,133 90,144 70,155 90,166 70,177 90,188 70,200 0,200" fill="#ffffff"/>
      </svg>
    )},
    { id: 8, name: "Bośnia i Hercegowina", group: "B", valid: ["bosniaihercegowina", "bosnia"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#002395"/>
        <polygon points="85,0 235,0 235,200" fill="#fecb00"/>
        {/* Simplified row of stars */}
        <polygon points="100,15 103,23 111,23 105,28 107,36 100,31 93,36 95,28 89,23 97,23" fill="#ffffff"/>
        <polygon points="120,40 123,48 131,48 125,53 127,61 120,56 113,61 115,53 109,48 117,48" fill="#ffffff"/>
        <polygon points="140,65 143,73 151,73 145,78 147,86 140,81 133,86 135,78 129,73 137,73" fill="#ffffff"/>
        <polygon points="160,90 163,98 171,98 165,103 167,111 160,106 153,111 155,103 149,98 157,98" fill="#ffffff"/>
        <polygon points="180,115 183,123 191,123 185,128 187,136 180,131 173,136 175,128 169,123 177,123" fill="#ffffff"/>
      </svg>
    )},
    { id: 9, name: "Brazylia", group: "C", valid: ["brazylia"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#009739"/>
        <polygon points="150,15 285,100 150,185 15,100" fill="#ffdf00"/>
        <circle cx="150" cy="100" r="42" fill="#002776"/>
        <path d="M112,104 Q150,82 188,104" stroke="#ffffff" strokeWidth="3" fill="none"/>
      </svg>
    )},
    { id: 10, name: "Maroko", group: "C", valid: ["maroko"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#c1272d"/>
        <polygon points="150,60 162,96 198,96 169,118 180,154 150,132 120,154 131,118 102,96 138,96" fill="none" stroke="#006233" strokeWidth="5"/>
      </svg>
    )},

    // Strona 2 (Flagi 11-20)
    { id: 11, name: "Szkocja", group: "C", valid: ["szkocja"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#0065bf"/>
        <polygon points="0,0 25,0 300,180 300,200 275,200 0,20" fill="#ffffff"/>
        <polygon points="275,0 300,0 25,200 0,200 0,180 275,0" fill="#ffffff"/>
      </svg>
    )},
    { id: 12, name: "Haiti", group: "C", valid: ["haiti"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="100" fill="#00209f"/>
        <rect y="100" width="300" height="100" fill="#d30a1c"/>
        <rect x="120" y="80" width="60" height="40" fill="#ffffff"/>
        <circle cx="150" cy="100" r="10" fill="#007a4d"/>
        <rect x="148" y="85" width="4" height="20" fill="#8b5a2b"/>
      </svg>
    )},
    { id: 13, name: "USA", group: "D", valid: ["usa", "stanyzjednoczone", "stany"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="15.4" fill="#b22234"/>
        <rect y="15.4" width="300" height="15.4" fill="#ffffff"/>
        <rect y="30.8" width="300" height="15.4" fill="#b22234"/>
        <rect y="46.2" width="300" height="15.4" fill="#ffffff"/>
        <rect y="61.6" width="300" height="15.4" fill="#b22234"/>
        <rect y="77.0" width="300" height="15.4" fill="#ffffff"/>
        <rect y="92.4" width="300" height="15.4" fill="#b22234"/>
        <rect y="107.8" width="300" height="15.4" fill="#ffffff"/>
        <rect y="123.2" width="300" height="15.4" fill="#b22234"/>
        <rect y="138.6" width="300" height="15.4" fill="#ffffff"/>
        <rect y="154.0" width="300" height="15.4" fill="#b22234"/>
        <rect y="169.4" width="300" height="15.4" fill="#ffffff"/>
        <rect y="184.8" width="300" height="15.4" fill="#b22234"/>
        <rect width="130" height="108" fill="#3c3b6e"/>
        {/* Simplified stars */}
        <circle cx="20" cy="20" r="3" fill="#fff"/>
        <circle cx="50" cy="20" r="3" fill="#fff"/>
        <circle cx="80" cy="20" r="3" fill="#fff"/>
        <circle cx="110" cy="20" r="3" fill="#fff"/>
        <circle cx="35" cy="45" r="3" fill="#fff"/>
        <circle cx="65" cy="45" r="3" fill="#fff"/>
        <circle cx="95" cy="45" r="3" fill="#fff"/>
        <circle cx="20" cy="70" r="3" fill="#fff"/>
        <circle cx="50" cy="70" r="3" fill="#fff"/>
        <circle cx="80" cy="70" r="3" fill="#fff"/>
        <circle cx="110" cy="70" r="3" fill="#fff"/>
      </svg>
    )},
    { id: 14, name: "Australia", group: "D", valid: ["australia"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#00008b"/>
        {/* Union Jack canton */}
        <rect width="130" height="90" fill="#00209f"/>
        <rect x="55" width="20" height="90" fill="#ffffff"/>
        <rect y="35" width="130" height="20" fill="#ffffff"/>
        <rect x="60" width="10" height="90" fill="#b22234"/>
        <rect y="40" width="130" height="10" fill="#b22234"/>
        {/* Star */}
        <polygon points="65,115 68,125 78,125 70,131 73,141 65,135 57,141 60,131 52,125 62,125" fill="#ffffff"/>
        {/* Southern cross */}
        <circle cx="240" cy="45" r="6" fill="#ffffff"/>
        <circle cx="265" cy="85" r="6" fill="#ffffff"/>
        <circle cx="240" cy="130" r="6" fill="#ffffff"/>
        <circle cx="210" cy="85" r="6" fill="#ffffff"/>
      </svg>
    )},
    { id: 15, name: "Paragwaj", group: "D", valid: ["paragwaj"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="66" fill="#d52b1e"/>
        <rect y="66" width="300" height="68" fill="#ffffff"/>
        <rect y="134" width="300" height="66" fill="#0038a8"/>
        <circle cx="150" cy="100" r="16" fill="#fcd116"/>
        <circle cx="150" cy="100" r="12" fill="#0038a8"/>
      </svg>
    )},
    { id: 16, name: "Turcja", group: "D", valid: ["turcja"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#e30a17"/>
        <circle cx="120" cy="100" r="40" fill="#ffffff"/>
        <circle cx="132" cy="100" r="32" fill="#e30a17"/>
        <polygon points="162,85 166,97 178,97 169,105 172,117 162,110 152,117 155,105 146,97 158,97" fill="#ffffff"/>
      </svg>
    )},
    { id: 17, name: "Niemcy", group: "E", valid: ["niemcy"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="66" fill="#000000"/>
        <rect y="66" width="300" height="68" fill="#dd0000"/>
        <rect y="134" width="300" height="66" fill="#ffcc00"/>
      </svg>
    )},
    { id: 18, name: "Ekwador", group: "E", valid: ["ekwador"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="100" fill="#ffcc00"/>
        <rect y="100" width="300" height="50" fill="#0038a8"/>
        <rect y="150" width="300" height="50" fill="#ce1126"/>
        <ellipse cx="150" cy="125" rx="14" ry="18" fill="#8b5a2b"/>
        <ellipse cx="150" cy="125" rx="10" ry="12" fill="#00a6ef"/>
      </svg>
    )},
    { id: 19, name: "Wybrzeże Kości Słoniowej", group: "E", valid: ["wybrzezekoscisloniowej", "wks", "wybrzeze"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="100" height="200" fill="#f77f00"/>
        <rect x="100" width="100" height="200" fill="#ffffff"/>
        <rect x="200" width="100" height="200" fill="#009e60"/>
      </svg>
    )},
    { id: 20, name: "Curaçao", group: "E", valid: ["curacao"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#002b7f"/>
        <rect y="130" width="300" height="24" fill="#f9e814"/>
        {/* Two stars */}
        <polygon points="45,35 47,42 55,42 49,46 51,53 45,49 39,53 41,46 35,42 43,42" fill="#ffffff"/>
        <polygon points="75,60 77,67 85,67 79,71 81,78 75,74 69,78 71,71 65,67 73,67" fill="#ffffff"/>
      </svg>
    )},

    // Strona 3 (Flagi 21-30)
    { id: 21, name: "Holandia", group: "F", valid: ["holandia", "niderlandy"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="66" fill="#ae1c28"/>
        <rect y="66" width="300" height="68" fill="#ffffff"/>
        <rect y="134" width="300" height="66" fill="#21468b"/>
      </svg>
    )},
    { id: 22, name: "Japonia", group: "F", valid: ["japonia"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#ffffff"/>
        <circle cx="150" cy="100" r="55" fill="#bc002d"/>
      </svg>
    )},
    { id: 23, name: "Szwecja", group: "F", valid: ["szwecja"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#006aa7"/>
        <rect x="80" width="35" height="200" fill="#fecc00"/>
        <rect y="82" width="300" height="35" fill="#fecc00"/>
      </svg>
    )},
    { id: 24, name: "Tunezja", group: "F", valid: ["tunezja"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#e30a17"/>
        <circle cx="150" cy="100" r="45" fill="#ffffff"/>
        <circle cx="154" cy="100" r="32" fill="#e30a17"/>
        <circle cx="162" cy="100" r="24" fill="#ffffff"/>
        <polygon points="162,90 165,99 174,99 167,105 169,114 162,109 155,114 157,105 150,99 159,99" fill="#e30a17"/>
      </svg>
    )},
    { id: 25, name: "Belgia", group: "G", valid: ["belgia"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="100" height="200" fill="#000000"/>
        <rect x="100" width="100" height="200" fill="#fede00"/>
        <rect x="200" width="100" height="200" fill="#e30a17"/>
      </svg>
    )},
    { id: 26, name: "Egipt", group: "G", valid: ["egipt"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="66" fill="#ce1126"/>
        <rect y="66" width="300" height="68" fill="#ffffff"/>
        <rect y="134" width="300" height="66" fill="#000000"/>
        <polygon points="142,105 158,105 150,88" fill="#c5a059"/>
      </svg>
    )},
    { id: 27, name: "Iran", group: "G", valid: ["iran"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="66" fill="#239f40"/>
        <rect y="66" width="300" height="68" fill="#ffffff"/>
        <rect y="134" width="300" height="66" fill="#da251d"/>
        <circle cx="150" cy="100" r="14" fill="none" stroke="#da251d" strokeWidth="3"/>
        <line x1="150" y1="82" x2="150" y2="118" stroke="#da251d" strokeWidth="3"/>
      </svg>
    )},
    { id: 28, name: "Nowa Zelandia", group: "G", valid: ["nowazelandia"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#00008b"/>
        {/* Simplified Union Jack */}
        <rect width="110" height="70" fill="#00209f"/>
        <rect x="45" width="20" height="70" fill="#ffffff"/>
        <rect y="25" width="110" height="20" fill="#ffffff"/>
        <rect x="50" width="10" height="70" fill="#b22234"/>
        <rect y="30" width="110" height="10" fill="#b22234"/>
        {/* Red Stars with White Borders */}
        <polygon points="240,40 242,46 250,46 244,50 246,58 240,53 234,58 236,50 230,46 238,46" fill="#b22234" stroke="#ffffff" strokeWidth="2"/>
        <polygon points="265,80 267,86 275,86 269,90 271,98 265,93 259,98 261,90 255,86 263,86" fill="#b22234" stroke="#ffffff" strokeWidth="2"/>
        <polygon points="240,120 242,126 250,126 244,130 246,138 240,133 234,138 236,130 230,126 238,126" fill="#b22234" stroke="#ffffff" strokeWidth="2"/>
      </svg>
    )},
    { id: 29, name: "Hiszpania", group: "H", valid: ["hiszpania"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="50" fill="#c60b1e"/>
        <rect y="50" width="300" height="100" fill="#ffc400"/>
        <rect y="150" width="300" height="50" fill="#c60b1e"/>
        <rect x="60" y="80" width="20" height="35" fill="#c60b1e" rx="3"/>
        <circle cx="70" cy="72" r="6" fill="#b22234"/>
      </svg>
    )},
    { id: 30, name: "Urugwaj", group: "H", valid: ["urugwaj"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="22.2" fill="#ffffff"/>
        <rect y="22.2" width="300" height="22.2" fill="#0038a8"/>
        <rect y="44.4" width="300" height="22.2" fill="#ffffff"/>
        <rect y="66.6" width="300" height="22.2" fill="#0038a8"/>
        <rect y="88.8" width="300" height="22.2" fill="#ffffff"/>
        <rect y="111.0" width="300" height="22.2" fill="#0038a8"/>
        <rect y="133.2" width="300" height="22.2" fill="#ffffff"/>
        <rect y="155.4" width="300" height="22.2" fill="#0038a8"/>
        <rect y="177.6" width="300" height="22.4" fill="#ffffff"/>
        <rect width="110" height="90" fill="#ffffff"/>
        <circle cx="55" cy="45" r="16" fill="#fcd116"/>
        <circle cx="55" cy="45" r="6" fill="#b22234"/>
      </svg>
    )},

    // Strona 4 (Flagi 31-40)
    { id: 31, name: "Arabia Saudyjska", group: "H", valid: ["arabiasaudyjska", "arabia"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#006c35"/>
        <rect x="70" y="135" width="160" height="8" fill="#ffffff"/>
        <rect x="190" y="120" width="15" height="25" fill="#ffffff"/>
        <line x1="90" y1="90" x2="210" y2="90" stroke="#ffffff" strokeWidth="4"/>
      </svg>
    )},
    { id: 32, name: "Republika Zielonego Przylądka", group: "H", valid: ["republikazielonegoprzyladka", "zielonyprzyladek"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#0038a8"/>
        <rect y="110" width="300" height="12" fill="#ffffff"/>
        <rect y="122" width="300" height="12" fill="#ce1126"/>
        <rect y="134" width="300" height="12" fill="#ffffff"/>
        {/* Star circle */}
        <circle cx="90" cy="128" r="4" fill="#fcd116"/>
        <circle cx="110" cy="128" r="4" fill="#fcd116"/>
        <circle cx="130" cy="128" r="4" fill="#fcd116"/>
        <circle cx="100" cy="112" r="4" fill="#fcd116"/>
        <circle cx="120" cy="112" r="4" fill="#fcd116"/>
      </svg>
    )},
    { id: 33, name: "Francja", group: "I", valid: ["francja"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="100" height="200" fill="#002395"/>
        <rect x="100" width="100" height="200" fill="#ffffff"/>
        <rect x="200" width="100" height="200" fill="#ed2939"/>
      </svg>
    )},
    { id: 34, name: "Senegal", group: "I", valid: ["senegal"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="100" height="200" fill="#00853f"/>
        <rect x="100" width="100" height="200" fill="#fdef42"/>
        <rect x="200" width="100" height="200" fill="#e31b23"/>
        <polygon points="150,85 154,97 166,97 157,105 160,117 150,110 140,117 143,105 134,97 146,97" fill="#00853f"/>
      </svg>
    )},
    { id: 35, name: "Norwegia", group: "I", valid: ["norwegia"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#ef2b2d"/>
        <rect x="72" width="44" height="200" fill="#ffffff"/>
        <rect y="72" width="300" height="44" fill="#ffffff"/>
        <rect x="84" width="20" height="200" fill="#002868"/>
        <rect y="84" width="300" height="20" fill="#002868"/>
      </svg>
    )},
    { id: 36, name: "Irak", group: "I", valid: ["irak"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="66" fill="#ce1126"/>
        <rect y="66" width="300" height="68" fill="#ffffff"/>
        <rect y="134" width="300" height="66" fill="#000000"/>
        <circle cx="120" cy="100" r="5" fill="#007a4d"/>
        <circle cx="150" cy="100" r="5" fill="#007a4d"/>
        <circle cx="180" cy="100" r="5" fill="#007a4d"/>
      </svg>
    )},
    { id: 37, name: "Argentyna", group: "J", valid: ["argentyna"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="66" fill="#74acdf"/>
        <rect y="66" width="300" height="68" fill="#ffffff"/>
        <rect y="134" width="300" height="66" fill="#74acdf"/>
        <circle cx="150" cy="100" r="16" fill="#fcd116"/>
        <circle cx="150" cy="100" r="6" fill="#8b5a2b"/>
      </svg>
    )},
    { id: 38, name: "Algieria", group: "J", valid: ["algieria"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="150" height="200" fill="#006233"/>
        <rect x="150" width="150" height="200" fill="#ffffff"/>
        <circle cx="150" cy="100" r="35" fill="#d52b1e"/>
        <circle cx="164" cy="100" r="27" fill="#ffffff"/>
        <polygon points="166,92 168,100 176,100 170,105 172,113 166,108 160,113 162,105 156,100 164,100" fill="#d52b1e"/>
      </svg>
    )},
    { id: 39, name: "Austria", group: "J", valid: ["austria"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="66" fill="#ed2939"/>
        <rect y="66" width="300" height="68" fill="#ffffff"/>
        <rect y="134" width="300" height="66" fill="#ed2939"/>
      </svg>
    )},
    { id: 40, name: "Jordania", group: "J", valid: ["jordania"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="66" fill="#000000"/>
        <rect y="66" width="300" height="68" fill="#ffffff"/>
        <rect y="134" width="300" height="66" fill="#138808"/>
        <polygon points="0,0 130,100 0,200" fill="#ce1126"/>
        <polygon points="45,90 47,97 55,97 49,101 51,109 45,104 39,109 41,101 35,97 43,97" fill="#ffffff"/>
      </svg>
    )},

    // Strona 5 (Flagi 41-48 - Tutaj jest Twoja ostatnia flaga: Panama!)
    { id: 41, name: "Portugalia", group: "K", valid: ["portugalia"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="120" height="200" fill="#006600"/>
        <rect x="120" width="180" height="200" fill="#ff0000"/>
        <circle cx="120" cy="100" r="22" fill="#fcd116"/>
        <rect x="112" y="90" width="16" height="20" fill="#ffffff" rx="2"/>
        <rect x="115" y="93" width="10" height="14" fill="#00209f"/>
      </svg>
    )},
    { id: 42, name: "Kolumbia", group: "K", valid: ["kolumbia"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="100" fill="#fcd116"/>
        <rect y="100" width="300" height="50" fill="#003893"/>
        <rect y="150" width="300" height="50" fill="#ce1126"/>
      </svg>
    )},
    { id: 43, name: "Uzbekistan", group: "K", valid: ["uzbekistan"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="58" fill="#00a6ef"/>
        <rect y="58" width="300" height="4" fill="#ce1126"/>
        <rect y="62" width="300" height="76" fill="#ffffff"/>
        <rect y="138" width="300" height="4" fill="#ce1126"/>
        <rect y="142" width="300" height="58" fill="#1c9c49"/>
        <circle cx="45" cy="30" r="12" fill="#ffffff"/>
        <circle cx="51" cy="30" r="10" fill="#00a6ef"/>
      </svg>
    )},
    { id: 44, name: "DR Konga", group: "K", valid: ["drkonga", "kongo", "demokratycznarepublikakonga"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#007fff"/>
        <polygon points="0,165 245,0 300,0 300,35 55,200 0,200" fill="#fcd116"/>
        <polygon points="0,175 260,0 285,0 25,200" fill="#ce1126"/>
        <polygon points="50,30 53,42 65,42 56,50 59,62 50,55 41,62 44,50 35,42 47,42" fill="#fcd116"/>
      </svg>
    )},
    { id: 45, name: "Anglia", group: "L", valid: ["anglia"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="#ffffff"/>
        <rect x="135" width="30" height="200" fill="#ce1126"/>
        <rect y="85" width="300" height="30" fill="#ce1126"/>
      </svg>
    )},
    { id: 46, name: "Chorwacja", group: "L", valid: ["chorwacja"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="66" fill="#ff0000"/>
        <rect y="66" width="300" height="68" fill="#ffffff"/>
        <rect y="134" width="300" height="66" fill="#0000cc"/>
        <rect x="136" y="52" width="28" height="30" fill="#ff0000"/>
        <rect x="140" y="56" width="10" height="10" fill="#ffffff"/>
        <rect x="150" y="66" width="10" height="10" fill="#ffffff"/>
      </svg>
    )},
    { id: 47, name: "Ghana", group: "L", valid: ["ghana"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="300" height="66" fill="#ce1126"/>
        <rect y="66" width="300" height="68" fill="#fcd116"/>
        <rect y="134" width="300" height="66" fill="#006b3f"/>
        <polygon points="150,82 154,94 166,94 157,102 160,114 150,107 140,114 143,102 134,94 146,94" fill="#000000"/>
      </svg>
    )},
    { id: 48, name: "Panama", group: "L", valid: ["panama"], svg: (
      <svg className="w-full h-full border border-gray-200" viewBox="0 0 300 200">
        <rect width="150" height="100" fill="#ffffff"/>
        <rect x="150" width="150" height="100" fill="#da291c"/>
        <rect y="100" width="150" height="100" fill="#001489"/>
        <rect x="150" y="100" width="150" height="100" fill="#ffffff"/>
        <polygon points="75,35 78,45 88,45 80,51 83,61 75,55 67,61 70,51 62,45 72,45" fill="#001489"/>
        <polygon points="225,135 228,145 238,145 230,151 233,161 225,155 217,161 220,151 212,145 222,145" fill="#da291c"/>
      </svg>
    )}
  ];

  // Stan odpowiedzi
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [printWithAnswers, setPrintWithAnswers] = useState(false);

  // Normalizacja tekstu do sprawdzania (bez polskich znaków, małe litery, bez spacji)
  const normalize = (text: string) => {
    if (!text) return '';
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ł/g, "l")
      .replace(/[^a-z0-9]/g, "")
      .trim();
  };

  const handleAnswerChange = (id: number, val: string) => {
    setAnswers(prev => ({ ...prev, [id]: val }));
  };

  // Obliczenie wyniku gry online
  const getScore = () => {
    let score = 0;
    countriesData.forEach(item => {
      const userAnswer = normalize(answers[item.id]);
      if (item.valid.includes(userAnswer)) {
        score++;
      }
    });
    return score;
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
  };

  const handleRevealAll = () => {
    const revealed: Record<number, string> = {};
    countriesData.forEach(item => {
      revealed[item.id] = item.name;
    });
    setAnswers(revealed);
    setShowResults(true);
  };

  const triggerPrint = (withAnswers: boolean) => {
    setPrintWithAnswers(withAnswers);
    setTimeout(() => {
      window.print();
    }, 150);
  };

  // Podział na podstrony do druku (po 10 elementów)
  const chunkedPages = [];
  for (let i = 0; i < countriesData.length; i += 10) {
    chunkedPages.push(countriesData.slice(i, i + 10));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans text-gray-800 antialiased selection:bg-green-100">
      
      {/* NAGŁÓWEK INTERAKTYWNY (Znika podczas drukowania) */}
      <header className="no-print sticky top-0 z-50 bg-[#107c41] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-lg text-[#107c41]">
              <FileSpreadsheet className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Mundial 2026: Quiz Flag w Excelu</h1>
              <p className="text-xs text-green-100">Wydrukuj idealny szablon A4 lub zagraj na żywo!</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            {/* Przycisk sprawdzania wyniku */}
            <button
              onClick={() => setShowResults(!showResults)}
              className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded shadow text-sm transition flex items-center gap-2"
            >
              <Trophy className="h-4 w-4" />
              {showResults ? "Ukryj wyniki" : "Sprawdź wyniki"}
            </button>

            {/* Odkryj wszystko */}
            <button
              onClick={handleRevealAll}
              className="bg-green-700 hover:bg-green-600 border border-green-500 text-white font-medium px-3 py-2 rounded text-sm transition flex items-center gap-2"
            >
              <Eye className="h-4 w-4" />
              Odkryj odpowiedzi
            </button>

            {/* Reset */}
            <button
              onClick={handleReset}
              className="bg-red-600 hover:bg-red-500 text-white font-medium px-3 py-2 rounded text-sm transition flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Resetuj
            </button>
          </div>

        </div>

        {/* DOLNY PASEK Z SZYBKIM DRUKOWANIEM */}
        <div className="bg-[#0e6c38] border-t border-green-800 px-4 py-2">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-xs text-green-100 flex items-center gap-1.5">
              <Info className="h-4 w-4 text-yellow-300" />
              <span>Układ jest w pełni zoptymalizowany pod kątem formatu A4 (10 flag na stronę).</span>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => triggerPrint(false)}
                className="bg-white text-gray-800 hover:bg-gray-100 font-semibold px-3 py-1.5 rounded text-xs shadow transition flex items-center gap-1.5"
              >
                <Printer className="h-3.5 w-3.5 text-[#107c41]" />
                Drukuj Czysty Quiz (PDF)
              </button>
              <button
                onClick={() => triggerPrint(true)}
                className="bg-[#107c41] hover:bg-green-600 text-white border border-green-400 font-semibold px-3 py-1.5 rounded text-xs shadow transition flex items-center gap-1.5"
              >
                <Printer className="h-3.5 w-3.5 text-white" />
                Drukuj Moje Odpowiedzi
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* STATYSTYKI GRY NA ŻYWO (Znika podczas drukowania) */}
      {showResults && (
        <div className="no-print bg-white border-b border-gray-200 py-4 px-4 shadow-inner">
          <div className="max-w-xl mx-auto text-center">
            <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Twój Wynik Gry Online</span>
            <div className="text-4xl font-extrabold text-[#107c41] mt-1">
              {getScore()} / 48
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Odgadłeś {Math.round((getScore() / 48) * 100)}% reprezentacji grających na Mistrzostwach Świata 2026.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3 overflow-hidden">
              <div 
                className="bg-green-600 h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${(getScore() / 48) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* GŁÓWNY OBSZAR PODGLĄDU STRON (W stylu widoku podglądu wydruku Excela) */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-0 md:p-8 space-y-12">
        
        {/* Pętla renderująca poszczególne kartki A4 */}
        {chunkedPages.map((pageItems, pageIdx) => (
          <div 
            key={pageIdx} 
            className="print-page bg-white shadow-xl md:rounded-lg border border-gray-200 overflow-hidden mx-auto flex flex-col justify-between"
            style={{
              width: '210mm',
              height: '297mm',
              padding: '12mm 15mm',
              boxSizing: 'border-box'
            }}
          >
            <div className="flex-grow flex flex-col">
              {/* Nagłówek każdej strony (wygląda jak w Excelu) */}
              <div className="flex justify-between items-end border-b-2 border-[#107c41] pb-3 mb-4">
                <div>
                  <span className="text-xs font-bold text-[#107c41] tracking-wider uppercase">MUNDIAL 2026</span>
                  <h2 className="text-lg font-extrabold text-gray-900 flex items-center gap-2">
                    <span>📊 Quiz: Flagi Mundialu 2026</span>
                    <span className="text-xs bg-gray-200 px-2 py-0.5 rounded text-gray-600 font-medium no-print">Arkusz {pageIdx + 1} z 5</span>
                  </h2>
                </div>
                <div className="text-right text-xs text-gray-500">
                  <span>Strona {pageIdx + 1} z 6</span>
                </div>
              </div>

              {/* Dane ucznia / uczestnika quizu na pierwszej stronie */}
              {pageIdx === 0 && (
                <div className="grid grid-cols-2 gap-4 mb-5 p-3 bg-gray-50 border border-gray-200 rounded text-xs">
                  <div>
                    <label className="block text-gray-500 font-semibold uppercase mb-1">Imię i nazwisko:</label>
                    <div className="border-b border-gray-400 h-6"></div>
                  </div>
                  <div>
                    <label className="block text-gray-500 font-semibold uppercase mb-1">Wynik końcowy:</label>
                    <div className="border-b border-gray-400 h-6 text-right font-bold text-lg text-gray-700 pr-4">/ 48 pkt</div>
                  </div>
                </div>
              )}

              {/* TABELA STYLIZOWANA NA EXCEL (10 Wierszy) */}
              <div className="w-full overflow-hidden border border-[#cbd5e0]">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#f3f3f3] text-gray-600 text-xs font-semibold">
                      <th className="border border-gray-300 w-10 py-1 text-center font-mono text-[10px] select-none bg-gray-200 text-gray-500"></th>
                      <th className="border border-gray-300 px-3 py-1 text-center w-16">A (Nr)</th>
                      <th className="border border-gray-300 px-3 py-1 text-center w-36">B (Flaga Kraju)</th>
                      <th className="border border-gray-300 px-4 py-1 text-left">C (Nazwa Państwa)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pageItems.map((item, idx) => {
                      // Sprawdzanie poprawności odpowiedzi
                      const userAnswer = normalize(answers[item.id]);
                      const isCorrect = item.valid.includes(userAnswer);
                      
                      let cellBg = "bg-white";
                      if (showResults && answers[item.id]) {
                        cellBg = isCorrect ? "bg-green-50" : "bg-red-50";
                      }

                      return (
                        <tr key={item.id} className="hover:bg-gray-50 transition-colors" style={{ height: '72px' }}>
                          {/* Numery wierszy w Excelu */}
                          <td className="border border-gray-300 bg-[#f3f3f3] text-center font-mono text-[11px] font-bold text-gray-500 select-none">
                            {idx + 1}
                          </td>

                          {/* Kolumna A: Indeks flagi */}
                          <td className="border border-gray-300 text-center font-bold text-gray-700 font-mono">
                            #{item.id}
                          </td>

                          {/* Kolumna B: Wektorowa Flaga */}
                          <td className="border border-gray-300 p-1.5 align-middle text-center bg-gray-50">
                            <div className="shadow-md rounded overflow-hidden inline-block transform hover:scale-105 transition-transform duration-150" style={{ width: '80px', height: '53.3px' }}>
                              {item.svg}
                            </div>
                          </td>

                          {/* Kolumna C: Wpis odpowiedzi */}
                          <td className={`border border-gray-300 px-4 align-middle ${cellBg}`}>
                            {/* Tryb interaktywny / wpisywanie (no-print) */}
                            <div className="no-print flex items-center justify-between gap-2 h-full w-full">
                              <input
                                type="text"
                                value={answers[item.id] || ''}
                                onChange={(e) => handleAnswerChange(item.id, e.target.value)}
                                placeholder="Wpisz nazwę państwa..."
                                className={`w-full py-2 px-3 border rounded text-sm focus:outline-none focus:ring-2 transition-all ${
                                  showResults 
                                    ? (isCorrect ? "border-green-400 focus:ring-green-300" : "border-red-400 focus:ring-red-300")
                                    : "border-gray-300 focus:border-[#107c41] focus:ring-green-100"
                                }`}
                              />
                              {showResults && (
                                <div className="flex-shrink-0">
                                  {isCorrect ? (
                                    <span className="flex items-center justify-center w-6 h-6 bg-green-500 text-white rounded-full">
                                      <Check className="h-4 w-4" />
                                    </span>
                                  ) : (
                                    <span className="flex items-center justify-center w-6 h-6 bg-red-500 text-white rounded-full">
                                      <X className="h-4 w-4" />
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Tryb do wydruku (print-only) */}
                            <div className="print-only w-full">
                              <div className="flex items-center w-full py-1">
                                <span className="text-gray-400 font-sans text-xs uppercase tracking-wider mr-2 select-none whitespace-nowrap">
                                  Państwo:
                                </span>
                                {printWithAnswers && answers[item.id] ? (
                                  <div className="flex-1 border-b border-dashed border-gray-400 text-sm font-bold text-gray-800 px-2 pb-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                                    {answers[item.id]}
                                  </div>
                                ) : (
                                  <div className="flex-1 border-b border-dotted border-gray-400 h-5 mb-1"></div>
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}

                    {/* Uzupełnienie do 10 wierszy na 5. stronie (ponieważ są tylko 8 flag) */}
                    {pageIdx === 4 && (
                      <>
                        <tr className="bg-gray-50 text-gray-400" style={{ height: '72px' }}>
                          <td className="border border-gray-300 bg-[#f3f3f3] text-center font-mono text-[11px] font-bold text-gray-500">9</td>
                          <td className="border border-gray-300 text-center font-mono">-</td>
                          <td className="border border-gray-300 p-2 text-center text-xs italic bg-gray-100 select-none">KOMÓRKA PUSTA</td>
                          <td className="border border-gray-300 px-4 align-middle bg-gray-50 select-none">
                            <div className="flex items-center w-full py-1">
                              <span className="text-gray-400 font-sans text-xs uppercase tracking-wider mr-2 select-none whitespace-nowrap">
                                Notatki:
                              </span>
                              <div className="flex-1 border-b border-dotted border-gray-300 h-5 mb-1"></div>
                            </div>
                          </td>
                        </tr>
                        <tr className="bg-gray-50 text-gray-400" style={{ height: '72px' }}>
                          <td className="border border-gray-300 bg-[#f3f3f3] text-center font-mono text-[11px] font-bold text-gray-500">10</td>
                          <td className="border border-gray-300 text-center font-mono">-</td>
                          <td className="border border-gray-300 p-2 text-center text-xs italic bg-gray-100 select-none">KOMÓRKA PUSTA</td>
                          <td className="border border-gray-300 px-4 align-middle bg-gray-50 select-none">
                            <div className="flex items-center w-full py-1">
                              <span className="text-gray-400 font-sans text-xs uppercase tracking-wider mr-2 select-none whitespace-nowrap">
                                Notatki:
                              </span>
                              <div className="flex-1 border-b border-dotted border-gray-300 h-5 mb-1"></div>
                            </div>
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Informacja na dole arkusza */}
            <div className="mt-auto pt-2 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 w-full">
              <span>Mundial 2026 - Oficjalny zestaw flag (Grupy A-L)</span>
              <span>Strona {pageIdx + 1} z 6</span>
            </div>
          </div>
        ))}

        {/* STRONA 6: KLUCZ ODPOWIEDZI (Automatycznie drukuje się jako osobna, ostatnia strona) */}
        <div 
          className="print-page bg-white shadow-xl md:rounded-lg border border-gray-200 overflow-hidden mx-auto flex flex-col justify-between"
          style={{
            width: '210mm',
            height: '297mm',
            padding: '12mm 15mm',
            boxSizing: 'border-box'
          }}
        >
          <div className="flex-grow flex flex-col">
            {/* Nagłówek Klucza */}
            <div className="flex justify-between items-end border-b-2 border-red-600 pb-3 mb-4">
              <div>
                <span className="text-xs font-bold text-red-600 tracking-wider uppercase">OFICJALNY KLUCZ ODPOWIEDZI</span>
                <h2 className="text-lg font-extrabold text-gray-900 flex items-center gap-2">
                  <span>🔑 Klucz Odpowiedzi: Wszystkie 48 Krajów</span>
                </h2>
              </div>
              <div className="text-right text-xs text-gray-500">
                <span>Strona 6 z 6</span>
              </div>
            </div>

            <div className="mb-4 bg-red-50 border border-red-200 p-3 rounded text-xs text-red-800">
              <strong>Instrukcja sprawdzania:</strong> Poniższa tabela zawiera spis wszystkich 48 reprezentacji w kolejności ich występowania w quizie. Sprawdź odpowiedzi uczestników z podanymi poniżej.
            </div>

            {/* Tabela klucza (podział na 3 zwięzłe kolumny po 16 pozycji, aby wszystko idealnie zmieściło się na 1 stronie!) */}
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map(colIdx => (
                <div key={colIdx} className="border border-gray-300 rounded overflow-hidden">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-gray-100 border-b border-gray-300">
                        <th className="px-2 py-1.5 text-center font-bold text-gray-500 w-10">Nr</th>
                        <th className="px-2 py-1.5 text-left font-bold text-gray-700">Państwo</th>
                        <th className="px-1 py-1.5 text-center font-bold text-gray-500 w-10">Gr.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {countriesData.slice(colIdx * 16, (colIdx + 1) * 16).map(item => (
                        <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-2 py-1 text-center font-mono font-bold bg-gray-50 text-gray-600 border-r border-gray-200">
                            #{item.id}
                          </td>
                          <td className="px-2 py-1 font-bold text-gray-900">
                            {item.name}
                          </td>
                          <td className="px-1 py-1 text-center font-mono text-gray-500">
                            {item.group}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>

            {/* Ciekawostka o formacie turnieju */}
            <div className="mt-5 p-4 bg-gray-50 border border-gray-200 rounded text-[11px] text-gray-500 leading-relaxed">
              <strong>O formacie Mundialu 2026:</strong> Mistrzostwa Świata 2026 to historyczny, pierwszy turniej rozegrany z udziałem aż 48 reprezentacji narodowych (podział na 12 grup po 4 zespoły). Turniej odbędzie się w trzech krajach gospodarzach: Kanadzie, Meksyku oraz USA. Wszystkie 48 krajów umieszczonych w niniejszym quizie to zestawienie reprezentacji występujących w fazie grupowej.
            </div>
          </div>

          {/* Stopka klucza */}
          <div className="mt-auto pt-2 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 w-full">
            <span>Mundial 2026 - Oficjalny zestaw flag (Grupy A-L)</span>
            <span>Strona 6 z 6</span>
          </div>

        </div>

      </main>

      {/* STYLE CSS SPECJALNIE DLA DRUKOWANIA A4 (CSS Page Media) */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          /* Ukryj cały interaktywny interfejs */
          body, html {
            background: #ffffff !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 210mm !important;
            height: 297mm !important;
          }
          .no-print {
            display: none !important;
          }
          .print-only {
            display: block !important;
          }
          /* Każda strona druku musi mieć dokładnie wymiary A4 i wymuszać podział */
          .print-page {
            width: 210mm !important;
            height: 297mm !important;
            min-height: 297mm !important;
            margin: 0 !important;
            padding: 12mm 15mm !important;
            box-shadow: none !important;
            border: none !important;
            page-break-after: always !important;
            page-break-inside: avoid !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            box-sizing: border-box !important;
            background: #ffffff !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          /* Zabezpieczenie przed ucinaniem tabeli */
          table {
            page-break-inside: avoid !important;
          }
          tr {
            page-break-inside: avoid !important;
            page-break-after: auto !important;
          }
        }

        /* Styl dla trybu interaktywnego (na ekranie) */
        @media screen {
          .print-only {
            display: none !important;
          }
          .print-page {
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            box-sizing: border-box !important;
            margin-top: 2rem;
            margin-bottom: 2rem;
            border-radius: 8px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          }
        }
      `}} />

    </div>
  );
}