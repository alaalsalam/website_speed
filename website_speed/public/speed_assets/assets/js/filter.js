getDataMakes();
getDataModels();
getDataVehicleType();


function getDataMakes(){
    const url = new URL("https://api.copart-iaai-api.com/api/v1/get-makes");
    const params = {
        "vin_number": "5UXKR0C52G0P21189",
        "api_token": "7471ef49828d1441aeb4516ec5bf76cfb62fa52e4125d04bc71b41dcfce0f829",
    };
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));
    
    const headers = headersFunction();
    
    let body = "";
    
    fetch(url, {
        method: "POST",
        headers,
        body: body,
    }).then(response => response.json())
    .then((data) => {
        var makes= '<option value="">All makes</option>';
        document.querySelector("#makes").innerHTML = ''
        data.result.forEach((item) => {
            makes += `<option value="`+ item.make +`">`+ item.make +`</option>`;
        })
        document.querySelector("#makes").innerHTML = makes
    });
}

function getDataModels(){
    const url = new URL("https://api.copart-iaai-api.com/api/v1/get-models");
    const params = {
        "vin_number": "5UXKR0C52G0P21189",
        "api_token": "7471ef49828d1441aeb4516ec5bf76cfb62fa52e4125d04bc71b41dcfce0f829",
    };
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));
    
    const headers = headersFunction();
    
    let body = "";
    
    fetch(url, {
        method: "POST",
        headers,
        body: body,
    }).then(response => response.json())
    .then((data) => {
        var models= '<option value="">All models</option>';
        data.result.forEach((item) => {
            models += `<option value="`+ item.model +`">`+ item.model +`</option>`;
        })
        document.querySelector("#models").innerHTML = models
    });
}
function getDataVehicleType(){
    const url = new URL("https://api.copart-iaai-api.com/api/v1/get-vehicles-type");
    const params = {
        "vin_number": "5UXKR0C52G0P21189",
        "api_token": "7471ef49828d1441aeb4516ec5bf76cfb62fa52e4125d04bc71b41dcfce0f829",
    };
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));
    
    const headers = headersFunction();
    
    let body = "";
    
    fetch(url, {
        method: "POST",
        headers,
        body: body,
    }).then(response => response.json())
    .then((data) => {
        var vehiclesType = `<option value="AUTOMOBILE" selected>AUTOMOBILE</option>`;
        data.result.forEach((item) => {
            vehiclesType += `<option value="`+ item.vehicle_type +`">`+ item.vehicle_type +`</option>`;
        })
        document.querySelector("#vehiclesType").innerHTML = vehiclesType
    });
}
function getDataCountHistory(){
    const url = new URL("https://api.copart-iaai-api.com/api/v1/get-car-count-history");
    const params = {
        "vin_number": "5UXKR0C52G0P21189",
        "api_token": "7471ef49828d1441aeb4516ec5bf76cfb62fa52e4125d04bc71b41dcfce0f829",
    };
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));
    
    const headers = headersFunction();
    
    let body = "";
    
    fetch(url, {
        method: "POST",
        headers,
        body: body,
    }).then(response => response.json())
    .then((data) => {
        data.result.forEach((item) => {
            console.log(item)
        })
    });
}


function headersFunction(){
    return {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
        "Api-Version": "V1",
    };
}

function getResultCaes(make, model, yearFrom, yearTo){
    let url = new URL(
        "https://api.copart-iaai-api.com/api/v1/get-cars"
    );
    
    let params = {
        "make": make,
        "model": model,
        "year_from": yearFrom,
        "vehicle_type" : "AUTOMOBILE",
        "year_to": yearTo,
        "auction_date_from": "2023-01-01",
        "auction_date_to": "2023-02-01",
        "auction_name": "COPART",
        "sale_price_from": "0",
        "sale_price_to": "100000",
        "page": "1",
        "per_page": "30",
        "api_token": "7471ef49828d1441aeb4516ec5bf76cfb62fa52e4125d04bc71b41dcfce0f829",
    };
    
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));
    
    let headers = headersFunction();
    
    let body = "";
    
    fetch(url, {
        method: "POST",
        headers,
        body: body,
    }).then(response => response.json())
    .then((data) => {
        var i =0;
        data.result.forEach((item) => {
            i++;
            console.log(item)
            
        })
        console.log(i)
        viewDataInSite(data)
    });
}



