class MyCustomFooter extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Load the template from an external file
      fetch('./html/footer-template.html')
        .then(response => response.text())
        .then(template => {
          shadow.innerHTML = template;
        });
    }
  }
  
  customElements.define('my-custom-footer', MyCustomFooter);
  