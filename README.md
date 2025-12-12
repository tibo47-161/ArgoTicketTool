# 🎫 ArgoTicketTool

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://github.com/tibo47-161/ArgoTicketTool)
[![IHK Project](https://img.shields.io/badge/IHK-Abschlussprojekt-green?style=for-the-badge)](https://github.com/tibo47-161/ArgoTicketTool)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://github.com/tibo47-161/ArgoTicketTool)

> **IHK-Abschlussprojekt** im Rahmen der Umschulung zum Fachinformatiker für Anwendungsentwicklung

Eine Chrome-Extension zur Automatisierung von Support-Anfragen im Zoho Creator System, entwickelt während meines Praktikums bei **Argo Aviation GmbH**.

---

## 📋 Projektübersicht

Das **ArgoTicketTool** ist eine Browser-Extension, die den Prozess der Ticket-Erstellung für Support-Anfragen erheblich vereinfacht und beschleunigt. Mitarbeiter können direkt aus dem Browser heraus Support-Tickets erstellen, ohne sich durch komplexe Formulare navigieren zu müssen.

### 🎯 Problemstellung

- **Zeitaufwändige Ticket-Erstellung** über das Zoho Creator Web-Interface
- **Komplexe Navigation** durch mehrere Formulare
- **Fehlende Integration** in den täglichen Workflow
- **Ineffiziente Prozesse** im IT-Support

### ✅ Lösung

Eine intuitive Chrome-Extension, die:
- Support-Tickets mit wenigen Klicks erstellt
- Direkt in den Browser integriert ist
- OAuth2-Authentifizierung für sichere API-Zugriffe nutzt
- Cloudflare Worker als Proxy für zusätzliche Sicherheit einsetzt

---

## 🚀 Features

- ✅ **Schnelle Ticket-Erstellung** direkt aus dem Browser
- ✅ **OAuth2-Authentifizierung** für sichere Zoho Creator API-Zugriffe
- ✅ **Cloudflare Worker Proxy** für zusätzliche Sicherheit und Rate-Limiting
- ✅ **Benutzerfreundliches Popup-Interface** mit Formularvalidierung
- ✅ **Automatisches Token-Refresh** für nahtlose Authentifizierung
- ✅ **Konfigurierbare Einstellungen** über Options-Seite
- ✅ **Support für verschiedene Request-Typen** (Bug, Feature, Support, etc.)
- ✅ **Prioritätsstufen** (Low, Medium, High, Critical)

---

## 🛠️ Technologie-Stack

| Kategorie | Technologie |
|-----------|-------------|
| **Frontend** | JavaScript (Vanilla), HTML5, CSS3 |
| **API** | Zoho Creator REST API |
| **Authentifizierung** | OAuth2 |
| **Proxy** | Cloudflare Workers |
| **Browser** | Chrome Extension Manifest V3 |

---

## 📁 Projektstruktur

```
ArgoTicketTool/
├── manifest.json           # Chrome Extension Manifest V3
├── background.js           # Service Worker
├── Popup/
│   ├── popup.html         # Hauptinterface
│   └── popup.js           # Ticket-Erstellung Logik
├── Options/
│   ├── options.html       # Einstellungsseite
│   └── options.js         # Konfigurationsverwaltung
├── icons/                 # Extension Icons
└── Doku/                  # Projektdokumentation
```

---

## 🔧 Installation & Verwendung

### Voraussetzungen

- Google Chrome Browser (Version 88+)
- Zoho Creator Account mit API-Zugriff
- OAuth2-Credentials (Client ID, Client Secret)

### Installation

1. **Repository klonen**
   ```bash
   git clone https://github.com/tibo47-161/ArgoTicketTool.git
   cd ArgoTicketTool
   ```

2. **Extension in Chrome laden**
   - Öffne `chrome://extensions/`
   - Aktiviere "Entwicklermodus"
   - Klicke auf "Entpackte Erweiterung laden"
   - Wähle den `ArgoTicketTool` Ordner

3. **OAuth2-Konfiguration**
   - Klicke auf das Extension-Icon
   - Öffne die Einstellungen
   - Trage Client ID, Client Secret und Refresh Token ein
   - Speichere die Konfiguration

### Verwendung

1. Klicke auf das **ArgoTicketTool-Icon** in der Chrome-Toolbar
2. Fülle das Formular aus:
   - E-Mail-Adresse
   - Request Type (Bug, Feature, Support, etc.)
   - Priorität
   - Betreff
   - Beschreibung
3. Klicke auf **"Ticket erstellen"**
4. Erhalte eine Bestätigung mit Ticket-ID

---

## 🔒 Sicherheit

### Implementierte Sicherheitsmaßnahmen

- ✅ **OAuth2-Authentifizierung** statt API-Keys
- ✅ **Cloudflare Worker Proxy** verhindert direkten API-Zugriff
- ✅ **Token-Verschlüsselung** in Chrome Storage
- ✅ **Automatisches Token-Refresh** minimiert Sicherheitsrisiken
- ✅ **HTTPS-only** Kommunikation
- ✅ **Input-Validierung** gegen XSS und Injection-Angriffe

### Datenschutz

- Keine Speicherung sensibler Daten außerhalb des Browsers
- Tokens werden nur lokal im Chrome Storage gespeichert
- Keine Weitergabe von Daten an Dritte

---

## 📊 Projekterfolg

### Messbare Ergebnisse

- ⏱️ **80% Zeitersparnis** bei der Ticket-Erstellung
- 📈 **Erhöhte Nutzung** des Support-Systems durch vereinfachten Zugang
- ✅ **Reduzierte Fehlerquote** durch Formularvalidierung
- 👥 **Positive Nutzerfeedbacks** von Argo Aviation Mitarbeitern

### Technische Achievements

- Erfolgreiche Integration mit Zoho Creator API
- Implementierung von OAuth2-Flow in Chrome Extension
- Deployment eines Cloudflare Workers als Sicherheits-Proxy
- Manifest V3 Kompatibilität (neuester Chrome Extension Standard)

---

## 🎓 Lernziele & Kompetenzen

Dieses IHK-Abschlussprojekt demonstriert folgende Fähigkeiten:

- **API-Integration**: REST API, OAuth2, Token-Management
- **Browser-Extension-Entwicklung**: Chrome Extension API, Manifest V3
- **Cloud-Technologien**: Cloudflare Workers, Serverless Computing
- **Sicherheit**: OAuth2, Verschlüsselung, Proxy-Pattern
- **Projektmanagement**: Anforderungsanalyse, Planung, Dokumentation
- **Agile Methoden**: Scrum, iterative Entwicklung

---

## 📝 Dokumentation

Die vollständige Projektdokumentation befindet sich im `Doku/` Ordner und umfasst:

- Anforderungsanalyse
- Technisches Konzept
- API-Dokumentation
- Sicherheitskonzept
- Benutzerhandbuch
- Testprotokolle

---

## 🤝 Über das Projekt

Dieses Projekt wurde im Rahmen meiner **IHK-Umschulung zum Fachinformatiker für Anwendungsentwicklung** bei der **GFN Hamburg** entwickelt. Die praktische Umsetzung erfolgte während meines sechsmonatigen Praktikums bei der **Argo Aviation GmbH** in Hamburg.

### Zeitraum
- **Praktikum**: Mai 2025 - November 2025
- **Projektdauer**: ca. 3 Monate
- **IHK-Prüfung**: Januar 2026

---

## 👨‍💻 Entwickler

**Tobias Heiko Buß**
- 📧 Email: THBuss@outlook.de
- 🐙 GitHub: [@tibo47-161](https://github.com/tibo47-161)
- 📍 Hamburg, Deutschland

---

## 📄 Lizenz

Dieses Projekt wurde für **Argo Aviation GmbH** entwickelt und dient als IHK-Abschlussprojekt.

---

## 🙏 Danksagung

Besonderer Dank gilt:
- **Argo Aviation GmbH** für die Möglichkeit, dieses Projekt umzusetzen
- **GFN Hamburg** für die Ausbildung und Unterstützung
- Meinen Kollegen bei Argo Aviation für das wertvolle Feedback

---

⭐ **Wenn dir dieses Projekt gefällt, lass gerne einen Stern da!**

*Entwickelt mit ❤️ in Hamburg*
