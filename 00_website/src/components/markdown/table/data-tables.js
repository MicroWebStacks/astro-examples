import 'datatables.net-dt/css/jquery.dataTables.css'
import DataTable from 'datatables.net-dt';

function checkEntries(table, tableElement) {
    const info = table.page.info();
    if (info.recordsTotal < 10) {
        tableElement.parentElement.querySelector('.dataTables_length').style.display = 'none';
        tableElement.parentElement.querySelector('.dataTables_info').style.display = 'none';
        tableElement.parentElement.querySelector('.dataTables_paginate').style.display = 'none';
    }
    if (info.recordsTotal < 5) {
        tableElement.parentElement.querySelector('.dataTables_filter').style.display = 'none';
    }
}

function init(){
    const containers_els = document.querySelectorAll(".data-table")
    if(containers_els.length === 0){//prevent irrelvant page execution
      return
    }
    containers_els.forEach(table_element => {
        const data_table_text = table_element.getAttribute("data-table")
        const data_table = JSON.parse(data_table_text)

        const table = new DataTable(table_element);
        table.rows.add(data_table).draw();
        checkEntries(table, table_element);
    })
  }
  
document.addEventListener('DOMContentLoaded', init, false);
