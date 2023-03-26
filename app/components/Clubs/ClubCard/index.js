import template from './clubCard.html';
import './clubCard.css'

export default {
    template,
    props: ['name', 'description'], // Props are gotten from the parent component.
};