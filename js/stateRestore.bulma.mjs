/*! Bootstrap integration for DataTables' StateRestore
 * © SpryMedia Ltd - datatables.net/license
 */

import jQuery from 'jquery';
import DataTable from 'datatables.net-bm';
import StateRestore from 'datatables.net-staterestore';

// Allow reassignment of the $ variable
let $ = jQuery;

$.extend(true, DataTable.StateRestoreCollection.classes, {
    checkRow: 'dtsr-check-row checkbox',
    creationButton: 'dtsr-creation-button button',
    creationForm: 'dtsr-creation-form modal-content',
    creationText: 'dtsr-creation-text modal-header',
    creationTitle: 'dtsr-creation-title modal-card-title',
    nameInput: 'dtsr-name-input input'
});
$.extend(true, DataTable.StateRestore.classes, {
    confirmationButton: 'dtsr-confirmation-button button',
    confirmationTitle: 'dtsr-confirmation-title modal-card-title',
    input: 'dtsr-input input'
});


export default DataTable;
