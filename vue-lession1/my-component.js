// my-component.js
export default {
    data() {
      return { 
          message: "Hallo Leute" }
    },
    
    template: `
    <div>Dies ist eine html Seite</div>
    <div>Hier ist eine Nachricht: {{ message}}</div>
    `
}