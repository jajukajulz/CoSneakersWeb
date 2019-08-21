<!--MDBootstrap Datatables initialisation-->
$(document).ready(function () {
    fetch("/db/my_sneakers.json")
    .then(response => response.json())
    .then(function(sneakerJsonArray) {
        //console.log(sneakerJsonArray);

        var sneakerArray = sneakerJsonArray;
        //console.log("sneakerArray.length " + sneakerArray.length);

        var tableRowCount = $('#dtSneakersTable tr').length;
        //console.log("tableRowCount " + tableRowCount );

        var dtSneakersTableRef = $('#dtSneakersTable').DataTable();
        var newRowNumber = 0;
        for (var i = 0; i < sneakerArray.length; i++) {
            newRowNumber = tableRowCount + i;
            //console.log("newRowNumber " + newRowNumber);
            //console.log("sneakerArray[i] " + sneakerArray[i]);
            //console.log("sneakerArray[i].Brand " + sneakerArray[i].Brand);

            //add new row to Datatable
            dtSneakersTableRef.row.add( {
                    0: newRowNumber,
                    1: sneakerArray[i].Brand,
                    2: sneakerArray[i].Style,
                    3: sneakerArray[i].Price,
                    4: sneakerArray[i].Color,
                    5: sneakerArray[i].Date
                } ).draw();
        }
    });
    //$('#dtSneakersTable').DataTable({"searching": false}); //false to disable search (or any other option)
    $('.dataTables_length').addClass('bs-select');

    $('#addSneakerBtn').click(addSneakerPurchase); //switched to use onclick() directly on the button element
});

//function to process submission of new sneaker via "Add new purchase" form
function addSneakerPurchase() {
    var addSneakerFormRef = document.getElementById('addSneakerForm');

    // if form validation fails, prevent form submission
    if (addSneakerFormRef.checkValidity() === false) {
        //event.preventDefault();
        event.stopPropagation();
        addSneakerFormRef.classList.add('was-validated')

        // Display a success toast with no title
        toastr.error('Error adding new sneaker, please check and try again!');

        //since validation failed, exit the submission
        return;
    };

    var dtSneakersTableRef = $('#dtSneakersTable').DataTable();
    var rowCount = dtSneakersTableRef.data().count();
    // console.log("Datatable row count " + rowCount);

    var newRowNumber = rowCount + 1;
    var trRowNum = newRowNumber;
    var trSneakerBrand = document.getElementById("sneakerBrand").value;
    var trSneakerStyle = document.getElementById("sneakerStyle").value;
    var trSneakerPrice = document.getElementById("sneakerPrice").value;
    var trSneakerColour = $("#sneakerColour :selected").text(); //$("#sneakerColour :selected").value()
    var trSneakerPurchaseDate =  document.getElementById("sneakerPurchaseDate").value;

    //add new row from "Add new purchase" form to Datatable, this will live in Memory and lost on refresh
    dtSneakersTableRef.row.add( {
                    0: trRowNum,
                    1: trSneakerBrand,
                    2: trSneakerStyle,
                    3: trSneakerPrice,
                    4: trSneakerColour,
                    5: trSneakerPurchaseDate
                } ).draw();

    // Display a success toast with no title
    toastr.success('New sneaker added to Browser Table (In Memory)!');

    var writeToJSONFileValue = document.getElementById("writeToJSONFile").checked;
    addSneakerFormRef.classList.remove('was-validated');
    addSneakerFormRef.reset();

    //if write to JSON checked, persist new sneaker details to file via XMLHTTPRequest
    //console.log("writeToJSONFileValue " + writeToJSONFileValue );
    if (writeToJSONFileValue === true){
        var newSneakerDetailsDict = {
            "Brand": trSneakerBrand,
            "Style": trSneakerStyle,
            "Price": trSneakerPrice,
            "Color": trSneakerColour,
            "Date": trSneakerPurchaseDate
        };
        var addSneakerRequest = new XMLHttpRequest();
        addSneakerRequest.open('post', '/addSneaker');
        addSneakerRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        // console.log("Request being sent " + JSON.stringify({
        //     'newSneakerDetails':newSneakerDetailsDict,
        //     'filePath': "./src/db/",
        //     'fileName': "my_sneakers.json"
        //         }
        //     ));

        addSneakerRequest.send(JSON.stringify({
            'newSneakerDetails':newSneakerDetailsDict,
            'filePath': "./src/db/",
            'fileName': "my_sneakers.json"
                }
            )
        );

        // Display a success toast with no title
        toastr.success('New sneaker added to JSON file (On Disk)!');
    }
};
