function AppViewModel() {
    this.barcode = ko.observable("");
    this.showScan = ko.observable(true);
    this.showItem = ko.observable(false);
    this.showError = ko.observable(false);
    
    this.displayItem = function(){
        console.log(this.barcode());
        if(this.barcode="xxx")
        {
            this.showError(!this.showError());
            return;
        }
        this.showItem(!this.showItem());
        this.showScan(!this.showScan());
    };
    this.onEnter = function(d,e){
    e.keyCode === 13 && this.displayItem();  
    return true;
}
}


ko.applyBindings(new AppViewModel());
