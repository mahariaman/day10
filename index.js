let database = []

const funInputData=()=>{
    let inputNama = document.getElementById("nameInput").value
    let inputHarga = document.getElementById("priceInput").value
    let inputKategori = document.getElementById("categoryInput").value
    let inputStok = document.getElementById("stockInput").value

    let obj={inputHarga,inputNama,inputKategori,inputStok}
    database.push(obj)
    tampilkanData()
}

const tampilkanData = () => {
    var output = database.map((val, index) => {
        return (
            `<tr>
                <td>${index+1}</td>
                <td>${val.inputKategori}</td>
                <td>${val.inputNama}</td>
                <td>${val.inputHarga}</td>
                <td>${val.inputStok}</td>
            </tr>`
        )
    })
    document.getElementById('render').innerHTML = output.join('')
}

const funFilterName=()=>{
    let inputNama,table, filter,td,tr,txtValue
    
    inputNama = document.getElementById("keyword")
    filter = inputNama.value.toUpperCase()
    table = document.getElementById("myTable")
    tr = table.getElementsByTagName("tr")
    
    for(i=0; i < tr.length;i++){
        td= tr[i].getElementsByTagName("td")[2]
        if(td){
            txtValue = td.textContent || td.innerText
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display= ""
            }else{
                tr[i].style.display = "none"
            }
        }
    }

}
const funFilterPrice = () => {
    let inputHarga1,inputHarga2, table, filter1,filter2, td, tr, priceValue

    inputHarga1 = document.getElementById("min")
    inputHarga2 = document.getElementById("max")
    filter1 = inputHarga1.value
    filter2 = inputHarga2.value
    table = document.getElementById("myTable")
    tr = table.getElementsByTagName("tr")

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3]
        if (td) {
            priceValue = td.textContent || td.innerText
            if (filter1 <= priceValue || priceValue <= filter2) {
                tr[i].style.display = ""
            } else {
                tr[i].style.display = "none"
            }
        }
    }
}
const funFilterCategory = () => {
    let inputKategoriFilter, table, filter, td, tr, optValue

    inputKategoriFilter = document.getElementById("categoryFilter")
    filter = inputKategoriFilter.value
    table = document.getElementById("myTable")
    tr = table.getElementsByTagName("tr")

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1]
        if (td) {
            optValue = td.textContent || td.innerText
            if (optValue.indexOf(filter) > -1) {
                tr[i].style.display = ""
            } else {
                tr[i].style.display = "none"
            }
        }
    }
}