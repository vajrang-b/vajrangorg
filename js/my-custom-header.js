class MyCustomHeader extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Load the template from an external file
      fetch('../html/header-template.html')
        .then(response => response.text())
        .then(template => {
          shadow.innerHTML = template;
        });
    }
  }
  
  customElements.define('my-custom-header', MyCustomHeader);
  
// class MyCustomHeader extends HTMLElement {
//   constructor() {
//      super();
//      const shadow = this.attachShadow({ mode: 'open' });
//     //  this.attachShadow({ mode: 'open' });
//      fetch('./html/header-template.html')
//         .then(response => response.text())
//         .then(template => {
//           //shadow.innerHTML = template;
//           this.shadowRoot.appendChild(document.getElementById('my-header-template').content.cloneNode(true));
//         });
//   }
// }

// customElements.define('my-custom-header', MyCustomHeader);
