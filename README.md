# code-snippet

Code Snippet ist ein tool um Code-Snippets zu speichern und zu verwalten.

### **Features**

- Snippets in verschiedenen Programmiersprachen speichern
- Nach Programmiersprache filtern
- Snippets durchsuchen
- Snippets bearbeiten und löschen
- Syntax-Highlighting für verschiedene Sprachen

### **Präre Anforderungen**

- [Bun](https://bun.sh/) installiert

### **Installation**

1. Repository klonen:
   `git clone https://github.com/jph-sw/code-snippet.git`

2. In das Verzeichnis wechseln:
   `cd code-snippet`

3. Abhängigkeiten installieren:
   `bun install`

4. Anwendung starten:
   `bun --bun run dev`

5. Im Browser öffnen:
   `http://localhost:3000`

## KI-Reflexions-Protokoll

### **UI/UX**

Das grobe design habe ich mithilfe von Gemini erstellen lassen. Dabei habe ich die Anforderungen und Features beschrieben und Gemini hat mir einen Vorschlag für die Struktur und die wichtigsten Komponenten gemacht.

### **Code**

Den groben Aufbau habe ich selber programmiert, z.B. die Komponentenstruktur und die Routen. Die Logik habe mithilfe von Claude Code generieren lassen. Dabei habe ich die Anforderungen und die Struktur beschrieben und Claude Code hat mir den entsprechenden Code generiert.

<details>

<summary>Hier ein paar prompts</summary>

> Write a Code Snippet Manager:
> Projekt 12: Code-Snippet Manager
> Ziel: Verwaltung für häufig genutzte Code-Schnipsel (Titel, Sprache, Code).
> Pflicht: Suchfunktion (Filter), um ein Snippet anhand des Titels schnell zu finden.
> Tech-Fokus: Listen-Filterung, CRUD (Create, Read), UI-Design.
> See the demo pages in [@demo](file:///home/jan/projects/code-snippet/src/routes/demo) . Use simple/sleek/professional design.

> Design a code snippet manager. Use a matrix style interface, no big navbar with logo. just usability. Use dark theme. Here are some guidelines:
> Projekt 12: Code-Snippet Manager
> Ziel: Verwaltung für häufig genutzte Code-Schnipsel (Titel, Sprache, Code).
> Pflicht: Suchfunktion (Filter), um ein Snippet anhand des Titels schnell zu finden.
> Tech-Fokus: Listen-Filterung, CRUD (Create, Read), UI-Design.\*

_Es folgten mehrere Iterationen, um das Design zu verfeinern._

</details>

Die Codequalität ist insgesamt sehr gut. Der Code ist sauber strukturiert und gut lesbar. Einige kleinere Anpassungen habe ich vorgenommen, z.B. zu viele Verwendungen von `useEffect` in React-Komponenten reduziert und stattdessen lokale Zustände verwendet.

Dieses Prompt habe ich zum Abschluss verwendet:

> The application is now complete. Please remove any unnecessary code, improve code quality where possible, and ensure consistency in coding style across the entire codebase. Focus on readability, maintainability, and performance optimizations. Provide the final cleaned-up code for the entire project. You are a senior typescript/react developer. Use bleeding edge practices.

### **Fazit**

Insgesamt bin ich sehr zufrieden mit dem Ergebnis. Die Anwendung erfüllt alle Anforderungen und bietet eine gute Benutzererfahrung. Die Nutzung von KI-Tools wie Gemini und Claude Code hat den Entwicklungsprozess erheblich beschleunigt und mir geholfen, qualitativ hochwertigen Code zu schreiben.
