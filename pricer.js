function AppViewModel() {
    this.barcode = ko.observable("");
    this.showScan = ko.observable(true);
    this.showItem = ko.observable(false);
    this.showError = ko.observable(false);

    this.price = ko.observable("");
    this.clubprice = ko.observable("");
    this.deal = ko.observable("");
    this.unitprice = ko.observable("");
    this.item = ko.observable("");

    this.DisplayPage = function(sError,sItem,sScan){
        this.showScan(sScan);
        this.showItem (sItem);
        this.showError(sError);
        
    };

    this.displayItem = function(){
        console.log(this.barcode());
        if(this.barcode()=="xxx")      
            this.DisplayPage(true,false,false);
        else
        {
            this.price(23.15);
            this.clubprice(23.15);
            this.item("במבה");
            this.unitprice("מאה גרם/1.2");
            this.deal("קנה 2 קבל אחד במתנה");
            this.DisplayPage(false,true,false);
        }
        setTimeout(function(){ location.reload(); }, 5000);
            
        
    };
    this.onEnter = function(d,e){
    e.keyCode === 13 && this.displayItem();  
    return true;
}
}


ko.applyBindings(new AppViewModel());
