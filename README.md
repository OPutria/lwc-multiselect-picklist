# MultiSelect Picklist

Example:

[![Multiselect gif][1]][1]

How to use:

    <c-multi-picklist
        label={label}
        values={picklistValues}
        onfieldchange={onMultiselectFieldChange}>
    </c-multi-picklist>

Input:

    const picklistValues = [
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
    ];

Output:
    
    const selectedValues = ['Test1', 'Test3'];


[1]: https://github.com/OPutria/lwc-multiselect-picklist/blob/master/preview.gif



