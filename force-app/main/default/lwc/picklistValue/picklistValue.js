import { LightningElement, track, api } from 'lwc';

export default class PicklistValue extends LightningElement {

    @track _option;

    @api
    set option(value){
        this._option = Object.assign({}, value);
    };
    get option(){
        return this._option;
    }

    get isSelected(){
        return this._option?.selected;
    }

    get value(){
        return this._option?.value;
    }

    get label(){
        return this._option?.label;
    }

    handleClick() {
        this._option.selected = !this._option.selected;
        this.dispatchEvent(new CustomEvent("fieldselect", { detail: {} }));
    }

}
