/*! StateRestore Bulma styling 2.0.0-dev for DataTables
 * Copyright (c) SpryMedia Ltd - datatables.net/license
 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net-bm', 'datatables.net-staterestore'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		// CommonJS
		var cjsRequires = function (root) {
			if (! root.DataTable) {
				require('datatables.net-bm')(root);
			}

			if (! window.DataTable.StateRestore) {
				require('datatables.net-staterestore')(root);
			}
		};

		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				cjsRequires(root);
				return factory(root, root.document, root.DataTable);
			};
		}
		else {
			cjsRequires(window);
			module.exports = factory(window, window.document, window.DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';

var Dom = DataTable.Dom;
var util = DataTable.util;

let bModal;
const StateRestore = DataTable.StateRestore;
const _modal = Dom.c('div')
    .classAdd('modal dtsr-modal')
    .append(Dom.c('div').classAdd('modal-background'))
    .append(Dom.c('div')
    .classAdd('modal-card')
    .append(Dom.c('header')
    .classAdd('modal-card-head')
    .append(Dom.c('p').classAdd('modal-card-title'))
    .append(Dom.c('button').classAdd('delete').attr({
    type: 'button',
    'aria-label': 'Close'
})))
    .append(Dom.c('section').classAdd('modal-card-body')));
/*
 * Bootstrap modal for StateRestore.
 */
StateRestore.modal = function (title, content, className, closeCb) {
    let background = _modal.find('div.modal-background');
    let header = _modal.find('header p');
    let body = _modal.find('section.modal-card-body');
    let close = _modal.find('button.delete');
    // Display the content
    header.text(title);
    body.append(content);
    _modal.classAdd(className);
    // Close event handler
    background.on('click.dtsr', () => {
        closeCb();
    });
    close.on('click.dtsr', () => {
        closeCb();
    });
    _modal.on('click.dtsr', e => {
        if (Dom.s(e.target).classHas('modal')) {
            closeCb();
        }
    });
    _modal.appendTo('body').classAdd('is-active');
};
StateRestore.modalClean = function () {
    let background = _modal.find('div.modal-background');
    let header = _modal.find('header p');
    let body = _modal.find('section.modal-card-body');
    let close = _modal.find('button.delete');
    header.text('');
    body.empty();
    _modal.classRemove(StateRestore.classes.modal.table);
    background.off('.dtsr');
    close.off('.dtsr');
    _modal.off('.dtsr');
};
StateRestore.modalClose = function () {
    _modal.detach().classRemove('is-active');
};
/*
 * Setup classes for integration
 */
util.object.assignDeep(StateRestore.classes, {
    field: {
        checkboxOption: 'dtsr-check',
        container: 'field',
        error: 'help has-text-danger',
        info: 'help',
        label: 'label',
        value: 'control',
        input: {
            checkbox: '',
            text: 'input'
        }
    },
    modal: {
        button: 'button is-primary is-pulled-right',
        table: 'dtsr-modal-lg'
    },
    table: {
        table: 'table is-striped is-hoverable',
        button: 'button is-small'
    }
});


return DataTable;
}));
