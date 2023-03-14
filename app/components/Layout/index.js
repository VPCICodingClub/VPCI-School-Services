import template from './layout.html'; // The template is needed for the component.
import PageHeader from '../Header'; // Any components use the current component must be imported like this.
// Import the header as PageHeader since components in Vue use a different variable naming style.
// In the html template this will be the <page-header> tag. If you import this as Header it will
// conflict with the other header tag.

// Components are objects with at least a template attribute.
export default {
    template, // Shorthand for `template: template,` btw.
    components: { // Add any components used in this component here.
        PageHeader,
    }
};
