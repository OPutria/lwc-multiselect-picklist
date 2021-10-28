import { LightningElement, api } from 'lwc';

const TEST_DATA = {
    label : 'Test Multiselect Picklist',
    values : [
        {
            value: 'Test1',
            label: 'Test1',
            selected : true
        },
        {
            value: 'Test2',
            label: 'Test2',
            selected : false
        },
        {
            value: 'Test3',
            label: 'Test3',
            selected : true
        },
    ]
}

export default class SmrMultiPicklist extends LightningElement {

    @api values = TEST_DATA.values;
    @api label = TEST_DATA.label;

    isShowDropdown = false;

    get selectedValues(){
        return this.values.filter(option => option.selected)
            .map(option => option.value);
    }

    get inputIcon(){
        return this.isShowDropdown ? 'utility:up' : 'utility:down';
    }

    handleShowDropdown(){
        this.isShowDropdown = !this.isShowDropdown;
    }

    onFieldSelect(){
        const picklistValues = this.template.querySelectorAll('c-picklist-value');
        this.values = Array.from(picklistValues).map(element => element.option);
        this.dispatchEvent(new CustomEvent("fieldchange", { detail: { fields: this.selectedValues} }));
    }

    get selectedMessage() {
        const selectedValues = this.selectedValues;
        if(!selectedValues || selectedValues.length === 0){
            return 'Please select value';
        }else if(selectedValues.length === 1){
            return selectedValues[0];
        }else{
            return selectedValues.length + ' values are selected';
        }
    }
}