function getYears(){
    let objectDate = new Date();
    let year = objectDate.getFullYear();
    var yearFrom = '';
    var yearTo = '';
    for(var i = 1899; i <= year; i ++){
        
        if(i == 2018){
            yearFrom += `<option value="`+ i +`" selected>` +i+ `</option>`;
        }else{
            yearFrom += `<option value="`+ i +`">` +i+ `</option>`;
        }
        if(i == year){
            i++;
            yearFrom += `<option value="`+ i +`">` +i+ `</option>`;
        }
        if(i == 2019){
            yearTo += `<option value="`+ i +`" selected>` +i+ `</option>`;
        }else{
            yearTo += `<option value="`+ i +`">` +i+ `</option>`;
        }
        if(i == year){
            i++;
            yearTo += `<option value="`+ i +`">` +i+ `</option>`;
        }
    }
    document.querySelector('#yearsStart').innerHTML = yearFrom;
    document.querySelector('#yearsEnd').innerHTML = yearTo;
}

function viewDataInSite(data){
    var row = document.querySelector('#dataApi').innerHTML;
    data.result.forEach((item) => {
        var photo = '';
        var seller = '';
        var primaryDamage = '';
        var secondaryDamage = '';
        if(item.car_photo != null){
            photo = item.car_photo.photo[0];
        }
        if(item.seller != null){
            seller = item.seller;
        }else{
            seller = "....";
        }
        if(item.primary_damage != null){
            primaryDamage = item.primary_damage;
        }
        if(item.secondary_damage != null){
            secondaryDamage = ' | ' + item.secondary_damage;
        }
        var salesHistory = '';
        item.sales_history.forEach((history) => {
            salesHistory = history.sale_date * 1000;
        })
        getEndDate(salesHistory);
        row += `
                <div class="row py-3 border-bottom m-0 section-animation">
                <div class="col-md-4 image-animate">
                    <img src="`+ photo +`" alt="" class="w-100 h-100">
                </div>
                <div class="col-md-5 animate-top transition-delay-1">
                    <h4>
                        <a href="details.html?id=`+item.lot_id+`&auction_name=`+item.auction_name+`">`+ item.year +` `+ item.make +`, `+item.model+`, `+ item.series +`</a>
                    </h4>
                    <div class="">
                        <p class="m-0 text-muted">
                            Number: <span class="text-dark"> 0-`+item.lot_id+`</span>
                        </p>
                        <p class="m-0 text-muted">
                            VIN: <span class="text-dark"> `+item.vin+`</span>
                        </p>
                        <p class="m-0 text-muted">
                            Milage: <span class="text-dark">  10k miles (16k km)</span>
                        </p>
                        <p class="m-0 text-muted">
                            Location: <span class="text-dark"> `+item.location+`</span>
                        </p>
                        <p class="m-0 text-muted">
                            Seller: <span class="text-dark"> `+seller+`</span>
                        </p>
                    </div>
                </div>
                <div class="col-md-3 animate-top transition-delay-2">
                    <div class="date">
                        <p class="fw-bold">
                            <i class="fa-solid fa-calendar-days"></i> `+new Date(salesHistory).toString().substring(4, 15)+`
                        </p>
                    </div>
                    <p class="price py-2 rounded-2 bg-light text-center fs-6 fw-bold my-4">
                        <span class="fs-5">$5,300</span>
                    </p>
                    <div class="status-auction mt-3">
                        
                    </div>
                </div>
                <div class="col-md-12 animate-top transition-delay-3">
                    <div class="d-flex flex-wrap bg-light py-2">
                        <p class="m-0 text-muted mx-2">
                            Sale doc.: <span class="text-dark"> Salvage (Mississippi)</span>
                        </p>
                        <p class="m-0 text-muted mx-2">
                            Damage: <span class="text-dark"> `+secondaryDamage +` ` +primaryDamage+ `</span>
                        </p>
                        <p class="m-0 text-muted mx-2">
                            Status: <span class="text-dark"> `+item.highlights+`</span>
                        </p>
                    </div>
                </div>
            </div>
        `;
    })
    document.querySelector('#dataApi').innerHTML = row;
}


function getEndDate(date){
    var countDownDate = date;
    
    var myfunc = setInterval(function() {
    // code goes here
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
            
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        document.querySelectorAll(".status-auction").forEach((item) => {
            if(timeleft < 0){
                item.innerHTML = `<p class="text-danger fs-5 fw-bold"><i class="fa-solid fa-triangle-exclamation"></i> Pre-Bid Closed</p>`;
            }else{
                item.innerHTML = `<p class="text-info fs-5 fw-bold"><i class="fa-solid fa-triangle-exclamation"></i> `+ days + "d " + hours + "h " + minutes + " min left " +`</p>`;
            }
            
        })
    }, 1000)
}




